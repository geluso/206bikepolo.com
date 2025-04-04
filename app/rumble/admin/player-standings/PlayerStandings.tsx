import { getPlayerStandings } from "./actions";

function indexToABC(index: number) {
  if (index < 20) {
    return 'AAA'
  } else if (index < 40) {
    return 'BBB'
  }
  return 'CCC'
}

export async function PlayerStandings() {
  const {
    playerWins, playerTies, playerLosses, playerGoals, playerPoints,
    sortedPlayers
  } = await getPlayerStandings()
  return <table border={1}>
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
      {sortedPlayers.map((player, index) => {
        return <tr key={player.id}>
          <th>{playerWins[player.id] + playerTies[player.id] + playerLosses[player.id]}</th>
          <td className="p-1">{player.player}</td>
          <td className="p-1">{player.wrestlerName}</td>
          <th>{playerWins[player.id]}</th>
          <th>{playerTies[player.id]}</th>
          <th>{playerLosses[player.id]}</th>
          <th>{playerGoals[player.id]}</th>
          <th>{playerPoints[player.id]}</th>
          <th>{indexToABC(index)}</th>
        </tr>
      })}
    </tbody>
  </table>
}