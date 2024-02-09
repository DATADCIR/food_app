import Image from "next/image";
const comment = () => {
  return (
    <div className="w-full bg-yellow-light flex px-5 py-2 rounded-lg gap-5 ">
      <div className="relative w-2/12 sm:w-1/12">
        <Image
          src="/images/Ellipse 18.png"
          alt="user image"
          width={182}
          height={182}
          className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/2    md:translate-x-1/5 md:-translate-y-1/2 xl:translate-y-3 xl:translate-x-1/4 scale-150   sm:scale-175  md:scale-200 xl:scale-185"
        />
      </div>
      <div className="w-10/12 sm:w-11/12 flex flex-col gap-5 ">
        <div className="flex flex-col sm:flex-row gap-y-2 gap-x-5 text-black">
          <div>
            <p className=" whitespace-nowrap text-sm sm:text-lg">
              دانیال عسگری
            </p>
          </div>
          <div className="relative w-full flex items-center bg-gradient-to-l from-white to-transparent rounded-r-full pr-5 text-sm">
            <p className="text-xs sm:text-lg">1402/10/20</p>
            <p className="text-xs sm:text-lg">19:28</p>
          </div>
        </div>

        <div className="flex flex-col  gap-0.5">
          <div className=" w-full h-0.5 bg-white mx-auto"></div>
          <div className="p-2 bg-white text-justify text-gray-light rounded-lg">
            <p className="text-sm sm:text-lg">
              اگه به غذاهای رژیمی علاقه دارین میتونه یک گزینه خوب باشه
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default comment;
