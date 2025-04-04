import { RoyalRumblePlayer } from "@prisma/client"

export default function PlayersTable({ players }: { players: RoyalRumblePlayer[]}) {
  if (players.length === 0) {
    return <p>No players have been added yet.</p>
  }
  return <div>
    <table className="m-auto" border={1}>
      <thead>
        <tr>
          <th className="pr-2 text-right">Player</th>
          <th className="pl-2 text-left">Wrestler Name</th>
        </tr>
      </thead>
      <tbody>
        {players.map(player => {
          return <tr key={player.tag + player.id}>
            <td className="p-1 text-right">{player.player}</td>
            <td className="p-1">{player.wrestlerName}</td>
          </tr>
        })}
      </tbody>
    </table>
  </div>
}