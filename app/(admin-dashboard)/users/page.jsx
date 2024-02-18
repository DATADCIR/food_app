import Table from "../_components/table";
import { userTable } from "@/data";
const UsersPage = () => {
  return (
    <div className="w-full h-full bg-black-dark flex flex-col lg:flex-row gap-5 py-3 px-4">
      <div className="w-full flex flex-col gap-3 sm:gap-5 p-3 sm:p-5 bg-gray-light rounded-2xl">
        <div className="w-full flex justify-between items-center">
          <p className="text-yellow-light text-sm sm:text-xl whitespace-nowrap">
            لیست کاربران
          </p>
          <button className="bg-green-light w-32 h-10 rounded-full text-xs sm:text-sm px-2 text-white  ">
            اضافه کردن کاربر
          </button>
        </div>
        <div className="p-3 bg-white rounded-lg">
          <Table
            perPage={"10"}
            columns={userTable.labeles}
            data={userTable.data}
            classes={"text-black"}
          />
        </div>
      </div>
    </div>
  );
};
export default UsersPage;
