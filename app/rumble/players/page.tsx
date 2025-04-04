import usePlayers from "@/app/hooks/usePlayers";
import PlayersTable from "./PlayersTable";

export default async function Page() {
  const players = await usePlayers()
  return <div>
    <p>Welcome to the Royal Rumble!!</p>
    <PlayersTable players={players} />
  </div>
}