import prisma from "@/lib/prisma";

export default async function Page() {
  const tournamentState = await prisma.royalRumbleTournamentState.findFirst()
  let tag = tournamentState?.currentTag
  if (!tag) {
    tag = 'live'
  }
  console.log('using tag', tag)
  const players = await prisma.royalRumblePlayer.findMany({ where: { tag: tag }})
  return <div>
    <p>Welcome to the Royal Rumble!!</p>

    <table className="w-full" border={1}>
      <thead>
        <tr>
          <th>Player</th>
          <th>Wrestler Name</th>
        </tr>
      </thead>
      <tbody>
        {players.map(player => {
          return <tr key={player.tag + player.id}>
            <td className="p-1">{player.player}</td>
            <td className="p-1">{player.wrestlerName}</td>
          </tr>
        })}
      </tbody>
    </table>
  </div>
}