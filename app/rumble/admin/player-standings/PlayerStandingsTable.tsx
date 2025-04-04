import { PlayerStandings } from "./actions"

function indexToABC(index: number) {
  if (index < 20) {
    return 'AAA'
  } else if (index < 40) {
    return 'BBB'
  }
  return 'CCC'
}

export function PlayerStandingsTable({ standings }: { standings: PlayerStandings }) {
  return <div>
    <table className="w-full" border={1}>
      <thead>
        <tr>
          <th>Games</th>
          <th>Player</th>
          <th>Wrestler Name</th>
          <th>Wins</th>
          <th>Ties</th>
          <th>Losses</th>
          <th>Goals</th>
          <th>Points</th>
          <th>Group</th>
        </tr>
      </thead>
      <tbody>
        {standings.sortedPlayers.map((player, index) => {
          return <tr key={player.id}>
            <th>{standings.playerWins[player.id] + standings.playerTies[player.id] + standings.playerLosses[player.id]}</th>
            <td className="p-1">{player.player}</td>
            <td className="p-1">{player.wrestlerName}</td>
            <th>{standings.playerWins[player.id]}</th>
            <th>{standings.playerTies[player.id]}</th>
            <th>{standings.playerLosses[player.id]}</th>
            <th>{standings.playerGoals[player.id]}</th>
            <th>{standings.playerPoints[player.id]}</th>
            <th>{indexToABC(index)}</th>
          </tr>
        })}
      </tbody>
    </table>
  </div> 
}