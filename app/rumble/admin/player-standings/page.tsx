export const revalidate = 0;

import { getPlayerStandings } from "../../util/getPlayerStandings";
import { PlayerStandingsTable } from "./PlayerStandingsTable";

export default async function Page() {
  const playerStandings = await getPlayerStandings()
  return <div>
    <h3>Player Standings</h3>
    <PlayerStandingsTable playerStandings={playerStandings} />
  </div>
}