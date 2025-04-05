export const revalidate = 0;

import getCurrentTag from "../../util/getCurrentTag"
import getPlayerIdsToPlayers from "../../util/getPlayerIdsToPlayers"
import { getPlayerStandings } from "../../util/getPlayerStandings"
import { CreateTeams } from "./CreateTeams"

export default async function Page() {
  const tag = await getCurrentTag()
  const playerStandings = await getPlayerStandings()
  const playerIdsToPlayer = await getPlayerIdsToPlayers()
  return <div>
    <h3>Create Teams</h3>
    <CreateTeams tag={tag} playerStandings={playerStandings} playerIdsToPlayer={playerIdsToPlayer} />
  </div>
}