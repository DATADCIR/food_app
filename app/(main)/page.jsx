"use client";
import Icons from "@/components/shared/icons";
import Image from "next/image";
import { useTheme } from "next-themes";
export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <main className="flex flex-col px-8 py-2">
      <div className={`px-4 overflow-hideen`}>
        <div className="header flex items-center relative">
          <div className="flex flex-col gap-3 ">
            <h1 className="text-yellow-light text-3xl">کافه رستوران ساندی</h1>
            <p className="text-white">
              تجربه بهترین لحظات در کنار دوستان و خانواده در کنار ما ، امیدواریم
              لذت ببرید!؟
            </p>
            <input
              className="outline-0  h-8 text-white text-xs px-4 bg-gray-light rounded-full border border-yellow-light"
              placeholder="چی دوست داری؟"
            />
          </div>
          <div className="relative hidden md:flex justify-center items-end flex-1">
            <Image
              src="/images/restaurant-food_2.png"
              width={500}
              height={500}
              alt="food"
              className="z-10"
            />
          </div>{" "}
          <div className="hidden md:flex absolute top-0 left-0 w-1/2 h-full -translate-x-16  header_clip_path bg-yellow-light z-0"></div>
        </div>
      </div>
    </main>
  );
}
