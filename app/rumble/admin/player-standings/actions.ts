"use server"

import prisma from "@/lib/prisma"
import { RoyalRumblePlayer, RoyalRumbleTeam } from "@prisma/client"

export type PlayerStandings = {
  playerWins: Record<string, number>
  playerTies: Record<string, number>
  playerLosses: Record<string, number>
  playerGoals: Record<string, number>
  playerPoints: Record<string, number>
  sortedPlayers: RoyalRumblePlayer[]
}

export async function usePlayerStandings(): Promise<PlayerStandings> {
  const tournamentState = await prisma.royalRumbleTournamentState.findFirst()
  const tag = tournamentState?.currentTag ?? "live"
  const players = (await prisma.royalRumblePlayer.findMany({ where: { tag } }))
  const teams = (await prisma.royalRumbleTeam.findMany())
  const games = (await prisma.royalRumbleGame.findMany())
  
  const teamIdToTeam = teams.reduce((accum, curr) => accum[curr.id] = curr, {} as Record<string, RoyalRumbleTeam>)
  console.log(teamIdToTeam)

  const playerWins: Record<string, number> = {}
  const playerTies: Record<string, number> = {}
  const playerLosses: Record<string, number> = {}
  const playerGoals: Record<string, number> = {}
  const playerPoints: Record<string, number> = {}

  players.forEach(player => {
    const wins = Math.ceil(Math.random() * 5)
    const losses = Math.ceil(Math.random() * (5 - wins))
    const ties = Math.ceil(Math.random() * (5 - wins - losses))
    const goals = Math.ceil(Math.random() * 15)

    playerWins[player.id] = wins
    playerTies[player.id] = ties
    playerLosses[player.id] = losses
    playerGoals[player.id] = goals

    const points = 4 * wins + 2 * ties
    playerPoints[player.id] = points
  })

  const sortedPlayers = players.sort((p1, p2) => {
    const diff = playerPoints[p2.id] - playerPoints[p1.id]
    if (diff === 0) {
      return playerGoals[p2.id] - playerGoals[p1.id]
    }
    return diff
  })

  return {
    playerWins, playerTies, playerLosses, playerGoals, playerPoints,
    sortedPlayers
  }
}