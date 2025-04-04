export const revalidate = 0;

import getPlayerIdsToPlayers from "../../util/getPlayerIdsToPlayers";
import { getPlayerStandings } from "../../util/getPlayerStandings";
import { ViewTeammatesTable } from "./ViewTeammatesTable";

export default async function Page() {
  const playerStandings = await getPlayerStandings()
  const playerIdsToPlayers = await getPlayerIdsToPlayers()
  return <div>
    <h3>View Teammates</h3>
    <ViewTeammatesTable playerStandings={playerStandings} playerIdsToPlayers={playerIdsToPlayers} />
  </div>
}