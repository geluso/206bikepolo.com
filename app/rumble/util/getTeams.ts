import prisma from "@/lib/prisma"
import getCurrentTag from "./getCurrentTag"

export default async function getTeams(series: string) {
  const tag = await getCurrentTag()
  const teams = await prisma.royalRumbleTeam.findMany({ where: { tag, series }})
  return teams
}