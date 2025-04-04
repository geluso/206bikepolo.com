"use server"

import prisma from "@/lib/prisma"
import getCurrentTag from "./getCurrentTag"

export default async function getTags() {
  const tags = await prisma.royalRumbleTagSettings.findMany()
  return tags
}

export async function getCurrentTagSettings() {
  const tag = await getCurrentTag()
  const tagSettings = await prisma.royalRumbleTagSettings.findFirst({ where: { tag }})
  return tagSettings
}

export async function saveCurrentTagSettings(data: {
  isRound1Up: boolean,
  isRound2Up: boolean,
  isRound3Up: boolean,
  isRound4Up: boolean,
  isRound5Up: boolean,
  isFinalTeamsUp: boolean
}) {
  try {
    const tag = await getCurrentTag()
    const tagSetting = await prisma.royalRumbleTagSettings.findFirst({ where: { tag }})
    const tagId = tagSetting?.id ?? "-1"
    const updated = await prisma.royalRumbleTagSettings.update({ where: { id: tagId }, data })
    console.log('saveCurrentTagSettings', updated)
    // return updated
    return true
  } catch (e) {
    console.error("Error setTournamentState", e)
    return false
  }
}