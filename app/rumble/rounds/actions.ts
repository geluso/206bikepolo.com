"use server"

import useTeamIdsToTeams from "@/app/hooks/useTeamIdsToTeams"
import prisma from "@/lib/prisma"

export async function toggleComplete(gameId: string) {
  const game = await prisma.royalRumbleGame.findFirst({ where: { id: gameId } })
  if (!game) {
    return false;
  }

  let newIsComplete = !game.isComplete
  const updated = await prisma.royalRumbleGame.update({ where: { id: gameId }, data: { isComplete: newIsComplete } })
  return updated
}

export async function updateScore(gameId: string, playerId: string, delta: number) {
  const game = await prisma.royalRumbleGame.findFirst({ where: { id: gameId } })
  if (!game) {
    return false;
  }

  const series = game?.series
  const teamIdsToTeams = await useTeamIdsToTeams(series)
  const team1 = teamIdsToTeams[game.team1Id]
  const team2 = teamIdsToTeams[game.team2Id]

  let oldPoints = 0
  let key = ''
  if (playerId === team1.player1Id) {
    oldPoints = game.team1Player1Points
    key = 'team1Player1Points'
  } else if (playerId === team1.player2Id) {
    oldPoints = game.team1Player2Points
    key = 'team1Player2Points'
  } else if (playerId === team1.player3Id) {
    oldPoints = game.team1Player3Points
    key = 'team1Player3Points'
  } else if (playerId === team2.player1Id) {
    oldPoints = game.team2Player1Points
    key = 'team2Player1Points'
  } else if (playerId === team2.player2Id) {
    oldPoints = game.team2Player2Points
    key = 'team2Player2Points'
  } else if (playerId === team2.player3Id) {
    oldPoints = game.team2Player3Points
    key = 'team2Player3Points'
  }

  let newPoints = Math.max(0, oldPoints + delta)
  console.log('updateScore', {key, oldPoints, newPoints})

  let data: Record<string, number> = {}
  data[key] = newPoints

  const updated = await prisma.royalRumbleGame.update({ where: { id: gameId }, data })
  return updated
}