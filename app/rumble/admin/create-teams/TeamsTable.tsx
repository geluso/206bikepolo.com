"use client"

import { RoyalRumblePlayer, RoyalRumbleTeam } from "@prisma/client";
import { PlayerDropdown } from "./PlayerDropdown";

function toCSV(teams: RoyalRumbleTeam[], playerIdsToPlayer: Record<string, RoyalRumblePlayer>) {
  let prefix = "data:text/csv;charset=utf-8,";
  let header = "Name, Player 1, Player 2, Player 3";
  let csvContent = header + "\r\n";
  
  teams.forEach(team => {
    let player1Name = playerIdsToPlayer[team.player1Id].player
    let player2Name = playerIdsToPlayer[team.player2Id].player
    let player3Name = playerIdsToPlayer[team.player3Id].player
    csvContent += team.name + ", " + player1Name + ", " + player2Name + ", " + player3Name + "\r\n"
  })

  var encodedUri = prefix + encodeURIComponent(csvContent);
  return encodedUri
}

export default function TeamsTable({ teams, playerIdsToPlayer }: {
  teams: RoyalRumbleTeam[],
  playerIdsToPlayer: Record<string, RoyalRumblePlayer>
}) {
  if (!teams || teams.length === 0) {
    return null
  }

  return <div>
    <h3>Teams</h3>
    <table className="w-full" border={1}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Player 1</th>
          <th>Player 2</th>
          <th>Player 3</th>
        </tr>
      </thead>
      <tbody>
        {teams.map(team => {
          const player1 = playerIdsToPlayer[team.player1Id].player
          const player2 = playerIdsToPlayer[team.player2Id].player
          const player3 = playerIdsToPlayer[team.player3Id].player
          return <tr key={team.id}>
            <td className="pl-1">{team.name}</td>
            <td className="pl-1">
              {player1}
            </td>
            <td className="pl-1">
              {player2}
            </td>
            <td className="pl-1">
              {player3}
            </td>
          </tr>
        })}
      </tbody>
    </table>

    <p>
      <a href={toCSV(teams, playerIdsToPlayer)} download={"teams.csv"}>⬇️ Download CSV</a>
    </p>
  </div>
}