"use server"

import prisma from "@/lib/prisma"

export async function resetDefaultTournamentState() {
  try {
    await prisma.royalRumbleTournamentState.deleteMany()
    await prisma.royalRumbleTournamentState.create({ data: {
      currentTag: 'default',
      currentSeries: 'day1',
    }})
  } catch (e) {
    console.error("Error resetDefaultTournamentState", e)
    return false
  }
  return true
}

export async function setTournamentState(tag: string, series: string) {
  try {
    console.log('SAVE setTournamentState', tag, series)
    await prisma.royalRumbleTournamentState.deleteMany()
    await prisma.royalRumbleTournamentState.create({ data: {
      currentTag: tag,
      currentSeries: series,
    }})
  } catch (e) {
    console.error("Error setTournamentState", e)
    return false
  }
  return true
}