import Link from "next/dist/client/link";

export default function Page({ children }: { children: React.ReactNode }) {
  return <div>
    <h1>💀 2025 Royal Rumble</h1>
    <div>
      <Link href="/rumble/players">Players</Link> |{' '}
      <Link href="/rumble/rounds/1">Round 1</Link> |{' '}
      <Link href="/rumble/rounds/2">Round 2</Link> |{' '}
      <Link href="/rumble/rounds/3">Round 3</Link> |{' '}
      <Link href="/rumble/rounds/4">Round 4</Link> |{' '}
      <Link href="/rumble/rounds/5">Round 5</Link> |{' '}
      <Link href="/rumble/rounds/finals">Final Teams</Link> |{' '}
      <Link href="/rumble/bracket">Bracket</Link>
    </div>
    <div>
      {children}
    </div>
  </div>
}