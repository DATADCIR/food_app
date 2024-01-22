import Divider from "@/components/shared/dividers/divider";
import Image from "next/image";
import PageInspector from "../_components/PageInspector";
const AboutUsPage = () => {
  return (
    <>
      {" "}
      <div className="w-full flex flex-col md:flex-row bg-gray-light pt-12 gap-y-10">
        <div className="flex flex-col justify-center  md:w-1/3 px-6 gap-5">
          <h1 className="text-2xl text-yellow-light">رستوران سان دي</h1>
          <p className="text-white text-xl flex flex-col gap-3">
            <span>اينجا ميتوني بيشتر با ما ي</span>
            <span>اشنا بشي خلاصه اي از چگونگي </span>
            <span>شكل گيري رستورانمو ببينی</span>
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
            className="scale-75 sm:scale-100 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "
          />
        </div>
      </div>
      <PageInspector
        title={"سان دي >> درباره ما"}
        classes="text-yellow-light text-lg h-24 border-2 border-yellow-light my-10"
      />
      <Divider tag={"گالری تصاویر"} classes="mb-10 text-yellow-light" />
      <div className="flex flex-col lg:flex-row justify-center items-center p-10 gap-5 bg-gray-light rounded-lg">
        <div className="w-full lg:w-3/5 flex flex-col  gap-5">
          <div className="flex  gap-3">
            <Image
              alt="restaurent"
              src="/images/Rectangle 55.png"
              width={326}
              height={248}
              className=" brightness-25 w-1/2"
            />
            <Image
              alt="restaurent"
              src="/images/Rectangle 55.png"
              width={326}
              height={248}
              className=" brightness-25 w-1/2"
            />
          </div>
          <div className="flex  gap-3">
            <Image
              alt="restaurent"
              src="/images/Rectangle 55.png"
              width={326}
              height={248}
              className=" brightness-25 w-1/2"
            />
            <Image
              alt="restaurent"
              src="/images/Rectangle 55.png"
              width={326}
              height={248}
              className=" brightness-25 w-1/2"
            />
          </div>
        </div>
        <div className="w-full lg:w-2/5">
          <Image
            alt="restaurent"
            src="/images/Rectangle 52.png"
            width={440}
            height={540}
            className="w-full"
          />
        </div>
      </div>
      <div className="relative flex flex-col md:flex-row bg-gray-light px-10 pt-8 pb-52 sm:pb-48 my-10 gap-y-10 rounded-lg">
        <div className="flex items-center md:w-3/5">
          <p className=" text-white text-xl text-justify md:w-4/5">
            تیم آشپزی سان دی متشکل از چهار سر اشپز حرفه ای میباشد. ما معتقد هسیم
            که غذاهایمان از مابقی رستوران ها متفاوت باشد و برای این کار تلاش
            زیادی میکنیم
          </p>
        </div>
        <div className="relative w-full md:w-2/5 flex">
          <Image
            alt="restaurent"
            src="/images/Vector 3.png"
            width={511}
            height={416}
            className="w-full"
          />
          <Image
            alt="restaurent"
            src="/images/Vector 2.png"
            width={439}
            height={357}
            className="w-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          />
        </div>
        <div className="w-4/5 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-yellow-light rounded-lg flex flex-col gap-5 items-center justify-center px-4 py-14">
          <p className="text-white text-xl text-center">احداث</p>
          <p className="text-white text-lg text-center  sm:w-1/4">
            این رستوران در سال 1395 فعالیت خودشو شروع کرد و در ابتدا فقط یک کافه
            ساده بود
          </p>
        </div>
      </div>
    </>
  );
};
export default AboutUsPage;
