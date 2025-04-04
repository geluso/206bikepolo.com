"use server"

import { PlayerStandings } from "../player-standings/actions";
import prisma from "@/lib/prisma";

export async function createTeams(standings: PlayerStandings, series="day1") {
  const sortedTeams = []
  for (let i = 0; i < 20; i++) {
    let teamNumber = i + 1
    if (teamNumber < 10) {
      teamNumber = '0' + teamNumber
    }
    const name = 'Team ' + teamNumber
    const player1Id = standings.sortedPlayers[i].id
    const player2Id = standings.sortedPlayers[i + 20].id
    const player3Id = standings.sortedPlayers[i + 40].id
    const team = {
      name,
      series,
      player1Id,
      player2Id,
      player3Id
    }
    sortedTeams.push(team)
    console.log('create', team)
  }

  const createdTeams = await prisma.royalRumbleTeam.createManyAndReturn({ data: sortedTeams, skipDuplicates: true })
  return createdTeams
}