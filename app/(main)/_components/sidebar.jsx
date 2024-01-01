"use client";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Icons from "@/components/shared/icons";
import {
  toggleSidebar,
  closeSidebar,
  openSidebar,
} from "@/app/GlobalRedux/Features/sidebar/sidebarSlice";

const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.value);
  const dispatch = useDispatch();
  return (
    <>
      {isSidebarOpen ? (
        <div className="lg:hidden">
          <div className="fixed  flex flex-col top-0 right-0 h-full w-full sm:w-1/2 lg:w-1/4 bg-slate-700 text-white p-5 z-20">
            <Icons
              name="Close"
              classes="flex justify-end text-3xl cursor-pointer"
              handleClick={() => dispatch(closeSidebar())}
            />
            <div className="nav_items flex flex-col gap-5">
              <Link href={"/"}>صفحه اصلی</Link>
              <Link href={"/"} className="flex gap-1 items-center">
                فروشگاه <Icons name="Down" />
              </Link>
              <Link href={"/"} className="flex gap-1 items-center">
                تماس با ما <Icons name="Down" />
              </Link>
              <Link href={"/"} className="flex gap-1 items-center">
                درباره ما <Icons name="Down" />
              </Link>
              <Link href={"/"} className="flex gap-1 items-center">
                منو غذا <Icons name="Down" />
              </Link>
            </div>
          </div>
          <div
            onClick={() => dispatch(closeSidebar())}
            className="cover absolute w-full h-full top-0 left-0 bg-slate-400 z-10 backdrop-blur-md opacity-80"
          ></div>
        </div>
      ) : null}
    </>
  );
};

export default Sidebar;
