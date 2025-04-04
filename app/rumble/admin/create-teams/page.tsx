import usePlayerIdsToPlayers from "@/app/hooks/usePlayerIdsToPlayers";
import { CreateTeams } from "./CreateTeams";
import { usePlayerStandings } from "@/app/hooks/usePlayerStandings";
import usePlayers from "@/app/hooks/usePlayers";

export default async function Page() {
  const players = await usePlayers()
  const playerStandings = await usePlayerStandings()
  const playerIdsToPlayer = await usePlayerIdsToPlayers()
  return <div>
    <h1>Create Teams</h1>
    <CreateTeams players={players} playerStandings={playerStandings} playerIdsToPlayer={playerIdsToPlayer} />
  </div>
}