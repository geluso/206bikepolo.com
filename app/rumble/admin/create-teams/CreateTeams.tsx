"use client"

import { useState } from "react"
import { PlayerStandingsTable } from "../player-standings/PlayerStandingsTable"
import { createTeams } from "./actions"
import { RoyalRumblePlayer, RoyalRumbleTeam } from "@prisma/client"
import TeamsTable from "./TeamsTable"
import { PlayerStandings } from "@/app/hooks/usePlayerStandings"

export function CreateTeams({ playerStandings, playerIdsToPlayer }: { playerStandings: PlayerStandings, playerIdsToPlayer: Record<string, RoyalRumblePlayer> }) {
  const [teams, setTeams] = useState<RoyalRumbleTeam[]>([])

  async function handleCreateTeams() {
    if (!playerStandings) {
      console.error("Error can't create teams standings still loading.")
      return
    }
    const gotTeams = await createTeams(playerStandings)
    setTeams(gotTeams)
  }

  return <div>
    <p>
      <button disabled={!playerStandings} onClick={handleCreateTeams}>Create Teams</button>
    </p>

    <TeamsTable teams={teams} playerIdsToPlayer={playerIdsToPlayer} />

    <h2>Player Standings</h2>
    {playerStandings && <PlayerStandingsTable playerStandings={playerStandings} />}
  </div>
}