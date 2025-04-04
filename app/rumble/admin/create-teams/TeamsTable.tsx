import { RoyalRumbleTeam } from "@prisma/client";

export default function TeamsTable({ teams }: {
  teams: RoyalRumbleTeam[]
}) {
  if (!teams || teams.length === 0) {
    return null
  }
  return <div>
    <table border={1}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Player 1</th>
          <th>Player 2</th>
          <th>Player 3</th>
        </tr>
      </thead>
      <tbody>
        {teams.map(team => {
          return <tr key={team.id}>
            <th>{team.name}</th>
            <th>{team.player1Id}</th>
            <th>{team.player2Id}</th>
            <th>{team.player3Id}</th>
          </tr>
        })}
      </tbody>
    </table>

    <p>
      <a href="">⬇️ Download CSV</a>
    </p>
  </div>
}