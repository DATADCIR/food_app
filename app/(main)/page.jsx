"use client";
import Divider from "@/components/shared/dividers/divider";
import Image from "next/image";
import { useTheme } from "next-themes";
import { categories } from "@/data";
import Rating from "./_components/Rating";
import Icons from "@/components/shared/icons";
export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <main className="flex flex-col px-8 py-2">
      <div className={`px-4 overflow-hideen`}>
        <div className="header flex items-center relative">
          <div className="flex flex-col gap-3 w-full md:w-1/3">
            <h1 className="text-yellow-light text-3xl">کافه رستوران ساندی</h1>
            <p className="text-white text-lg">
              تجربه بهترین لحظات در کنار دوستان و خانواده در کنار ما ، امیدواریم
              لذت ببرید!؟
            </p>
            <input
              className="outline-0  h-8 text-white text-xs px-4 bg-gray-light rounded-full border border-yellow-light"
              placeholder="چی دوست داری؟"
            />
          </div>
          <div className="relative hidden md:flex justify-center items-end w-2/3">
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
      <div className="mt-16 px-8 flex flex-col gap-16">
        <Divider tag={"دسته بندی ها"} classes={"text-yellow-light"} />
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <div
              key={category.key}
              className={`w-48 h-52 flex justify-center items-center     text-yellow-light relative overflow-hidden`}
            >
              <span className="z-10">{category.key}</span>
              <Image
                src={category.image}
                width={"192"}
                height={"208"}
                alt="food app"
                className="absolute w-full h-full top-0 left-0   brightness-25"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 px-8 flex flex-col gap-16">
        <Divider tag={"تخفیف ها"} classes={"text-yellow-light"} />
        <div className="flex  flex-wrap justify-center gap-x-16 gap-y-20">
          {[...Array(6)].map((index) => (
            <div
              key={index}
              className="relative flex flex-col justify-center items-center w-88 h-44 rounded-se-3xl rounded-es-3xl bg-gray-light"
            >
              <Image
                src="/images/restaurant-food_2.png"
                width={100}
                height={100}
                alt="food takhfif"
                className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
              />
              <p className="text-yellow-light text-xl">پاستا ساده</p>
              <Rating />
              <p className="flex gap-5">
                <span className="text-red-500">1800</span>
                <span className="text-green-500">2000</span>
              </p>
              <div className="bg-green-500 w-16 h-16  absolute bottom-0 left-0 header_clip_path flex justify-center items-center">
                <Icons
                  name={"Store"}
                  classes={"-translate-x-2 translate-y-2"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-light mt-40 flex py-3 relative w-[115%] translate-x-11">
        <div className="flex flex-col  p-8 w-1/3">
          <h1 className="text-yellow-light text-2xl">نظر سنجی</h1>
          <p className="text-lg text-justify">
            جهت بهبود ارائه خدمات در نظر سنجي سايت شركت كنيد و به ميزان رضايت
            خود به ما راي بدهيد باتشكر
          </p>
          <button className="text-white bg-yellow-light w-88 h-12 rounded-full">
            شرکت در نظرسنجی
          </button>
        </div>

        <Image
          src={"/images/139180-food-plate-fish-download-hd 1.png"}
          alt="fool"
          width={400}
          height={400}
          className="absolute top-0 left-0 -translate-y-1/4 translate-x-36"
        />
      </div>
    </main>
  );
}
