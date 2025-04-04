import prisma from "@/lib/prisma";
import { getPlayerStandings } from "./actions";
import { PlayerStandings } from "./PlayerStandings";

export default async function Page() {
  return <div>
    <h1>Player Standings</h1>
    <PlayerStandings />
  </div>
}