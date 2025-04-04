import useGames from "@/app/hooks/useGames"
import usePlayerIdsToPlayers from "@/app/hooks/usePlayerIdsToPlayers"
import useTeamIdsToTeams from "@/app/hooks/useTeamIdsToTeams"
import GameScoreCard from "./GameScoreCard"

export default async function RoundView({displayName, series}: { displayName: string, series: string }) {
  const playerIdsToPlayer = await usePlayerIdsToPlayers()
  const teamIdsToTeam = await useTeamIdsToTeams(series)
  const games = await useGames(series)
  return <div>
    <h1>{displayName}</h1>
    {games.length === 0 && <p>Round not created yet.</p>}
    {games.length > 0 && games.map(game => {
      return <GameScoreCard key={game.id} game={game} playerIdsToPlayer={playerIdsToPlayer} teamIdsToTeam={teamIdsToTeam} />
    })}
  </div>
}