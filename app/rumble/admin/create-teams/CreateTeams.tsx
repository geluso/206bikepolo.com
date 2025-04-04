"use client"

import { PlayerStandings } from "../player-standings/PlayerStandings"

export function CreateTeams() {
  return <div>
    <p>
      <button>Create Teams</button>
    </p>

    <PlayerStandings />
  </div>
}