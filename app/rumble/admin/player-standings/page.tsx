import prisma from "@/lib/prisma";

function indexToABC(index: number) {
  if (index < 20) {
    return 'AAA'
  } else if (index < 40) {
    return 'BBB'
  }
  return 'CCC'
}

export default async function Page() {
  const tournamentState = await prisma.royalRumbleTournamentState.findFirst()
  const tag = tournamentState?.currentTag ?? "live"
  const players = (await prisma.royalRumblePlayer.findMany({ where: { tag } }))
  const teams = (await prisma.royalRumbleTeam.findMany())
  const games = (await prisma.royalRumbleGame.findMany())
  
  const playerWins = {}
  const playerTies = {}
  const playerLosses = {}
  const playerGoals = {}
  const playerPoints = {}

  players.forEach(player => {
    const wins = Math.ceil(Math.random() * 5)
    const losses = Math.ceil(Math.random() * (5 - wins))
    const ties = Math.ceil(Math.random() * (5 - wins - losses))
    const goals = Math.ceil(Math.random() * 15)

    playerWins[player.id] = wins
    playerTies[player.id] = ties
    playerLosses[player.id] = losses
    playerGoals[player.id] = goals

    const points = 4 * wins + 2 * ties
    playerPoints[player.id] = points
  })

  const sortedPlayers = players.sort((p1, p2) => {
    const diff = playerPoints[p2.id] - playerPoints[p1.id]
    if (diff === 0) {
      return playerGoals[p2.id] - playerGoals[p1.id]
    }
    return diff
  })

  console.log({ tag, players })
  return <div>
    <h1>Player Standings</h1>
    <table border={1}>
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
  </div>
}