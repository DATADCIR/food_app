import Link from "next/link";
import { usePathname } from "next/navigation";

const PanelLink = ({ href, handleClick, children }) => {
  const pathName = usePathname();

  return (
    <Link href={href} onClick={handleClick}>
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
