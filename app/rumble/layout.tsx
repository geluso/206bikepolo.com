import Link from "next/dist/client/link";

export default function Page({ children }: { children: React.ReactNode }) {
  return <div>
    <h1>🤼 2025 Royal Rumble</h1>
    <div>
      <Link href="/rumble/players">Players</Link> |{' '}
      <Link href="/rumble/day1">Day 1</Link> |{' '}
      <Link href="/rumble/day2">Day 2</Link> |{' '}
      <Link href="/rumble/finals">Finals</Link> |{' '}
      <Link href="/rumble/admin">Admin</Link>
    </div>
    <div>
      {children}
    </div>
  </div>
}