import Link from "next/dist/client/link";
import { getCurrentTagSettings } from "./util/getTags";

export default async function Page({ children }: { children: React.ReactNode }) {
  const tagSettings = await getCurrentTagSettings()
  return (
    <div>
      <h2 className=" my-2 text-2xl font-extrabold">🌹☠️ 2025 Rose City Royal Rumble <Link className="no-underline" href="/rumble/admin">💀</Link>🥀</h2>
      <div className="my-2">
        <Link href="/rumble/players">Players</Link> |{' '}
        {tagSettings?.isRound1Up && <><Link href="/rumble/rounds/1">Round 1</Link> |{' '}</>}
        {tagSettings?.isRound2Up && <><Link href="/rumble/rounds/2">Round 2</Link> |{' '}</>}
        {tagSettings?.isRound3Up && <><Link href="/rumble/rounds/3">Round 3</Link> |{' '}</>}
      {tagSettings?.isRound4Up && <><Link href="/rumble/rounds/4">Round 4</Link> |{' '}</>}
      {tagSettings?.isRound5Up && <><Link href="/rumble/rounds/5">Round 5</Link> |{' '}</>}
      <Link href="/rumble/standings">Standings</Link> |{' '}
      <Link href="/rumble/bracket">Final Teams and Bracket</Link>
    </div>
    <div>
      {children}
    </div>
  </div>
}