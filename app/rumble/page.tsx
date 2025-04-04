import Link from "next/link";

export default function Page() {
  return <div>
    <p>Welcome to the Royal Rumble!!</p>
    <Link href="/rumble/players">View players</Link>
  </div>
}