import Input from "@/components/shared/forms/input";
export const metadata = {
  title: "اطلاعات کاربران",
  description: "اطلاعات کاربران سایت ساندی",
};
const DashboardUsersPage = () => {
  return (
    <div className="p-10 flex flex-col gap-3 sm:gap-5">
      <div className="w-full flex flex-col md:flex-row gap-5 sm:gap-10">
        <Input
          label={"نام"}
          type={"text"}
          classes={
            "bg-gray-50 flex-grow px-2 py-3 rounded-full bg-white bg-opacity-100 border-4 border-yellow-light focus:border-yellow-light outline-0 text-black opacity-100 "
          }
        />
        <Input
          type={"text"}
          label={"نام خانوادگی"}
          classes={
            "bg-gray-50 flex-grow px-2 py-3 rounded-full bg-white bg-opacity-100 border-4 border-yellow-light focus:border-yellow-light outline-0 text-black opacity-100"
          }
        />
        <Input
          type={"text"}
          label={"تلفن"}
          classes={
            "bg-gray-50 lex-grow  px-2 py-3 rounded-full bg-white bg-opacity-100 border-4 border-yellow-light focus:border-yellow-light outline-0 text-black opacity-100"
          }
        />
      </div>
      <div className="w-full">
        <Input
          type={"text"}
          label="آدرس"
          classes={
            "bg-gray-50 flex-grow  px-2 py-3 rounded-full bg-white bg-opacity-100 border-4 border-yellow-light focus:border-yellow-light outline-0 text-black opacity-100"
          }
        />
      </div>
      <div className="md:w-1/3">
        <Input
          type={"text"}
          label="کد پستی"
          classes={
            "bg-gray-50 flex-grow  px-2 py-3 rounded-full bg-white bg-opacity-100 border-4 border-yellow-light focus:border-yellow-light outline-0 text-black opacity-100"
          }
        />
      </div>
      <button className=" w-full sm:w-60 h-16 text-white  bg-yellow-light  py-3 rounded-lg opacity-100 border mr-auto">
        ویرایش
      </button>
    </div>
  );
};
export default DashboardUsersPage;
