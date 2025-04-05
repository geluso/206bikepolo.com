import getGames from "../util/getGames"
import getPlayerIdsToPlayers from "../util/getPlayerIdsToPlayers"
import getTeamIdsToTeams from "../util/getTeamIdsToTeams"
import PublicGameScoreCard from "./PublicGameScoreCard"

export default async function PublicRoundView({displayName, series}: { displayName: string, series: string }) {
  const playerIdsToPlayer = await getPlayerIdsToPlayers()
  const teamIdsToTeam = await getTeamIdsToTeams(series)
  const games = await getGames(series)

  let completeGames = 0
  games.forEach(game => {
    if (game.isComplete) {
      completeGames++
    }
  })
  
  const sayings = [
    "On Court",
    "On Deck",
    "In the Hole",
    "In the Barn",
    "Over the River",
    "Through the Woods",
    "Grandma's House",
    "Eight Feet Under",
    "Ringing the Bell",
    "Buried Alive",
  ]

  return <div>
    <h2>{displayName}</h2>
    {games.length === 0 && <p>Round not created yet.</p>}
    {games.length > 0 && games.map((game, index) => {
      return <PublicGameScoreCard key={game.id} game={game} playerIdsToPlayer={playerIdsToPlayer} teamIdsToTeam={teamIdsToTeam} sayings={sayings} index={index} completeGames={completeGames} />
    })}
  </div>
}