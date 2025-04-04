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
      <li>
        <Link href="/rumble/admin/create-teams">Create Teams</Link>
      </li>
      <li>
        <Link href="/rumble/admin/view-teammates">View Teammates</Link>
      </li>
      <li>
        <Link href="/rumble/admin/manage-teams">Manage Teams</Link>
      </li>
    </ul>
  </div>
}