import { FaBeer } from "react-icons/fa";
export default function Home() {
  return (
    <main className="flex flex-col px-8 text-white">
      <div className="px-8 py-2 bg-slate-800">
        <div className="flex items-center">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl">
              انتخاب غذا های سالم و ساده در رستوران ما
            </h1>
            <p>
              برای تغییر این متن روی دکمه ویرایش کلیک کنید و لورم ایپسوم با متن
              ساختگی با تولید سادگی نا مفهوم از صنعت چاپ طراحان گرافیک است
            </p>
            <div className="flex gap-3">
              <button className="bg-red-500 text-white text-xs px-3 py-2 rounded-full">
                مشاهده منو
              </button>
              <button className="bg-slate-800 px-3 py-1 rounded-full text-white text-xs border border-red-500">
                تماس با ما
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </main>
  );
}
