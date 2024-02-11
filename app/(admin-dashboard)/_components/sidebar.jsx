import Link from "./SidebarLink";
const SidebarAdmin = () => {
  return (
    <div className="w-1/3 min-h-screen flex flex-col gap-5 bg-yellow-light px-5 overflow-hidden py-10">
      <Link
        href="/admin"
        classes="w-full h-20 flex justify-center items-center rounded-lg bg-gray-light text-2xl"
      >
        داشبورد
      </Link>
      <Link
        href="/producs"
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
  );
};
export default SidebarAdmin;
