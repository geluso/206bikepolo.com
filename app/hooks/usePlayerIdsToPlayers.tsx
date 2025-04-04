"use server"

import { RoyalRumblePlayer } from "@prisma/client";
import usePlayers from "./usePlayers";

export default async function usePlayerIdsToPlayers() {
  const players = await usePlayers()
  const playersIdsToPlayers: Record<string, RoyalRumblePlayer> = {}
  players.forEach(player => playersIdsToPlayers[player.id] = player)
  return playersIdsToPlayers
}