import Image from "next/image";
const Survey = () => {
  return (
    <div className="bg-gray-light mt-40 flex py-3 relative w-[115%] translate-x-8">
      <div className="flex flex-col  p-8 w-full md:w-1/3 gap-5">
        <h1 className="text-yellow-light text-2xl">نظر سنجی</h1>
        <p className="text-lg text-justify">
          جهت بهبود ارائه خدمات در نظر سنجي سايت شركت كنيد و به ميزان رضايت خود
          به ما راي بدهيد باتشكر
        </p>
        <button className="text-white bg-yellow-light w-66 h-10 sm:w-88 sm:h-12 rounded-full">
          شرکت در نظرسنجی
        </button>
        <Image
          src={"/images/139180-food-plate-fish-download-hd 1.png"}
          alt="fool"
          width={400}
          height={400}
          className="flex md:hidden mx-auto"
        />
      </div>

      <Image
        src={"/images/139180-food-plate-fish-download-hd 1.png"}
        alt="fool"
        width={400}
        height={400}
        className="absolute top-0 left-0 -translate-y-1/4 translate-x-36 hidden md:flex"
      />
    </div>
  );
};
export default Survey;
