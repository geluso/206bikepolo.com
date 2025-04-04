import prisma from "@/lib/prisma";
import useCurrentTag from "./useCurrentTag";

export default async function useGames(series: string) {
  const tag = await useCurrentTag()
  const games = await prisma.royalRumbleGame.findMany({ where: { tag, series }, orderBy: { gameNumber: "asc" }})
  return games
}