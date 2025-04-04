import { PlayerStandingsTable } from "./PlayerStandingsTable";
import { usePlayerStandings } from "./actions";

export default async function Page() {
  const standings = await usePlayerStandings()
  return <div>
    <h1>Player Standings</h1>
    <PlayerStandingsTable standings={standings} />
  </div>
}