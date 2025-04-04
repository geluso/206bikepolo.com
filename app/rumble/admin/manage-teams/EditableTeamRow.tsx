"use client"

import { RoyalRumblePlayer, RoyalRumbleTeam } from "@prisma/client";
import { PlayerDropdown } from "./PlayerDropdown";
import { useState } from "react";
import { saveTeam } from "./actions";

export default function EditableTeamRow({ team, players, playerIdsToPlayer }: {
  team: RoyalRumbleTeam,
  players: RoyalRumblePlayer[],
  playerIdsToPlayer: Record<string, RoyalRumblePlayer>
}) {
  const [player1, setPlayer1] = useState(playerIdsToPlayer[team.player1Id])
  const [player2, setPlayer2] = useState(playerIdsToPlayer[team.player2Id])
  const [player3, setPlayer3] = useState(playerIdsToPlayer[team.player3Id])

  const handleSave = async () => {
    console.log('save team', team, player1, player2, player3)
    const saved = await saveTeam(team.id, player1.id, player2.id, player3.id)
    console.log('saved team', saved)
  }

  return <tr key={team.id}>
    <td className="pl-1">{team.name}</td>
    <td className="pl-1">
      <PlayerDropdown currentPlayer={player1} players={players} playerIdsToPlayer={playerIdsToPlayer} onSet={(player: RoyalRumblePlayer) => { setPlayer1(player); return; } }/>
    </td>
    <td className="pl-1">
      <PlayerDropdown currentPlayer={player2} players={players} playerIdsToPlayer={playerIdsToPlayer} onSet={(player: RoyalRumblePlayer) => { setPlayer2(player); return; }} />
    </td>
    <td className="pl-1">
      <PlayerDropdown currentPlayer={player3} players={players} playerIdsToPlayer={playerIdsToPlayer} onSet={(player: RoyalRumblePlayer) => { setPlayer3(player); return; }} />
    </td>
    <td className="text-center"><button onClick={handleSave}>save</button></td>
  </tr>
}