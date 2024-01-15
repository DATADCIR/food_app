"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import Icons from "@/components/shared/icons";
import { useTheme } from "next-themes";
import { useSelector, useDispatch } from "react-redux";
import { openSidebar } from "@/app/GlobalRedux/Features/sidebar/sidebarSlice";
const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const isSidebarOpen = useSelector((state) => state.sidebar.value);
  const dispatch = useDispatch();
  return (
    <div className="w-full flex items-center justify-between px-8 py-2 ">
      <div className={`w-full flex items-center justify-between py-5 px-4 `}>
        <div className="flex items-center">
          <div className="nav_icon ml-8 text-yellow-light text-xl">سان دی</div>
          <div className="nav_items hidden lg:flex gap-5">
            <NavLink href={"/"}>صفحه اصلی</NavLink>
            <NavLink
              href={"/store"}
              className="text-white flex gap-1 items-center"
            >
              فروشگاه
            </NavLink>
            <NavLink
              href={"/contact-us"}
              className="text-white flex gap-1 items-center"
            >
              درباره ما
            </NavLink>
            <NavLink
              href={"/about-us"}
              className="text-white flex gap-1 items-center"
            >
              تماس با ما
            </NavLink>
          </div>
          <Icons
            handleClick={() => dispatch(openSidebar())}
            name="Menu"
            classes="flex lg:hidden text-3xl"
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="border-2 border-yellow-light text-yellow-light rounded-full flex items-center justify-center  w-20 h-9">
            <Link href={"/register"}>ثبت نام</Link>
          </button>
          <button className="text-white bg-yellow-light rounded-full flex items-center justify-center  w-20 h-9">
            <Link href={"/login"}>ورود</Link>
          </button>
          <div
            onClick={() =>
              theme === "light" ? setTheme("dark") : setTheme("light")
            }
          >
            {theme === "light" ? (
              <Icons
                name="Sun"
                classes="bg-gray-100 h-10 w-10 flex justify-center items-center rounded-full text-yellow-500"
              />
            ) : (
              <Icons
                name="Moon"
                classes="bg-slate-900 h-10 w-10 flex justify-center items-center rounded-full text-yellow-500"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
