import prisma from "@/lib/prisma";

export default async function Page() {
  const tournamentState = await prisma.royalRumbleTournamentState.findFirst()
  const tag = tournamentState?.currentTag ?? "live"
  const players = (await prisma.royalRumblePlayer.findMany({ where: { tag } }))
  const teams = (await prisma.royalRumbleTeam.findMany())
  const games = (await prisma.royalRumbleGame.findMany())
  console.log({ tag, players })
  return <div>
    <h1>Player Standings</h1>
  </div>
}