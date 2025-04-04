"use client"

import { useEffect, useState } from "react"
import { PlayerStandings, usePlayerStandings } from "../player-standings/actions"
import { PlayerStandingsTable } from "../player-standings/PlayerStandingsTable"
import { createTeams } from "./actions"
import { RoyalRumblePlayer, RoyalRumbleTeam } from "@prisma/client"
import TeamsTable from "./TeamsTable"

export function CreateTeams({ playerIdsToPlayer }: { playerIdsToPlayer: Record<string, RoyalRumblePlayer> }) {
  const [standings, setStandings] = useState<PlayerStandings | null>(null)
  const [teams, setTeams] = useState<RoyalRumbleTeam[]>([])

  useEffect(() => {
    async function getStandings() {
      const gotStandings = await usePlayerStandings()
      console.log({gotStandings})
      setStandings(gotStandings)
    }

    getStandings()
  }, [])

  async function handleCreateTeams() {
    if (!standings) {
      console.error("Error can't create teams standings still loading.")
      return
    }
    const gotTeams = await createTeams(standings)
    setTeams(gotTeams)
  }

  return <div>
    <p>
      <button disabled={!standings} onClick={handleCreateTeams}>Create Teams</button>
    </p>

    <TeamsTable teams={teams} playerIdsToPlayer={playerIdsToPlayer} />


    <h2>Player Standings</h2>
    {!standings && <div>Loading...</div>}
    {standings && <PlayerStandingsTable standings={standings} />}
  </div>
}