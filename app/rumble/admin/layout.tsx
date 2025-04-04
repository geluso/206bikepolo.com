import Link from "next/link";
import { ReactNode } from "react";

export default function Page({ children }: { children: ReactNode }) {
  return <div>
      <h2>Admin</h2>
      <p>
        <Link href="/rumble/admin">Back to admin</Link>
      </p>
      <div>
        {children}
      </div>
  </div>
}