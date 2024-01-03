"use client";
import Link from "next/link";
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
      <div
        className={`w-full flex items-center justify-between py-5 px-4 rounded-full ${
          theme === "light" ? "bg-gray-50" : "bg-slate-800"
        }`}
      >
        <div className="flex items-center">
          <div className="nav_icon ml-8">آیکون</div>
          <div className="nav_items hidden lg:flex gap-5">
            <Link href={"/"}>صفحه اصلی</Link>
            <Link href={"/store"} className="flex gap-1 items-center">
              فروشگاه <Icons name="Down" />
            </Link>
            <Link href={"/contact-us"} className="flex gap-1 items-center">
              تماس با ما <Icons name="Down" />
            </Link>
            <Link href={"/about-us"} className="flex gap-1 items-center">
              درباره ما <Icons name="Down" />
            </Link>
            <Link href={"/food-menues"} className="flex gap-1 items-center">
              منو غذا <Icons name="Down" />
            </Link>
          </div>
          <Icons
            handleClick={() => dispatch(openSidebar())}
            name="Menu"
            classes="flex lg:hidden text-3xl"
          />
        </div>
        <div className="flex items-center gap-2">
          <div className=" relative hidden sm:flex">
            <input
              type="text"
              className="focus:outline-0 focus:border-0 rounded-full px-3 h-10 bg-slate-200  text-xs min-w-60 "
              placeholder="نام غذا را وارد کنید... "
            />
            <Icons
              name="Search"
              classes={
                "bg-red-500 h-10 w-10 flex justify-center items-center rounded-full absolute top-0 left-0 h-full"
              }
            />
          </div>

          <Icons
            name="Store"
            classes={
              "bg-yellow-500 h-10 w-10 flex justify-center items-center rounded-full"
            }
          />
          <Icons
            name="User"
            classes={
              "bg-green-500 h-10 w-10 flex justify-center items-center rounded-full"
            }
          />
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
