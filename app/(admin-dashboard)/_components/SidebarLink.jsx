"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const SidebarAdminLink = ({ href, classes, handleClick, children }) => {
  const pathName = usePathname();
  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`${classes} ${
        pathName.includes(href)
          ? "-translate-x-10 text-yellow-light"
          : "text-white"
      }`}
    >
      {children}
    </Link>
  );
};
export default SidebarAdminLink;
