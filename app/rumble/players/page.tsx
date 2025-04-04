import usePlayers from "@/app/hooks/usePlayers";

export default async function Page() {
  const players = await usePlayers()
  return <div>
    <p>Welcome to the Royal Rumble!!</p>

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