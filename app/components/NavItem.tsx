import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface NavItemProps {
  href: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, label }) => {
  return (
    <Link
      href={href}
      className="block py-2 px-3 text-white"
    >
      {label}
    </Link>
  );
};

export default NavItem;
