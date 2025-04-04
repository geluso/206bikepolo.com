import prisma from "@/lib/prisma";
import getCurrentTag from "./getCurrentTag";

export default async function getGames(series: string) {
  const tag = await getCurrentTag()
  const games = await prisma.royalRumbleGame.findMany({ where: { tag, series }, orderBy: { gameNumber: "asc" }})
  return games
}