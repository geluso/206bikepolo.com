"use server"

import prisma from "@/lib/prisma"
import getCurrentTag from "./getCurrentTag"

export default async function getPlayers() {
  const tag = await getCurrentTag()
  const players = await prisma.royalRumblePlayer.findMany({ where: { tag }})
  return players
}