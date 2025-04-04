export const revalidate = 0;

import getCurrentTag from "../../util/getCurrentTag"
import getPlayerIdsToPlayers from "../../util/getPlayerIdsToPlayers"
import getPlayers from "../../util/getPlayers"
import { getPlayerStandings } from "../../util/getPlayerStandings"
import getTeams from "../../util/getTeams";
import { CreateTeams } from "./CreateTeams"
import TeamsTable from "./TeamsTable";

export default async function Page() {
  const tag = await getCurrentTag()
  const players = await getPlayers()
  const playerStandings = await getPlayerStandings()
  const playerIdsToPlayer = await getPlayerIdsToPlayers()

  const round1Teams = await getTeams("round1")
  const round2Teams = await getTeams("round2")
  const round3Teams = await getTeams("round3")
  const round4Teams = await getTeams("round4")
  const round5Teams = await getTeams("round5")

  return <div>
    <h3>Manage Teams</h3>
    <h4>Round 1 Teams</h4>
    <TeamsTable players={players} teams={round1Teams} playerIdsToPlayer={playerIdsToPlayer} />

    <h4>Round 2 Teams</h4>
    <TeamsTable players={players} teams={round2Teams} playerIdsToPlayer={playerIdsToPlayer} />

    <h4>Round 3 Teams</h4>
    <TeamsTable players={players} teams={round3Teams} playerIdsToPlayer={playerIdsToPlayer} />

    <h4>Round 4 Teams</h4>
    <TeamsTable players={players} teams={round4Teams} playerIdsToPlayer={playerIdsToPlayer} />

    <h4>Round 5 Teams</h4>
    <TeamsTable players={players} teams={round5Teams} playerIdsToPlayer={playerIdsToPlayer} />
  </div>
}