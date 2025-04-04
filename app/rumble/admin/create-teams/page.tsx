export const revalidate = 0;

import getCurrentTag from "../../util/getCurrentTag"
import getPlayerIdsToPlayers from "../../util/getPlayerIdsToPlayers"
import getPlayers from "../../util/getPlayers"
import { getPlayerStandings } from "../../util/getPlayerStandings"
import { CreateTeams } from "./CreateTeams"

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