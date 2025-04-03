import Link from "next/link";
import { PlayerUploadForm } from "./PlayerUploadForm";

export default function Page() {
  return <div>
    <h1>Upload Players</h1>
    <p>Upload player spreadsheet. The player spreadsheet follow this format:</p>

    <ul>
      <li>Contain a header row with columns PID, PLAYER, WRESTLER NAME</li>
      <li>Contain 60 rows with values for PID, PLAYER, WRESTLER NAME</li>
    </ul>

    <p>
      <Link href="/csv/sample_royal_rumble_player.csv">Download sample spreadsheet</Link>
    </p>

    <PlayerUploadForm />
  </div>
}