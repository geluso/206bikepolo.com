import prisma from "@/lib/prisma"
import useCurrentTag from "./useCurrentTag"

export default async function useTeams(series: string) {
  const tag = await useCurrentTag()
  const teams = await prisma.royalRumbleTeam.findMany({ where: { tag, series }})
  return teams
}