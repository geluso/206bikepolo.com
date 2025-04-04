import usePlayerIdsToPlayers from "@/app/hooks/usePlayerIdsToPlayers";
import { CreateTeams } from "./CreateTeams";
import { usePlayerStandings } from "@/app/hooks/usePlayerStandings";

export default async function Page() {
  const playerStandings = await usePlayerStandings()
  const playerIdsToPlayer = await usePlayerIdsToPlayers()
  return <div>
    <h1>Create Teams</h1>
    <CreateTeams playerStandings={playerStandings} playerIdsToPlayer={playerIdsToPlayer} />
  </div>
}