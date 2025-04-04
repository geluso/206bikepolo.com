"use client"

import { RoyalRumblePlayer, RoyalRumbleTeam } from "@prisma/client";

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
          const player1Name = playerIdsToPlayer[team.player1Id]
          const player2Name = playerIdsToPlayer[team.player2Id]
          const player3Name = playerIdsToPlayer[team.player3Id]
          return <tr key={team.id}>
            <th>{team.name}</th>
            <th>{player1Name.player}</th>
            <th>{player2Name.player}</th>
            <th>{player3Name.player}</th>
          </tr>
        })}
      </tbody>
    </table>

    <p>
      <a href={toCSV(teams, playerIdsToPlayer)} download={"teams.csv"}>⬇️ Download CSV</a>
    </p>
  </div>
}