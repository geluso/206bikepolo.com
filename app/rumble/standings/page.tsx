import { PlayerStandingsTable } from "../admin/player-standings/PlayerStandingsTable";
import { getPlayerStandings } from "../util/getPlayerStandings";

export default async function Page() {
  const playerStandings = await getPlayerStandings()
  return <div>
    <h2>Player Standings</h2>
    <PlayerStandingsTable playerStandings={playerStandings} />
  </div>
}