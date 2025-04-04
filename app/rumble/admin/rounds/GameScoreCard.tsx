"use client"

import { RoyalRumbleGame } from "@prisma/client"
import { useState } from "react"
import { toggleComplete, updateScore } from "./actions"

function team1TotalPoints(game: RoyalRumbleGame) {
  const { team1Player1Points, team1Player2Points, team1Player3Points } = game
  return team1Player1Points + team1Player2Points + team1Player3Points
}

function team2TotalPoints(game: RoyalRumbleGame) {
  const { team2Player1Points, team2Player2Points, team2Player3Points } = game
  return team2Player1Points + team2Player2Points + team2Player3Points
}

export default function GameScoreCard({game, playerIdsToPlayer, teamIdsToTeam}: {
  game: RoyalRumbleGame,
  playerIdsToPlayer: any,
  teamIdsToTeam: any,
}) {
  const [currentGame, setCurrentGame] = useState(game)

  function increment(game: RoyalRumbleGame, playerId: string) {
    bonkScore(game, playerId, 1)
  }

  function decrement(game: RoyalRumbleGame, playerId: string) {
    bonkScore(game, playerId, -1)
  }

  async function bonkScore(game: RoyalRumbleGame, playerId: string, delta: number) {
    console.log('bonk score', game.id, playerId, delta)
    const updatedGame = await updateScore(game.id, playerId, delta)
    if (updatedGame) {
      setCurrentGame(updatedGame)
    }
  }

  async function handleToggleComplete(game: RoyalRumbleGame) {
    const updatedGame = await toggleComplete(game.id)
    if (updatedGame) {
      setCurrentGame(updatedGame)
    }
  }

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
      <button onClick={() => handleToggleComplete(currentGame)}>mark {currentGame.isComplete ? 'incomplete' : 'complete'}</button>{' '}
      {currentGame.isComplete ? <>✅</> : null }
    </h4>
    <table key={currentGame.id} className="w-full" border={1}>
      <thead>
        <tr>
          <th></th>
          <th>Points</th>
          <th></th>
          <th>Team 1</th>
          <th>Team 2</th>
          <th></th>
          <th>Points</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
          <tr>
            <td className="text-center"><button onClick={() => decrement(currentGame, team1.player1Id)}>-</button></td>
            <td className="text-center">{team1Player1Points}</td>
            <td className="text-center"><button onClick={() => increment(currentGame, team1.player1Id)}>+</button></td>
            <td className="pl-1">{team1Player1}</td>
            <td className="pl-1">{team2Player1}</td>
            <td className="text-center"><button onClick={() => decrement(currentGame, team2.player1Id)}>-</button></td>
            <td className="text-center">{team2Player1Points}</td>
            <td className="text-center"><button onClick={() => increment(currentGame, team2.player1Id)}>+</button></td>
          </tr>
          <tr>
            <td className="text-center"><button onClick={() => decrement(currentGame, team1.player2Id)}>-</button></td>
            <td className="text-center">{team1Player2Points}</td>
            <td className="text-center"><button onClick={() => increment(currentGame, team1.player2Id)}>+</button></td>
            <td className="pl-1">{team1Player2}</td>
            <td className="pl-1">{team2Player2}</td>
            <td className="text-center"><button onClick={() => decrement(currentGame, team2.player2Id)}>-</button></td>
            <td className="text-center">{team2Player2Points}</td>
            <td className="text-center"><button onClick={() => increment(currentGame, team2.player2Id)}>+</button></td>
          </tr>
          <tr>
            <td className="text-center"><button onClick={() => decrement(currentGame, team1.player3Id)}>-</button></td>
            <td className="text-center">{team1Player3Points}</td>
            <td className="text-center"><button onClick={() => increment(currentGame, team1.player3Id)}>+</button></td>
            <td className="pl-1">{team1Player3}</td>
            <td className="pl-1">{team2Player3}</td>
            <td className="text-center"><button onClick={() => decrement(currentGame, team2.player3Id)}>-</button></td>
            <td className="text-center">{team2Player3Points}</td>
            <td className="text-center"><button onClick={() => increment(currentGame, team2.player3Id)}>+</button></td>
          </tr>
          <tr>
            <td className="text-center" colSpan={3}>{team1TotalPoints(currentGame)}</td>
            <td></td>
            <td></td>
            <td className="text-center" colSpan={3}>{team2TotalPoints(currentGame)}</td>
          </tr>
      </tbody>
    </table>
  </div>
}