"use client"

import { RoyalRumblePlayer } from "@prisma/client";
import { ChangeEvent } from "react";

export function PlayerDropdown({ currentPlayer, players, playerIdsToPlayer, onSet }: {
  currentPlayer: RoyalRumblePlayer,
  players: RoyalRumblePlayer[],
  playerIdsToPlayer: Record<string, RoyalRumblePlayer>,
  onSet: (player: RoyalRumblePlayer) => void
}) {
  const handleSetPlayer = (ev: ChangeEvent<HTMLSelectElement>) => {
    const player = playerIdsToPlayer[ev.currentTarget.value]
    onSet(player)
  }

  return <select value={currentPlayer.id} onChange={handleSetPlayer}>
    {players.map(player => {
      return <option key={player.id} value={player.id}>{player.player}</option>
    })}
  </select>
}