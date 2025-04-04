"use server"

import prisma from "@/lib/prisma"
import { RoyalRumblePlayer, RoyalRumbleTeam } from "@prisma/client"
import usePlayers from "./usePlayers"
import useCurrentTag from "./useCurrentTag"

export type PlayerStandings = {
  playerWins: Record<string, number>
  playerTies: Record<string, number>
  playerLosses: Record<string, number>
  playerGoals: Record<string, number>
  playerPoints: Record<string, number>
  sortedPlayers: RoyalRumblePlayer[]
}

export async function usePlayerStandings(): Promise<PlayerStandings> {
  const tag = await useCurrentTag()
  const players = await usePlayers()
  const teams = (await prisma.royalRumbleTeam.findMany({ where: { tag }}))
  const games = (await prisma.royalRumbleGame.findMany({ where: { tag }}))
  
  console.log('TOTAL TEAMS', teams.length)
  console.log('TOTAL GAMES', games.length)
  const teamIdsToTeam: Record<string, RoyalRumbleTeam> = {}
  teams.forEach(team => teamIdsToTeam[team.id] = team)

  const playerWins: Record<string, number> = {}
  const playerTies: Record<string, number> = {}
  const playerLosses: Record<string, number> = {}
  const playerGoals: Record<string, number> = {}
  const playerPoints: Record<string, number> = {}

  // initialize all player counts as zero for easy math
  players.forEach(player => {
    playerWins[player.id] = 0
    playerTies[player.id] = 0
    playerLosses[player.id] = 0
    playerGoals[player.id] = 0
    playerPoints[player.id] = 0
  })

  games.forEach(game => {
    console.log('TEAMS', game.team1Id, game.team2Id)
    console.log('GAME', game.series, game.gameNumber, game.team1Player1Points, game.team1Player2Points, game.team1Player3Points, game.team2Player1Points, game.team2Player2Points, game.team2Player3Points)

    const team1 = teamIdsToTeam[game.team1Id]
    const team2 = teamIdsToTeam[game.team2Id]

    const t1p1Id = team1.player1Id
    const t1p2Id = team1.player2Id
    const t1p3Id = team1.player3Id

    const t2p1Id = team2.player1Id
    const t2p2Id = team2.player2Id
    const t2p3Id = team2.player3Id

    playerGoals[t1p1Id] += game.team1Player1Points
    playerGoals[t1p2Id] += game.team1Player2Points
    playerGoals[t1p3Id] += game.team1Player3Points
    playerGoals[t2p1Id] += game.team2Player1Points
    playerGoals[t2p2Id] += game.team2Player2Points
    playerGoals[t2p3Id] += game.team2Player3Points

    const team1TotalScore = game.team1Player1Points + game.team1Player2Points + game.team1Player3Points
    const team2TotalScore = game.team2Player1Points + game.team2Player2Points + game.team1Player3Points

    if (team1TotalScore > team2TotalScore) {
      playerWins[t1p1Id]++
      playerWins[t1p2Id]++
      playerWins[t1p3Id]++

      playerLosses[t2p1Id]++
      playerLosses[t2p2Id]++
      playerLosses[t2p3Id]++
    } else if (team2TotalScore > team1TotalScore) {
      playerWins[t2p1Id]++
      playerWins[t2p2Id]++
      playerWins[t2p3Id]++

      playerLosses[t1p1Id]++
      playerLosses[t1p2Id]++
      playerLosses[t1p3Id]++
    } else if (team1TotalScore === team2TotalScore) {
      playerTies[t1p1Id]++
      playerTies[t1p2Id]++
      playerTies[t1p3Id]++

      playerTies[t2p1Id]++
      playerTies[t2p2Id]++
      playerTies[t2p3Id]++
    }
  })

  players.forEach(player => {
    let wins = playerWins[player.id]
    let ties = playerTies[player.id]

    const points = 4 * wins + 2 * ties
    playerPoints[player.id] = points
  })

  const sortedPlayers = players.sort((p1, p2) => {
    const diff = playerPoints[p2.id] - playerPoints[p1.id]
    if (diff === 0) {
      const player1Goals = playerGoals[p1.id]
      const player2Goals = playerGoals[p2.id]
      return player2Goals - player1Goals
    }
    return diff
  })

  const standings: PlayerStandings = {
    playerWins, playerTies, playerLosses, playerGoals, playerPoints,
    sortedPlayers
  }
  return standings
}