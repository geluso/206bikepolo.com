"use client"

import { useState } from "react"
import { PlayerStandingsTable } from "../player-standings/PlayerStandingsTable"
import { createTeams } from "./actions"
import { RoyalRumbleGame, RoyalRumblePlayer, RoyalRumbleTeam } from "@prisma/client"
import TeamsTable from "./TeamsTable"
import { PlayerStandings } from "@/app/rumble/util/getPlayerStandings"
import GamesTable from "./GamesTables"

export function CreateTeams({ tag, players, playerStandings, playerIdsToPlayer }: {
  tag: string,
  players: RoyalRumblePlayer[],
  playerStandings: PlayerStandings,
  playerIdsToPlayer: Record<string, RoyalRumblePlayer>
}) {
  const [series, setSeries] = useState('round1')
  const [teams, setTeams] = useState<RoyalRumbleTeam[]>([])
  const [games, setGames] = useState<RoyalRumbleGame[]>([])

  async function handleCreateTeams() {
    if (!playerStandings) {
      console.error("Error can't create teams standings still loading.")
      return
    }
    try {
      const { createdTeams, createdGames } = await createTeams(tag, series, playerStandings)
      setTeams(createdTeams)
      setGames(createdGames)
    } catch (e) {
      console.error('createTeams', e)
      return
    }
  }

  return <div>
    <p>
      Select Round:
      <select onChange={(ev) => setSeries(ev.currentTarget.value)}>
        <option value="round1">Round 1</option>
        <option value="round2">Round 2</option>
        <option value="round3">Round 3</option>
        <option value="round4">Round 4</option>
        <option value="round5">Round 5</option>
        <option value="finals">Finals</option>
      </select>
    </p>

    <p>
      <button disabled={!playerStandings} onClick={handleCreateTeams}>Create Teams</button>
    </p>

    <TeamsTable players={players} teams={teams} playerIdsToPlayer={playerIdsToPlayer} />
    <GamesTable games={games} teams={teams} playerIdsToPlayer={playerIdsToPlayer} />

    <h2>Player Standings</h2>
    {playerStandings && <PlayerStandingsTable playerStandings={playerStandings} />}
  </div>
}