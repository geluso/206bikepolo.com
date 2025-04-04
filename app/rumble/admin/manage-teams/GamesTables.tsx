"use client"

import { RoyalRumbleGame, RoyalRumblePlayer, RoyalRumbleTeam } from "@prisma/client";

function toCSV(
  games: RoyalRumbleGame[],
  playerIdsToPlayer: Record<string, RoyalRumblePlayer>,
  teamIdsToTeam: Record<string, RoyalRumbleTeam>
) {
  let prefix = "data:text/csv;charset=utf-8,";
  let csvContent = ""
  
  games.forEach(game => {
    const team1 = teamIdsToTeam[game.team1Id]
    const team2 = teamIdsToTeam[game.team2Id]

    const team1Player1 = playerIdsToPlayer[team1.player1Id].player
    const team1Player2 = playerIdsToPlayer[team1.player2Id].player
    const team1Player3 = playerIdsToPlayer[team1.player3Id].player

    const team2Player1 = playerIdsToPlayer[team2.player1Id].player
    const team2Player2 = playerIdsToPlayer[team2.player2Id].player
    const team2Player3 = playerIdsToPlayer[team2.player3Id].player

    csvContent += `Game ${game.gameNumber}, Team 1, Team 2, Points\r\n`;
    csvContent += "0, " + team1Player1 + ", " + team2Player1 + ", 0\r\n"
    csvContent += "0, " + team1Player2 + ", " + team2Player2 + ", 0\r\n"
    csvContent += "0, " + team1Player3 + ", " + team2Player3 + ", 0\r\n"
    csvContent += "0, " +                ", "                + ", 0\r\n"
    csvContent += ",,,\r\n"
  })

  var encodedUri = prefix + encodeURIComponent(csvContent);
  return encodedUri
}

export default function GamesTable({ games, teams, playerIdsToPlayer }: {
  games: RoyalRumbleGame[],
  teams: RoyalRumbleTeam[],
  playerIdsToPlayer: Record<string, RoyalRumblePlayer>
}) {
  if (!teams || teams.length === 0) {
    return null
  }

  const teamIdsToTeam: Record<string, RoyalRumbleTeam> = {}
  teams.forEach(team => teamIdsToTeam[team.id] = team)

  return <div>
    <h3>Games</h3>

    {games.map(game => {
      const team1 = teamIdsToTeam[game.team1Id]
      const team2 = teamIdsToTeam[game.team2Id]

      const team1Player1 = playerIdsToPlayer[team1.player1Id].player
      const team1Player2 = playerIdsToPlayer[team1.player2Id].player
      const team1Player3 = playerIdsToPlayer[team1.player3Id].player

      const team2Player1 = playerIdsToPlayer[team2.player1Id].player
      const team2Player2 = playerIdsToPlayer[team2.player2Id].player
      const team2Player3 = playerIdsToPlayer[team2.player3Id].player

      return <div key={game.id}>
        <h4>Game {game.gameNumber}</h4>
        <table key={game.id} className="w-full" border={1}>
          <thead>
            <tr>
              <th>Points</th>
              <th>Team 1</th>
              <th>Team 2</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>0</td>
                <td className="pl-1">{team1Player1}</td>
                <td className="pl-1">{team2Player1}</td>
                <td>0</td>
              </tr>
              <tr>
                <td>0</td>
                <td className="pl-1">{team1Player2}</td>
                <td className="pl-1">{team2Player2}</td>
                <td>0</td>
              </tr>
              <tr>
                <td>0</td>
                <td className="pl-1">{team1Player3}</td>
                <td className="pl-1">{team2Player3}</td>
                <td>0</td>
              </tr>
              <tr>
                <td>0</td>
                <td></td>
                <td></td>
                <td>0</td>
              </tr>
          </tbody>
        </table>
      </div>
    })}
  
    <p>
      <a href={toCSV(games, playerIdsToPlayer, teamIdsToTeam)} download={"games.csv"}>⬇️ Download CSV</a>
    </p>
  </div>
}