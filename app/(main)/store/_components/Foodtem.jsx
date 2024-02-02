import Image from "next/image";
import Rating from "../../_components/Rating";
import Icons from "@/components/shared/icons";
const FoodItem = ({ classes, item }) => {
  const { originalPrice, disCountedPrice, image, name, properties } = item;
  return (
    <div className={`relative flex flex-col gap-5 ${classes}`}>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="text-white text-2xl whitespace-nowrap">{name}</div>
        <div className="w-full flex items-center gap-3 bg-gradient-to-l from-white to-transparent rounded-r-full px-4">
          <Rating />
          <span className="text-green-500">{disCountedPrice}</span>
          <span className="text-red-500 line-through">{originalPrice}</span>
        </div>
      </div>
      <div className="md:w-1/3 flex flex-col flex-wrap md:flex-row gap-5 text-black text-xs">
        <span>چربی : {properties.fat}</span>
        <span>قند : {properties.sougar}</span>
        <span>کالری : {properties.calery}</span>
        <span>نمک : {properties.solt}</span>
      </div>
      <Image
        src={image}
        alt="food"
        width={133}
        height={134}
        className="absolute top-0 right-0  -translate-y-1/2"
      />
      <div className="absolute bottom-0 left-0">
        <Image
          src={"/images/Rectangle 38.png"}
          alt="basket"
          width={90}
          height={90}
        />
        <Icons
          name="Store"
          classes={
            "text-green-light absolute top-1/2 left-1/2 scale-75 -translate-x-2/3 -translate-y-1/3 "
          }
        />
      </div>
    </div>
  );
};
export default FoodItem;
