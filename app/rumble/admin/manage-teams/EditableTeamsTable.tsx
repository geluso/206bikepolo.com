"use client"

import { RoyalRumblePlayer, RoyalRumbleTeam } from "@prisma/client";
import { PlayerDropdown } from "./PlayerDropdown";
import EditableTeamRow from "./EditableTeamRow";
import { PlayerStandings } from "../../util/getPlayerStandings";

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

export default function EditableTeamsTable({ players, teams, playerIdsToPlayer, playerStandings }: {
  players: RoyalRumblePlayer[],
  teams: RoyalRumbleTeam[],
  playerIdsToPlayer: Record<string, RoyalRumblePlayer>,
  playerStandings: PlayerStandings
}) {
  if (!teams || teams.length === 0) {
    return <p>No teams created yet.</p>
  }

  teams.sort((t1, t2) => t1.name.localeCompare(t2.name))

  const playersNotOnTeams: Set<string> = new Set()
  const playerTeams: Record<string, string[]> = {}
  players.forEach(player => {
    playersNotOnTeams.add(player.id)
    playerTeams[player.id] = []
  })

  teams.forEach(team => {
    playersNotOnTeams.delete(team.player1Id)
    playersNotOnTeams.delete(team.player2Id)
    playersNotOnTeams.delete(team.player3Id)

    playerTeams[team.player1Id].push(team.name)
    playerTeams[team.player2Id].push(team.name)
    playerTeams[team.player3Id].push(team.name)
  })

  const dupedPlayerIdsWithTeamNames = []
  const playerIdsNotOnTeams = []
  for (const playerId in playerTeams) {
    const teamNames = playerTeams[playerId]
    if (teamNames.length === 0) {
      playerIdsNotOnTeams.push(playerId)
    } else if (teamNames.length > 1) {
      dupedPlayerIdsWithTeamNames.push({ playerId, teamNames})
    }
  }

  return <div>
    <h3>Teams</h3>
    <h3>Missing Players</h3>
    <ul>
      {playerIdsNotOnTeams.map((playerId: string) => <li key={playerId}>({playerStandings.playerPoints[playerId]}) {playerIdsToPlayer[playerId].player}</li>)}
    </ul>

    <h3>Duplicate Players</h3>
    <ul>
      {dupedPlayerIdsWithTeamNames.map(({playerId, teamNames}) => <li key={playerId}>({playerStandings.playerPoints[playerId]}) {playerIdsToPlayer[playerId].player} is on {teamNames.join(" and ")}</li>)}
    </ul>
    <table className="w-full" border={1}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Player 1</th>
          <th>Player 2</th>
          <th>Player 3</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {teams.map(team => {
          return <EditableTeamRow key={team.id} team={team} players={players} playerIdsToPlayer={playerIdsToPlayer} />
        })}
      </tbody>
    </table>

    <p>
      <a href={toCSV(teams, playerIdsToPlayer)} download={"teams.csv"}>⬇️ Download CSV</a>
    </p>
  </div>
}