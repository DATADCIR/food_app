import Link from "next/link";

import Icons from "@/components/shared/icons";
const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between  text-white px-8 py-2 ">
      <div className="w-full flex items-center justify-between bg-slate-800 py-5 px-4 rounded-full">
        <div className="flex items-center">
          <div className="nav_icon ml-8">آیکون</div>
          <div className="nav_items hidden lg:flex gap-5">
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
          <Icons name="Menu" classes="flex lg:hidden text-3xl" />
        </div>
        <div className="flex items-center gap-2">
          <div className=" relative">
            <input
              type="text"
              className="focus:outline-0 focus:border-0 rounded-full px-3 h-10 bg-slate-600 text-xs min-w-60"
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
        </div>
      </div>
    </div>
  );
};
export default Navbar;
