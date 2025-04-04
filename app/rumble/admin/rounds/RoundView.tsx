import getGames from "../../util/getGames"
import getPlayerIdsToPlayers from "../../util/getPlayerIdsToPlayers"
import getTeamIdsToTeams from "../../util/getTeamIdsToTeams"
import GameScoreCard from "./GameScoreCard"

export default async function RoundView({displayName, series}: { displayName: string, series: string }) {
  const playerIdsToPlayer = await getPlayerIdsToPlayers()
  const teamIdsToTeam = await getTeamIdsToTeams(series)
  const games = await getGames(series)
  return <div>
    <h2>{displayName}</h2>
    {games.length === 0 && <p>Round not created yet.</p>}
    {games.length > 0 && games.map(game => {
      return <GameScoreCard key={game.id} game={game} playerIdsToPlayer={playerIdsToPlayer} teamIdsToTeam={teamIdsToTeam} />
    })}
  </div>
}