"use client";
import Divider from "@/components/shared/dividers/divider";
import Image from "next/image";
import { useTheme } from "next-themes";
import { categories } from "@/data";
import Rating from "./_components/Rating";
import Icons from "@/components/shared/icons";
import Survey from "./_components/survey";
import CategoryItem from "./_components/CategoryItem";
export default function Home() {
  return (
    <main className="flex flex-col py-2">
      <div className={`px-4 overflow-hideen`}>
        <div className="header flex flex-col md:flex-row items-center relative gap-y-20">
          <div className="flex flex-col gap-6 sm:gap-3 w-full md:w-1/3">
            <h1 className="text-yellow-light text-3xl">کافه رستوران ساندی</h1>
            <p className="text-white dark:text-yellow-400 text-lg">
              تجربه بهترین لحظات در کنار دوستان و خانواده در کنار ما ، امیدواریم
              لذت ببرید!؟
            </p>
            <input
              className="outline-0  h-8 text-white text-xs px-4 bg-gray-light rounded-full border border-yellow-light"
              placeholder="چی دوست داری؟"
            />
          </div>
          <div className="relative flex justify-center items-end md:w-2/3">
            <Image
              src="/images/restaurant-food_2.png"
              width={500}
              height={500}
              alt="food"
              className="z-10"
            />
          </div>{" "}
          <div className="flex absolute top-0 left-0 w-full md:w-1/2 h-full -translate-x-16  header_clip_path bg-yellow-light z-0"></div>
        </div>
      </div>
      <div className="mt-16 px-8 flex flex-col gap-16">
        <Divider tag={"دسته بندی ها"} classes={"text-yellow-light"} />
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <div key={category.key}>
              <CategoryItem image={category.image}>{category.key}</CategoryItem>
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
                className="absolute top-0 right-0 translate-x-10 sm:translate-x-1/2 -translate-y-1/2"
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
      <Survey />
    </main>
  );
}
