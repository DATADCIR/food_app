import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between  text-white px-8 py-2 ">
      <div className="w-full flex items-center justify-between bg-slate-800 py-5 px-4 rounded-full">
        <div className="flex ">
          <div className="nav_icon ml-8">آیکون</div>
          <div className="nav_items flex gap-5">
            <Link href={"/"}>صفحه اصلی</Link>
            <Link href={"/"}>فروشگاه</Link>
            <Link href={"/"}>تماس با ما</Link>
            <Link href={"/"}>درباره ما</Link>
            <Link href={"/"}>منو غذا</Link>
          </div>
        </div>
        <div className="flex">
          <input
            type="text"
            className="focus:outline-0 focus:border-0 rounded-full px-2 py-1 bg-slate-600 "
            placeholder="نام غذا را وارد کنید... "
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
