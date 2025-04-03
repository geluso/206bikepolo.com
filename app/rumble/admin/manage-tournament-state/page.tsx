import prisma from "@/lib/prisma";
import { ManageTournamentState } from "./ManageTournamentState";

export default async function Page() {
  const tags = (await prisma.royalRumblePlayer.findMany({
    distinct: ['tag'],
    select: {
      tag: true
    }
  })).map(tag => tag.tag);

  return <div>
    <ManageTournamentState tags={tags} />
  </div>
}