import useGames from "@/app/hooks/useGames"
import GameScoreCard from "../GameScoreCard"
import usePlayerIdsToPlayers from "@/app/hooks/usePlayerIdsToPlayers"
import useTeamIdsToTeams from "@/app/hooks/useTeamIdsToTeams"

export default async function Page() {
  const series = 'round1'
  const playerIdsToPlayer = await usePlayerIdsToPlayers()
  const teamIdsToTeam = await useTeamIdsToTeams(series)
  const games = await useGames(series)
  return <div>
    <h1>Round 1</h1>
    {games.length === 0 && <p>Round not created yet.</p>}
    {games.length > 0 && games.map(game => {
      return <GameScoreCard key={game.id} game={game} playerIdsToPlayer={playerIdsToPlayer} teamIdsToTeam={teamIdsToTeam} />
    })}
  </div>
}