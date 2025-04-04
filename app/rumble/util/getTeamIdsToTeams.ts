"use server"

import { RoyalRumbleTeam } from "@prisma/client";
import getTeams from "./getTeams";

export default async function getTeamIdsToTeams(series: string) {
  const teams = await getTeams(series)
  const teamIdsToTeam: Record<string, RoyalRumbleTeam> = {}
  teams.forEach(team => teamIdsToTeam[team.id] = team)
  return teamIdsToTeam
}