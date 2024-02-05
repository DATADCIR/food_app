"use client";
import { useState } from "react";
import PageInspector from "../_components/PageInspector";
import PanelLink from "./_components/panelLink";
import Icons from "@/components/shared/icons";
const userDashboardLayout = ({ children }) => {
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
        <div
          className={`absolute z-10 ${
            openMobileSizeSidebar ? "w-full md:w-3/4" : "hidden"
          } h-full flex lg:hidden flex-col py-10 pr-5 gap-3 bg-yellow-light rounded-r-lg`}
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
        </div>
        <div className="w-full lg:w-3/4 bg-gray-light rounded-l-lg">
          {children}
        </div>
      </div>
    </>
  );
};
export default userDashboardLayout;
