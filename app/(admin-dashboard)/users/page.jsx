import Table from "../_components/table";
import { userTable } from "@/data";
const UsersPage = () => {
  return (
    <div className="w-full h-full bg-blacl-dark flex flex-col lg:flex-row gap-5 py-3 px-4">
      <div className="w-full flex flex-col gap-5 p-5 bg-gray-light rounded-2xl">
        <div className="w-full flex justify-between">
          <p className="text-yellow-light text-xl">لیست کاربران</p>
          <button className="bg-green-light w-32 h-10 rounded-full text-xs px-2">
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
