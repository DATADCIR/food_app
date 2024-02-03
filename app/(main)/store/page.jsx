"use client";
import Image from "next/image";
import PageInspector from "../_components/PageInspector";
import ListGruop from "@/components/shared/forms/ListGroup";
import Checkbox from "@/components/ui/forms/checkbox";
import { categoyFilter, foodItems } from "@/data";
import FoodItem from "./_components/Foodtem";
import Pagination from "@/components/shared/forms/Pagination";
import Survey from "../_components/survey";
const StorePage = () => {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row bg-gray-light pt-12">
        <div className="flex flex-col justify-center  md:w-1/3 px-6 gap-5">
          <h1 className="text-2xl text-yellow-light">انتخاب كنيد!</h1>
          <p className="text-white text-xl flex flex-col gap-3">
            <span>اينجا هرچيزيو دوست داري ميتوني</span>
            <span>با چند كليك به هر اندازه</span>
            <span>انتخاب كني</span>
          </p>
        </div>
        <div className="md:w-2/3 relative flex justify-end">
          <Image
            src="/images/Vector 1.png"
            width={500}
            height={350}
            alt="rounded shape"
          />
          <Image
            src="/images/food-grass-fed-beef-foodservice-products-grass-run-farms-4 1.png"
            width={303}
            height={296}
            alt="food"
            className="scale-75 sm:scale-100  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
      <PageInspector
        title={"ساندی << محصولات"}
        classes="text-yellow-light text-lg h-24 border-2 border-yellow-light my-10 rounded-xl"
      />
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="lg:w-1/3 flex flex-col gap-5">
          <div className="p-5 bg-gray-light flex flex-col gap-5 rounded-lg">
            <p className="text-yellow-light text-2xl ">دسته بندی ها</p>
            <ListGruop items={categoyFilter} classes={"text-white gap-5"}>
              <Checkbox classes={"text-white text-md gap-3"} />
            </ListGruop>
          </div>
          <div className="flex flex-col p-5 gap-5 bg-gray-light rounded-lg">
            <p className="text-yellow-light text-2xl">قیمت</p>
            <input
              placeholder="از قیمت..."
              className="px-2 py-3 rounded-full bg-white border-yellow-light border-2 focus:border-yellow-light outline-0 text-black"
            />
            <input
              placeholder="تا قیمت..."
              className="px-2 py-3 rounded-full bg-white border-yellow-light border-2 focus:border-yellow-light outline-0 text-black"
            />
          </div>
        </div>
        <div className="lg:w-2/3 bg-gray-light rounded-lg flex flex-col gap-20 px-3 pt-20 pb-2">
          <Pagination items={foodItems} perPage={3}>
            <ListGruop classes={"gap-20 mb-10"}>
              <FoodItem classes={"bg-yellow-light rounded-lg pr-32 py-5"} />
            </ListGruop>
          </Pagination>
        </div>
      </div>
      <Survey />
    </>
  );
};
export default StorePage;
