"use server"

import prisma from "@/lib/prisma"

export async function createTag(tag: string) {
  try {
    console.log('CREATE createTag', tag)
    await prisma.royalRumbleTagSettings.create({ data: { tag }})
    await prisma.royalRumbleTournamentState.deleteMany()
    await prisma.royalRumbleTournamentState.create({ data: { currentTag: tag, }})
  } catch (e) {
    console.error("Error createTag", e)
    return false
  }
  return true
}

export async function setTournamentState(tag: string) {
  try {
    console.log('SAVE setTournamentState', tag)
    await prisma.royalRumbleTournamentState.deleteMany()
    await prisma.royalRumbleTournamentState.create({ data: { currentTag: tag }})
  } catch (e) {
    console.error("Error setTournamentState", e)
    return false
  }
  return true
}