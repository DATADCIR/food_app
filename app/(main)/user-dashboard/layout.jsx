"use client";
import PageInspector from "../_components/PageInspector";
import PanelLink from "./_components/panelLink";

const userDashboardLayout = ({ children }) => {
  return (
    <>
      <PageInspector
        title={"سان دي >> پنل کاربری"}
        classes="text-yellow-light text-lg h-24 border-2 border-yellow-light my-10 rounded-xl"
      />
      <div className="flex">
        <div className="w-1/4 h-screen flex flex-col py-10 pr-5 gap-3 bg-yellow-light rounded-r-lg">
          <PanelLink href="/user-dashboard">پنل کاربری</PanelLink>
          <PanelLink href="/user-dashboard/informations">اطلاعات</PanelLink>
          <PanelLink href="/user-dashboard/orders">سفارشات</PanelLink>
        </div>
        <div className="w-3/4 bg-gray-light rounded-l-lg">{children}</div>
      </div>
    </>
  );
};
export default userDashboardLayout;
