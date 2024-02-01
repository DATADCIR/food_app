import Image from "next/image";
const comment = () => {
  return (
    <div className="w-full bg-yellow-light flex px-5 py-2 rounded-lg gap-5 ">
      <div className="relative w-1/12">
        <Image
          src="/images/Ellipse 18.png"
          alt="user image"
          width={182}
          height={182}
          className="absolute top-0 right-0 -translate-y-1/5 translate-x-1/4 scale-200 md:scale-175"
        />
      </div>
      <div className="w-11/12 flex flex-col gap-5 ">
        <div className="flex gap-5 text-black">
          <div>
            <p className=" whitespace-nowrap text-lg">دانیال عسگری</p>
          </div>
          <div className="relative w-full flex items-center bg-gradient-to-l from-white to-transparent rounded-r-full pr-5 text-sm">
            <p>1402/10/20</p>
            <p>19:28</p>
          </div>
        </div>

        <div className="flex flex-col  gap-0.5">
          <div className=" w-full h-0.5 bg-white mx-auto"></div>
          <div className="p-2 bg-white text-justify text-gray-light rounded-lg">
            <p>اگه به غذاهای رژیمی علاقه دارین میتونه یک گزینه خوب باشه</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default comment;
