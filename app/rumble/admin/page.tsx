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
      <li>
        <li>Manage Scores</li>
        <ul>
          <li>
            <Link href="/rumble/admin/rounds/1">Manage Round 1 Scores</Link>
          </li>
          <li>
            <Link href="/rumble/admin/rounds/2">Manage Round 2 Scores</Link>
          </li>
          <li>
            <Link href="/rumble/admin/rounds/3">Manage Round 3 Scores</Link>
          </li>
          <li>
            <Link href="/rumble/admin/rounds/4">Manage Round 4 Scores</Link>
          </li>
          <li>
            <Link href="/rumble/admin/rounds/5">Manage Round 5 Scores</Link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
}