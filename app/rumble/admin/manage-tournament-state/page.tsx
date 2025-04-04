import prisma from "@/lib/prisma";
import { ManageTournamentState } from "./ManageTournamentState";

export default async function Page() {
  const tournamentState = await prisma.royalRumbleTournamentState.findFirst()
  console.log({tournamentState})
  const currentTag = tournamentState?.currentTag ?? "live"
  const currentSeries = tournamentState?.currentSeries ?? "day1"
  const currentRound = tournamentState?.currentRound ?? 1

  const tags = (await prisma.royalRumblePlayer.findMany({
    distinct: ['tag'],
    select: {
      tag: true
    }
  })).map(tag => tag.tag);

  console.log({ currentTag, currentSeries, currentRound, tags })

  return <div>
    <ManageTournamentState tags={tags} currentTag={currentTag} currentSeries={currentSeries} currentRound={currentRound} />
  </div>
}