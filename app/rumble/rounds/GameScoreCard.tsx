"use client"

import { RoyalRumbleGame } from "@prisma/client"

export default function GameScoreCard({game, playerIdsToPlayer, teamIdsToTeam}: {
  game: RoyalRumbleGame,
  playerIdsToPlayer: any,
  teamIdsToTeam: any,
}) {

  const team1 = teamIdsToTeam[game.team1Id]
  const team2 = teamIdsToTeam[game.team2Id]

  const team1Player1 = playerIdsToPlayer[team1.player1Id].player
  const team1Player2 = playerIdsToPlayer[team1.player2Id].player
  const team1Player3 = playerIdsToPlayer[team1.player3Id].player

  const team2Player1 = playerIdsToPlayer[team2.player1Id].player
  const team2Player2 = playerIdsToPlayer[team2.player2Id].player
  const team2Player3 = playerIdsToPlayer[team2.player3Id].player

  const {
    team1Player1Points, team1Player2Points, team1Player3Points,
    team2Player1Points, team2Player2Points, team2Player3Points
  } = game

  return <div>
    <h4>{game.series} Game {game.gameNumber}</h4>
    <table key={game.id} className="w-full" border={1}>
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
            <td><button>-</button></td>
            <td>{team1Player1Points}</td>
            <td><button>+</button></td>
            <td className="pl-1">{team1Player1}</td>
            <td className="pl-1">{team2Player1}</td>
            <td><button>-</button></td>
            <td>{team2Player1Points}</td>
            <td><button>+</button></td>
          </tr>
          <tr>
            <td><button>-</button></td>
            <td>{team1Player2Points}</td>
            <td><button>+</button></td>
            <td className="pl-1">{team1Player2}</td>
            <td className="pl-1">{team2Player2}</td>
            <td><button>-</button></td>
            <td>{team2Player2Points}</td>
            <td><button>+</button></td>
          </tr>
          <tr>
            <td><button>-</button></td>
            <td>{team1Player3Points}</td>
            <td><button>+</button></td>
            <td className="pl-1">{team1Player3}</td>
            <td className="pl-1">{team2Player3}</td>
            <td><button>-</button></td>
            <td>{team2Player3Points}</td>
            <td><button>+</button></td>
          </tr>
          <tr>
            <td>0</td>
            <td></td>
            <td></td>
            <td>0</td>
          </tr>
      </tbody>
    </table>
  </div>
}