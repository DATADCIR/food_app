import Divider from "@/components/shared/dividers/divider";
import { galleryImages } from "@/data";
import PageInspector from "../_components/PageInspector";
import Gallery from "./_components/gallery";
import Image from "next/image";
import Comment from "./_components/comment";
const SingleProductPage = () => {
  return (
    <>
      <PageInspector
        title="ساندی < محصولات > ماهی آبپز شده"
        classes={
          "text-yellow-light text-base sm:text-lg h-24 rounded-xl border-2 border-yellow-light my-10 "
        }
      />
      <div className="flex flex-col lg:flex-row bg-gray-light p-6 rounded-lg gap-4">
        <div className="lg:w-1/3 flex flex-col gap-5">
          <h1 className="text-yellow-light text-lg sm:text-2xl">
            ماهي آب پز شده
          </h1>
          <p className="text-justify text-white  text-base sm:text-xl">
            اين غذا نوعي غذاي رژيمي تلقي ميشود. با كمترين مقدار ممكن روغن در اب
            90 درجه جوشانده ميشود و سپس در ظروف گريل به ارامي تفت داده ميشود. در
            كنار اين غذا سالاد فصل قرار گرفته ميشود كه شامل گوجه فرنگي اسلايس
            شده ، كاهو كلم قرمز ، هويج خلال شده قرار ميگيرد.
          </p>
          <h1 className="text-yellow-light text-lg sm:text-2xl">ويژگي ها</h1>
          <div className="w-full flex flex-wrap text-xs sm:text-xl">
            <div className="w-1/2 inline-block my-2">تعداد ماهی : 1 عدد</div>
            <div className="w-1/2 inline-block my-2">وزن : 850 گرم</div>
            <div className="w-1/2 inline-block my-2">ظرف : آلمینیومی</div>
            <div className="w-1/2 inline-block my-2">تعداد افراد : یک نفر</div>
            <div className="w-1/2 inline-block my-2">تعداد ماهی : 1 عدد</div>
            <div className="w-1/2 inline-block my-2">وزن : 850 گرم</div>
            <div className="w-1/2 inline-block my-2">ظرف : آلمینیومی</div>
            <div className="w-1/2 inline-block my-2">تعداد افراد : یک نفر</div>
          </div>
        </div>
        <div className="lg:w-2/3">
          <Gallery images={galleryImages} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5 p-10 bg-gray-light rounded-lg my-10">
        <div className="relative md:w-2/3 flex flex-col gap-10 px-5 py-8">
          <Image
            src="/images/Rectangle 95.png"
            width={770}
            height={683}
            alt="food image"
            className="absolute top-0 left-0 w-full h-full brightness-5 z-0"
          />
          <Divider
            tag={"مواد لازم"}
            classes={"text-yellow-light text-lg md:text-2xl z-10"}
          />
          <div className="w-11/12 flex justify-between gap-5 z-10">
            <div className="flex flex-col text-center gap-4">
              <span>ماهی بدون استخوان</span>
              <span>آب</span>
              <span>نمک</span>
              <span>گوجه فرنگی</span>
              <span>پیاز</span>
              <span>کاهو</span>
              <span>هویج</span>
              <span>کلم قرمز</span>
              <span>روغن</span>
            </div>
            <div className="flex flex-col text-center gap-4">
              <span>یک عدد</span>
              <span>یک لیتر</span>
              <span>10 گرم</span>
              <span>2 عدد</span>
              <span>1 عدد</span>
              <span>130 گرم</span>
              <span>2 عدد</span>
              <span>2 عدد</span>
              <span>2 عدد</span>
            </div>
          </div>
          <button className="rounded-full text-white bg-yellow-light py-2.5 px-5 z-10 w-32 h-14 mx-auto">
            بیشتر
          </button>
        </div>
        <div className=" md:w-1/3 flex flex-col gap-10">
          <div className="relative flex flex-col gap-8 py-8 px-5 rounded-lg overflow-hidden">
            <Image
              src="/images/Rectangle 95.png"
              width={369}
              height={295}
              alt="food image"
              className="absolute top-0 left-0 w-full h-full brightness-5 z-0"
            />
            <Divider
              tag="انرژی"
              classes={"text-yellow-light md:text-lg text-2xl z-10"}
            />
            <div className="flex justify-between z-10">
              <div className="flex flex-col text-center gap-4">
                <span className="text-center">آب</span>
                <span>نمک</span>
                <span>گوجه فرنگی</span>
                <span>پیاز</span>
              </div>
              <div className="flex flex-col text-center gap-4">
                <span>یک لیتر</span>
                <span>10 گرم</span>
                <span>2 عدد</span>
                <span>1 عدد</span>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col gap-8 py-8 px-5 rounded-lg overflow-hidden">
            <Image
              src="/images/Rectangle 95.png"
              width={396}
              height={355}
              alt="food image"
              className="absolute top-0 left-0 w-full h-full brightness-5 z-0"
            />
            <Divider
              tag="تگ ها"
              classes="text-yellow-light md:text-lg text-2xl z-10"
            />
            <div className="flex flex-wrap justify-center gap-5 z-10">
              <div className="rounded-full text-white bg-yellow-light py-2.5 px-5">
                ماهی
              </div>
              <div className="rounded-full text-white bg-yellow-light py-2.5 px-5">
                ماهی
              </div>
              <div className="rounded-full text-white bg-yellow-light py-2.5 px-5">
                ماهی
              </div>
              <div className="rounded-full text-white bg-yellow-light py-2.5 px-5">
                ماهی
              </div>
              <div className="rounded-full text-white bg-yellow-light py-2.5 px-5">
                ماهی
              </div>
              <div className="rounded-full text-white bg-yellow-light py-2.5 px-5">
                ماهی
              </div>
            </div>
            <button className="rounded-full text-white bg-yellow-light py-2.5 px-5 z-10 w-32 h-14 mx-auto">
              بیشتر
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-gray-light rounded-lg">
        <div className="p-5">
          <textarea
            placeholder="نظر شما..."
            type={"textarea"}
            className="w-full h-60 rounded-lg px-4 py-5 bg-body border-yellow-light border-2 focus:border-yellow-light outline-0 text-white"
          ></textarea>
        </div>
        <div className="flex flex-col-reverse md:flex-row w-full gap-5">
          <div className="md:w-4/5 flex flex-col  gap-20 bg-body py-14 px-5 sm:pl-5">
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </div>
          <div className="md:w-1/5">
            <button className="rounded-lg text-white bg-yellow-light  z-10  w-56 h-16 mx-auto mr-5 md:mr-0">
              ارسال نظر
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleProductPage;
