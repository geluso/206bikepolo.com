"use server"

import { RoyalRumblePlayer } from "@prisma/client";
import getPlayers from "./getPlayers";

export default async function getPlayerIdsToPlayers() {
  const players = await getPlayers()
  const playersIdsToPlayers: Record<string, RoyalRumblePlayer> = {}
  players.forEach(player => playersIdsToPlayers[player.id] = player)
  return playersIdsToPlayers
}