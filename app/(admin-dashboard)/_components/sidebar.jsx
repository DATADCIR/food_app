"use client";
import { useState } from "react";
import Icons from "@/components/shared/icons";
import Link from "./SidebarLink";
const SidebarAdmin = () => {
  const [isSideBarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="relative bg-AdminBlack-100">
      <div className="w-96 min-h-screen h-full hidden lg:flex flex-col gap-5 bg-yellow-light px-5 overflow-hidden py-10">
        <Link
          href="/admin"
          classes="w-full h-20 flex justify-center items-center rounded-lg bg-gray-light text-2xl"
        >
          داشبورد
        </Link>
        <Link
          href="/products"
          classes="w-full h-20 flex justify-center items-center rounded-lg bg-gray-light text-2xl"
        >
          محصولات
        </Link>
        <Link
          href="/users"
          classes="w-full h-20 flex justify-center items-center rounded-lg bg-gray-light text-2xl"
        >
          کاربران
        </Link>
      </div>
      <div className="w-12 sm:w-16 min-h-screen h-full lg:hidden flex items-center flex-col gap-5 bg-yellow-light px-5 overflow-hidden py-5 rounded-l-xl">
        <Icons
          name="Menu"
          classes={"text-3xl text-white"}
          handleClick={() => setIsSidebarOpen(true)}
        />
      </div>
      {isSideBarOpen ? (
        <div className="absolute w-[500%] sm:w-[800%] h-full flex lg:hidden flex-col gap-5 px-3 py-4 bg-yellow-light top-0 right-0 z-50 overflow-hidden rounded-l-lg">
          <Icons
            name="Close"
            handleClick={() => setIsSidebarOpen(false)}
            classes="mr-auto ml-5 text-4xl"
          />
          <Link
            href="/admin"
            classes="w-full h-20 flex justify-center items-center rounded-lg bg-gray-light text-2xl"
            handleClick={() => setIsSidebarOpen(false)}
          >
            داشبورد
          </Link>
          <Link
            href="/products"
            classes="w-full h-20 flex justify-center items-center rounded-lg bg-gray-light text-2xl"
            handleClick={() => setIsSidebarOpen(false)}
          >
            محصولات
          </Link>
          <Link
            href="/users"
            classes="w-full h-20 flex justify-center items-center rounded-lg bg-gray-light text-2xl"
            handleClick={() => setIsSidebarOpen(false)}
          >
            کاربران
          </Link>
        </div>
      ) : null}
    </div>
  );
};
export default SidebarAdmin;
