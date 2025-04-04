import getPlayerIdsToPlayers from "@/app/rumble/util/getPlayerIdsToPlayers";
import { CreateTeams } from "./CreateTeams";
import { getPlayerStandings } from "@/app/rumble/util/getPlayerStandings";
import getPlayers from "@/app/rumble/util/getPlayers";
import getCurrentTag from "@/app/rumble/util/getCurrentTag";

export default async function Page() {
  const tag = await getCurrentTag()
  const players = await getPlayers()
  const playerStandings = await getPlayerStandings()
  const playerIdsToPlayer = await getPlayerIdsToPlayers()
  return <div>
    <h1>Create Teams</h1>
    <CreateTeams tag={tag} players={players} playerStandings={playerStandings} playerIdsToPlayer={playerIdsToPlayer} />
  </div>
}