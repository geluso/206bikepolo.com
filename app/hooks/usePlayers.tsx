"use server"

import prisma from "@/lib/prisma"

export default async function usePlayers() {
  const tournamentState = await prisma.royalRumbleTournamentState.findFirst()
  let tag = tournamentState?.currentTag
  if (!tag) {
    tag = 'live'
  }
  console.log('using tag', tag)
  const players = await prisma.royalRumblePlayer.findMany({ where: { tag: tag }})
  return players
}