export const revalidate = 0;

import prisma from "@/lib/prisma";
import { ManageTournamentState } from "./ManageTournamentState";

export default async function Page() {
  const tournamentState = await prisma.royalRumbleTournamentState.findFirst()
  console.log({tournamentState})
  let currentTag = tournamentState?.currentTag ?? "live"
  const currentSeries = tournamentState?.currentSeries ?? "day1"

  const tags = (await prisma.royalRumblePlayer.findMany({
    distinct: ['tag'],
    select: {
      tag: true
    }
  })).map(tag => tag.tag);

  if (!tags.includes(currentTag)) {
    console.log(`reset current tag. was=${currentTag} now=${tags[0]}`)
    currentTag = tags[0]
  }

  console.log({ currentTag, currentSeries, tags })

  return <div>
    <ManageTournamentState tags={tags} currentTag={currentTag} currentSeries={currentSeries} />
  </div>
}