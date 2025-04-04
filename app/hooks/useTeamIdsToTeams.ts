"use server"

import { RoyalRumbleTeam } from "@prisma/client";
import useTeams from "./useTeams";

export default async function useTeamIdsToTeams(series: string) {
  const teams = await useTeams(series)
  const teamIdsToTeam: Record<string, RoyalRumbleTeam> = {}
  teams.forEach(team => teamIdsToTeam[team.id] = team)
  return teamIdsToTeam
}