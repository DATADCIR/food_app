import Image from "next/image";
import Divider from "@/components/shared/dividers/divider";
const Footer = () => {
  return (
    <div>
      <Divider classes={"mt-36 px-8"} />
      <div className="relative footer mt-24 flex flex-col lg:flex-row  gap-5 mb-16 px-8">
        <div className="flex flex-col w-full lg:w-1/2 gap-7">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full md:w-1/2 h-80 flex justify-center items-center bg-gray-light bg-opacity-100 opacity-95 rounded-t-lg">
              <div className="flex flex-col gap-3">
                <p className="text-yellow-light text-xl">شعبه ها</p>
                <p className="text-lg z-10">شعبه 1:اصفهان-سهروردي</p>
                <p className="text-lg">شعبه 2:تهران-وليعصر</p>
                <p className="text-lg">شعبه 3:مشهد-فردوسي</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 h-80 flex justify-center items-center bg-gray-light bg-opacity-85 rounded-t-lg">
              <div className="flex flex-col gap-3">
                <p className="text-yellow-light text-xl">ارتباط</p>
                <p className="text-lg">تلفن:03131234567</p>
                <p className="text-lg">تلفن:03131234567</p>
                <p className="text-lg">تلفن:03131234567</p>
              </div>
            </div>
          </div>
          <div className="w-full h-20 bg-gray-light flex items-center justify-center text-2xl bg-opacity-85 rounded-t-lg">
            <p className="text-yellow-light">
              تمامي منابع محفوظ به سان دي ميباشد
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-5">
          <Image
            alt="map"
            src="/images/3c3f9e217cb330145fcdbeb866a463c3c8e6ef63 1.png"
            width={586}
            height={328}
            className="w-full"
          />
          <div className="flex items-center justify-center gap-5">
            <Image
              alt="instagram"
              src="/images/Vector.png"
              width={80}
              height={80}
            />
            <Image
              alt="instagram"
              src="/images/skill-icons_instagram.png"
              width={80}
              height={80}
            />
            <Image
              alt="instagram"
              src="/images/skill-icons_gmail-light.png"
              width={80}
              height={80}
            />
            <Image
              alt="instagram"
              src="/images/skill-icons_instagram.png"
              width={80}
              height={80}
            />
          </div>
        </div>
        <Image
          alt="instagram"
          src="/images/delicious-food-restaurant-food-png 1.png"
          width={500}
          height={500}
          className="absolute bottom-0 right-0 translate-x-16 translate-y-16 brightness-50"
        />
      </div>
    </div>
  );
};
export default Footer;
