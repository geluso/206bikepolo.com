import usePlayerIdsToPlayers from "@/app/hooks/usePlayerIdsToPlayers";
import { CreateTeams } from "./CreateTeams";

export default async function Page() {
  const playerIdsToPlayer = await usePlayerIdsToPlayers()
  return <div>
    <h1>Create Teams</h1>
    <CreateTeams playerIdsToPlayer={playerIdsToPlayer} />
  </div>
}