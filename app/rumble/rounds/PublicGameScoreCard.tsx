"use client"

import { RoyalRumbleGame } from "@prisma/client"
import { useState } from "react"

function team1TotalPoints(game: RoyalRumbleGame) {
  const { team1Player1Points, team1Player2Points, team1Player3Points } = game
  return team1Player1Points + team1Player2Points + team1Player3Points
}

function team2TotalPoints(game: RoyalRumbleGame) {
  const { team2Player1Points, team2Player2Points, team2Player3Points } = game
  return team2Player1Points + team2Player2Points + team2Player3Points
}

export default function PublicGameScoreCard({game, playerIdsToPlayer, teamIdsToTeam, sayings, index, completeGames}: {
  game: RoyalRumbleGame,
  playerIdsToPlayer: any,
  teamIdsToTeam: any,
  sayings: string[],
  index: number,
  completeGames: number
}) {
  const [currentGame, setCurrentGame] = useState(game)

  const team1 = teamIdsToTeam[currentGame.team1Id]
  const team2 = teamIdsToTeam[currentGame.team2Id]

  const team1Player1 = playerIdsToPlayer[team1.player1Id].player
  const team1Player2 = playerIdsToPlayer[team1.player2Id].player
  const team1Player3 = playerIdsToPlayer[team1.player3Id].player

  const team2Player1 = playerIdsToPlayer[team2.player1Id].player
  const team2Player2 = playerIdsToPlayer[team2.player2Id].player
  const team2Player3 = playerIdsToPlayer[team2.player3Id].player

  const {
    team1Player1Points, team1Player2Points, team1Player3Points,
    team2Player1Points, team2Player2Points, team2Player3Points
  } = currentGame

  return <div>
    <h4>
      Game {currentGame.gameNumber}{' '}
      {currentGame.isComplete ? <>✅ Complete</> : <>⏰ {sayings[index - completeGames]}</> }
    </h4>
    <table key={currentGame.id} className="w-full" border={1}>
      <thead>
        <tr>
          <th>Points</th>
          <th>Team 1</th>
          <th>Team 2</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
          <tr>
            <td className="text-center">{team1Player1Points}</td>
            <td className="pl-1">{team1Player1}</td>
            <td className="pl-1">{team2Player1}</td>
            <td className="text-center">{team2Player1Points}</td>
          </tr>
          <tr>
            <td className="text-center">{team1Player2Points}</td>
            <td className="pl-1">{team1Player2}</td>
            <td className="pl-1">{team2Player2}</td>
            <td className="text-center">{team2Player2Points}</td>
          </tr>
          <tr>
            <td className="text-center">{team1Player3Points}</td>
            <td className="pl-1">{team1Player3}</td>
            <td className="pl-1">{team2Player3}</td>
            <td className="text-center">{team2Player3Points}</td>
          </tr>
          <tr>
            <td className="text-center">{team1TotalPoints(currentGame)}</td>
            <td></td>
            <td></td>
            <td className="text-center">{team2TotalPoints(currentGame)}</td>
          </tr>
      </tbody>
    </table>
  </div>
}