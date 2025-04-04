import { RoyalRumblePlayer } from "@prisma/client"
import { PlayerStandings } from "../../util/getPlayerStandings"

function indexToABC(index: number) {
  if (index < 20) {
    return 'AAA'
  } else if (index < 40) {
    return 'BBB'
  }
  return 'CCC'
}

export function ViewTeammatesTable({ playerStandings, playerIdsToPlayers }: {
  playerStandings: PlayerStandings
  playerIdsToPlayers: Record<string, RoyalRumblePlayer>
}) {
  return <div>
    <table className="w-full" border={1}>
      <thead>
        <tr>
          <th>Player</th>
          <th>Teammates</th>
        </tr>
      </thead>
      <tbody>
        {playerStandings.sortedPlayers.map(player => {
          const teammates = playerStandings.playerTeammates[player.id].map(teammateId => playerIdsToPlayers[teammateId].player)
          return <tr key={player.id}>
            <td className="text-center">{player.player}</td>
            <td className="text-center">
              {teammates.map((teammate, index) => <div key={index}>{teammate}</div>)}
            </td>
          </tr>
        })}
      </tbody>
    </table>
  </div> 
}