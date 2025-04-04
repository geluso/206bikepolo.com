import Link from "next/link";

export default function Page() {
  return <div>
    <ul>
      <li>
        <Link href="/rumble/admin/manage-tournament-state">Manage Tournament State</Link>
      </li>
      <li>
        <Link href="/rumble/admin/upload-players">Upload Players</Link>
      </li>
      <li>
        <Link href="/rumble/admin/player-standings">Player Standings</Link>
      </li>
    </ul>
  </div>
}