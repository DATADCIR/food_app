"use client";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Icons from "@/components/shared/icons";
import {
  toggleSidebar,
  closeSidebar,
  openSidebar,
} from "@/app/GlobalRedux/Features/sidebar/sidebarSlice";
import { AnimatePresence, motion } from "framer-motion";
const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.value);
  const dispatch = useDispatch();
  return (
    <>
      <AnimatePresence>
        {" "}
        {isSidebarOpen && (
          <div className="lg:hidden">
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: "0vw", type: "easeInOut" }}
              exit={{ x: "100vw" }}
              transition={{ ease: "linear" }}
              className="fixed  flex flex-col top-0 right-0 h-full w-full sm:w-1/2 lg:w-1/4 bg-slate-700 text-white p-5 z-20"
            >
              <Icons
                name="Close"
                classes="flex justify-end text-3xl cursor-pointer"
                handleClick={() => dispatch(closeSidebar())}
              />
              <div className="nav_items flex flex-col gap-5">
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
            </motion.div>
            <div
              onClick={() => dispatch(closeSidebar())}
              className="cover absolute w-full h-full top-0 left-0 bg-slate-400 z-10 backdrop-blur-md opacity-80"
            ></div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
