import Image from "next/image";
import PageInspector from "../_components/PageInspector";
import Checkbox from "@/components/ui/forms/checkbox";
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
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
      <PageInspector
        title={"ساندی << محصولات"}
        classes="text-yellow-light text-lg h-24 border-2 border-yellow-light my-10"
      />
      <div className="flex ">
        <div className="w-1/3 flex flex-col">
          <div className="p-5 bg-gray-light flex flex-col gap-5">
            <p className="text-yellow-light text-2xl ">دسته بندی ها</p>
          </div>
          <div className=""></div>
        </div>
        <div className="w-2/3"></div>
      </div>
    </>
  );
};
export default StorePage;
