"use server"

import prisma from "@/lib/prisma";
import { PlayerStandings } from "../../util/getPlayerStandings";

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export async function createTeams(tag: string, series: string, standings: PlayerStandings) {
  console.log('createTeams', tag, series)
  const isAlreadyCreated = await prisma.royalRumbleTeam.findFirst({ where: { tag, series }})
  if (isAlreadyCreated) {
    throw `Error createTeams already created [tag=${tag}, series=${series}]` 
  }

  const bPlayers = standings.sortedPlayers.slice(20, 40)
  shuffle(bPlayers)

  const sortedTeams = []
  for (let i = 0; i < 20; i++) {
    const teamNumber = i + 1
    let twoDigitTeamNumber = '' + teamNumber
    if (teamNumber < 10) {
      twoDigitTeamNumber = '0' + teamNumber
    }
    const name = 'Team ' + twoDigitTeamNumber
    const player1Id = standings.sortedPlayers[i].id
    const player2Id = bPlayers[i].id
    const player3Id = standings.sortedPlayers[standings.sortedPlayers.length - 1 - i].id
    const team = {
      name,
      tag,
      series,
      player1Id,
      player2Id,
      player3Id
    }
    sortedTeams.push(team)
  }

  const createdTeams = await prisma.royalRumbleTeam.createManyAndReturn({ data: sortedTeams, skipDuplicates: true })
  const createdGames = []
  for (let i = 0; i < 20; i += 2) {
    const gameNumber = (i / 2) + 1
    const team1Id = createdTeams[i].id
    const team2Id = createdTeams[i + 1].id

    const game = await prisma.royalRumbleGame.create({ data: {
      tag,
      series,
      gameNumber,
      team1Id,
      team2Id
    }})
    console.log(game)
    createdGames.push(game)
  }

  return { createdTeams, createdGames }
}