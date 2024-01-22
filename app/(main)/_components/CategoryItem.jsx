import Image from "next/image";

const CategoryItem = ({ image, children }) => {
  return (
    <div className="w-48 h-52 flex justify-center items-center text-yellow-light relative overflow-hidden">
      <span className="z-10">{children}</span>
      <Image
        src={image}
        width={192}
        height={208}
        alt="food app"
        className="absolute w-full h-full top-0 left-0 brightness-25"
      />
    </div>
  );
};

export default CategoryItem;
