import { RoyalRumbleGame, RoyalRumblePlayer, RoyalRumbleTeam } from "@prisma/client";
import getGames from "../../util/getGames"
import getPlayerIdsToPlayers from "../../util/getPlayerIdsToPlayers"
import getTeamIdsToTeams from "../../util/getTeamIdsToTeams"
import GameScoreCard from "./GameScoreCard"

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

    const t1p1Points = game.team1Player1Points
    const t1p2Points = game.team1Player2Points
    const t1p3Points = game.team1Player3Points

    const t2p1Points = game.team2Player1Points
    const t2p2Points = game.team2Player2Points
    const t2p3Points = game.team2Player3Points

    const team1TotalPoints = t1p1Points + t1p2Points + t1p3Points
    const team2TotalPoints = t2p1Points + t2p2Points + t2p3Points

    csvContent += `Game ${game.gameNumber}, Team 1, Team 2, Points\r\n`;
    csvContent += t1p1Points + ", " + team1Player1 + ", " + team2Player1 + `, ${t2p1Points}\r\n`
    csvContent += t1p1Points + ", " + team1Player2 + ", " + team2Player2 + `, ${t2p2Points}\r\n`
    csvContent += t1p1Points + ", " + team1Player3 + ", " + team2Player3 + `, ${t2p3Points}\r\n`
    csvContent += team1TotalPoints + ", " +                ", "                + `, ${team2TotalPoints}\r\n`
    csvContent += ",,,\r\n"
  })

  var encodedUri = prefix + encodeURIComponent(csvContent);
  return encodedUri
}


export default async function RoundView({displayName, series}: { displayName: string, series: string }) {
  const playerIdsToPlayer = await getPlayerIdsToPlayers()
  const teamIdsToTeam = await getTeamIdsToTeams(series)
  const games = await getGames(series)
  return <div>
    <h2>{displayName}</h2>
    <p>
      <a href={toCSV(games, playerIdsToPlayer, teamIdsToTeam)} download={`games-${series}.csv`}>⬇️ Download CSV</a>
    </p>
    {games.length === 0 && <p>Round not created yet.</p>}
    {games.length > 0 && games.map(game => {
      return <GameScoreCard key={game.id} game={game} playerIdsToPlayer={playerIdsToPlayer} teamIdsToTeam={teamIdsToTeam} />
    })}
  </div>
}