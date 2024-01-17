import Image from "next/image";
import Rating from "../../_components/Rating";
const FoodItem = ({ classes, item }) => {
  const { originalPrice, disCountedPrice, image, name, properties } = item;
  return (
    <div className={`relative flex flex-col gap-5 ${classes}`}>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="text-white text-2xl">{name}</div>
        <div className="flex gap-3">
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
    </div>
  );
};
export default FoodItem;
