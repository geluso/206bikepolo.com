import { getPlayerStandings } from "../../util/getPlayerStandings";
import { PlayerStandingsTable } from "./PlayerStandingsTable";

export default async function Page() {
  const playerStandings = await getPlayerStandings()
  return <div>
    <h1>Player Standings</h1>
    <PlayerStandingsTable playerStandings={playerStandings} />
  </div>
}