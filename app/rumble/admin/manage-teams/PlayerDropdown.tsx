"use client"

import { RoyalRumblePlayer } from "@prisma/client";
import { useState } from "react";

export function PlayerDropdown({ player, players }: {
  player: RoyalRumblePlayer, players: RoyalRumblePlayer[]
}) {
  const [currentPlayerId, setCurrentPlayer] = useState(player.id)
  return <select value={currentPlayerId} onChange={(ev) => setCurrentPlayer(ev.currentTarget.value)}>
    {players.map(player => {
      return <option key={player.id} value={player.id}>{player.player}</option>
    })}
  </select>
}