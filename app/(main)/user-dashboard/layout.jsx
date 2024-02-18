"use client";
import { useState } from "react";
import PageInspector from "../_components/PageInspector";
import PanelLink from "./_components/panelLink";
import Icons from "@/components/shared/icons";
import { AnimatePresence, motion } from "framer-motion";
const UserDashboardLayout = ({ children }) => {
  const [openMobileSizeSidebar, setOpenMobileSizeSidebar] = useState(false);
  return (
    <>
      <PageInspector
        title={"سان دي >> پنل کاربری"}
        classes="text-yellow-light text-lg h-24 border-2 border-yellow-light my-10 rounded-xl"
      />
      <div className="relative flex">
        <div className="w-1/4 min-h-screen hidden lg:flex flex-col py-10 pr-5 gap-3 bg-yellow-light rounded-r-lg">
          <PanelLink href="/user-dashboard">پنل کاربری</PanelLink>
          <PanelLink href="/user-dashboard/informations">اطلاعات</PanelLink>
          <PanelLink href="/user-dashboard/orders">سفارشات</PanelLink>
        </div>
        <div
          className="relative w-10 flex justify-center lg:hidden bg-yellow-light rounded-r-lg"
          onClick={() => {
            setOpenMobileSizeSidebar(true);
          }}
        >
          <Icons name="Menu" classes={"text-white text-2xl mt-2"} />
        </div>{" "}
        <AnimatePresence>
          {openMobileSizeSidebar && (
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: "0vw", type: "easeInOut" }}
              exit={{ x: "100vw" }}
              transition={{ ease: "linear" }}
              className={`absolute z-40  w-full md:w-3/4 min-h-fit h-full flex lg:hidden flex-col py-10 pr-5 gap-3 bg-yellow-light rounded-r-lg`}
            >
              <div className="flex justify-end ml-10 mb-10">
                <div
                  onClick={() => {
                    setOpenMobileSizeSidebar(false);
                  }}
                >
                  <Icons name="Close" classes={"text-white  text-3xl"} />
                </div>
              </div>
              <PanelLink
                href="/user-dashboard"
                handleClick={() => {
                  setOpenMobileSizeSidebar(false);
                }}
              >
                پنل کاربری
              </PanelLink>
              <PanelLink
                href="/user-dashboard/informations"
                handleClick={() => {
                  setOpenMobileSizeSidebar(false);
                }}
              >
                اطلاعات
              </PanelLink>
              <PanelLink
                href="/user-dashboard/orders"
                handleClick={() => {
                  setOpenMobileSizeSidebar(false);
                }}
              >
                سفارشات
              </PanelLink>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="w-full lg:w-3/4 bg-gray-light rounded-l-lg overflow-hidden">
          {children}
        </div>
      </div>
    </>
  );
};
export default UserDashboardLayout;
