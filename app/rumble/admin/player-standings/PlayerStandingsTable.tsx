import { PlayerStandings } from "@/app/hooks/usePlayerStandings"

function indexToABC(index: number) {
  if (index < 20) {
    return 'AAA'
  } else if (index < 40) {
    return 'BBB'
  }
  return 'CCC'
}

export function PlayerStandingsTable({ playerStandings }: { playerStandings: PlayerStandings }) {
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
        {playerStandings.sortedPlayers.map((player, index) => {
          return <tr key={player.id}>
            <th>{playerStandings.playerWins[player.id] + playerStandings.playerTies[player.id] + playerStandings.playerLosses[player.id]}</th>
            <td className="p-1">{player.player}</td>
            <td className="p-1">{player.wrestlerName}</td>
            <td className="text-center">{playerStandings.playerWins[player.id]}</td>
            <td className="text-center">{playerStandings.playerTies[player.id]}</td>
            <td className="text-center">{playerStandings.playerLosses[player.id]}</td>
            <td className="text-center">{playerStandings.playerGoals[player.id]}</td>
            <td className="text-center">{playerStandings.playerPoints[player.id]}</td>
            <td className="text-center">{indexToABC(index)}</td>
          </tr>
        })}
      </tbody>
    </table>
  </div> 
}