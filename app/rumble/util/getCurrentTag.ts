import prisma from "@/lib/prisma"

export default async function getCurrentTag() {
  const tournamentState = await prisma.royalRumbleTournamentState.findFirst()
  let tag = tournamentState?.currentTag
  if (!tag) {
    tag = 'live'
  }
  console.log('using tag', tag)
  return tag
}