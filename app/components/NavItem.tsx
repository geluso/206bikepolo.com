import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface NavItemProps {
  href: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, label }) => {
  const isActive = true;

  return (
    <Link
      href={href}
      className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
    >
      {label}
    </Link>
  );
};

export default NavItem;
