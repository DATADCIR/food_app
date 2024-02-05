import Link from "next/link";
import { usePathname } from "next/navigation";

const PanelLink = ({ href, children }) => {
  const pathName = usePathname();

  return (
    <Link href={href}>
      <div
        className={`h-14 flex items-center justify-center text-white rounded-r-full text-lg ${
          pathName === href ? "bg-gray-light" : ""
        }`}
      >
        {children}
      </div>
    </Link>
  );
};

export default PanelLink;
