"use server"

import prisma from "@/lib/prisma"

export async function setTournamentState(tag: string, series: string, round: number) {
  try {
    await prisma.royalRumbleTournamentState.deleteMany()
    await prisma.royalRumbleTournamentState.create({ data: {
      currentTag: tag,
      currentSeries: series,
      currentRound: round
    }})
  } catch (e) {
    console.error("Error setTournamentState", e)
    return false
  }
  return true
}