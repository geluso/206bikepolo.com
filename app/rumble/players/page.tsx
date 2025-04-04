import usePlayers from "@/app/hooks/usePlayers";
import PlayersTable from "./PlayersTable";

export default async function Page() {
  const players = await usePlayers()
  players.sort((p1, p2) => p1.wrestlerName.localeCompare(p2.wrestlerName))
  return <div>
    <h2>Players</h2>
    <PlayersTable players={players} />
  </div>
}