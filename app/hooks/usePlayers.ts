"use server"

import prisma from "@/lib/prisma"
import useCurrentTag from "./useCurrentTag"

export default async function usePlayers() {
  const tag = await useCurrentTag()
  const players = await prisma.royalRumblePlayer.findMany({ where: { tag: tag }})
  return players
}