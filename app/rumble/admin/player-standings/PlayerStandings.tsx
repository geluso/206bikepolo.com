import { useEffect, useState } from "react";
import { getPlayerStandings } from "./actions";

function indexToABC(index: number) {
  if (index < 20) {
    return 'AAA'
  } else if (index < 40) {
    return 'BBB'
  }
  return 'CCC'
}

export function PlayerStandings() {
  const [playerStats, setPlayerStats] = useState({})
  const [stateSortedPlayers, setSortedPlayers] = useState([])

  useEffect(() => {
    (async () => {
      const {
        playerWins, playerTies, playerLosses, playerGoals, playerPoints,
        sortedPlayers
      } = await getPlayerStandings()
      setSortedPlayers(sortedPlayers)
      setPlayerStats({ playerWins, playerTies, playerLosses, playerGoals, playerPoints })
    })()
  }, [])
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
      {stateSortedPlayers.map((player, index) => {
        return <tr key={player.id}>
          <th>{playerStats.playerWins[player.id] + playerStats.playerTies[player.id] + playerStats.playerLosses[player.id]}</th>
          <td className="p-1">{player.player}</td>
          <td className="p-1">{player.wrestlerName}</td>
          <th>{playerStats.playerWins[player.id]}</th>
          <th>{playerStats.playerTies[player.id]}</th>
          <th>{playerStats.playerLosses[player.id]}</th>
          <th>{playerStats.playerGoals[player.id]}</th>
          <th>{playerStats.playerPoints[player.id]}</th>
          <th>{indexToABC(index)}</th>
        </tr>
      })}
    </tbody>
  </table>
}