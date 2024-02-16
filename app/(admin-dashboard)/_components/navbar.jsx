import Input from "@/components/shared/forms/input";
import Icons from "@/components/shared/icons";
import Link from "next/link";
const AdminNavbar = () => {
  return (
    <div className="w-full h-36 flex bg-AdminBlack-100">
      <div className="w-2/5 md:w-1/4 flex  justify-between items-center px-5">
        <Link href={"/"}>
          <p className="text-white text-xl">ساندی</p>
        </Link>
        <div className="w-12 h-12 rounded-full bg-gray-100"></div>
      </div>
      <div className="w-3/4 flex justify-end md:justify-between items-center px-5">
        <div className="hidden md:flex">
          <Input
            placeholder={"جستجو..."}
            classes="w-32 h-8 text-yellow-light placeholder-yellow-light text-sm w-[400px] px-2 rounded-full border-2 border-yellow-light focus:border-yellow-light"
          />
        </div>

        <div className="flex gap-2">
          <div className="w-8 h-8  flex justify-center items-center bg-gray-light rounded-full">
            <Icons name={"User"} classes="text-yellow-light" />
          </div>
          <div className="w-8 h-8  flex justify-center items-center bg-gray-light rounded-full">
            <Icons name={"Bell"} classes="text-yellow-light" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminNavbar;
