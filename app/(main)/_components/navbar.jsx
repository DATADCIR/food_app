"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import Icons from "@/components/shared/icons";
import { useTheme } from "next-themes";
import { useSelector, useDispatch } from "react-redux";
import { openSidebar } from "@/app/GlobalRedux/Features/sidebar/sidebarSlice";
import { login } from "@/app/GlobalRedux/Features/login/loginSlice";
const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const isSidebarOpen = useSelector((state) => state.sidebar.value);
  const isUserLogin = useSelector(login);
  const dispatch = useDispatch();
  return (
    <div className="w-full flex items-center justify-between py-2 ">
      <div className={`w-full flex items-center justify-between py-5 px-4 `}>
        <div className="flex items-center">
          <div className="nav_icon hidden sm:flex ml-8 text-yellow-light text-xl whitespace-nowrap">
            سان دی
          </div>
          <div className="nav_items hidden lg:flex gap-5">
            <NavLink href={"/"}>صفحه اصلی</NavLink>
            <NavLink
              href={"/store"}
              className="text-white flex gap-1 items-center"
            >
              فروشگاه
            </NavLink>
            <NavLink
              href={"/about-us"}
              className="text-white flex gap-1 items-center"
            >
              درباره ما
            </NavLink>
            <NavLink
              href={"/contact-us"}
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
          {isUserLogin ? (
            <button className="text-white bg-yellow-light text-xs sm:text-base rounded-full flex items-center justify-center w-16 h-8 sm:w-20 sm:h-9">
              <Link href={"/user-dashboard/informations"}>پنل کاربری</Link>
            </button>
          ) : (
            <div className="flex ga-4">
              <button className="border-2 border-yellow-light text-yellow-light text-xs sm:text-base rounded-full flex items-center justify-center w-28 h-10 sm:w-32 sm:h-10">
                <Link href={"/register"}>ثبت نام</Link>
              </button>
              <button className="text-white bg-yellow-light text-xs sm:text-base rounded-full flex items-center justify-center w-16 h-8 sm:w-20 sm:h-9">
                <Link href={"/login"}>ورود</Link>
              </button>
            </div>
          )}

          <div
            className="hidden sm:flex"
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
