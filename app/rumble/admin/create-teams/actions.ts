"use server"

import prisma from "@/lib/prisma";

export async function createTeams(standings: PlayerStandings, series: string) {
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
  const createdGames = []
  for (let i = 0; i < 20; i += 2) {
    const gameNumber = (i / 2) + 1
    const team1Id = createdTeams[i].id
    const team2Id = createdTeams[i + 1].id

    const game = await prisma.royalRumbleGame.create({ data: {
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