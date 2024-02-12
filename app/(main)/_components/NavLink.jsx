"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLink = ({ href, children }) => {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <Link
      href={href}
      className={` ${
        isActive
          ? "text-yellow-light underline underline-offset-8"
          : "text-black dark:text-white"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
