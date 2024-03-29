import Image from "next/image";
const PageInspector = ({ title, classes }) => {
  return (
    <div className={`relative overflow-hidden  ${classes}`}>
      <div className="absolute top-0 left-0 w-full h-full z-10  flex items-center">
        <span className="mr-8 ">{title}</span>
      </div>
      <Image
        alt="food"
        src="/images/Rectangle 33.png"
        width={900}
        height={90}
        className="w-full h-full absolute top-0 left-0 z-0 dark:brightness-5 brightness-25"
      />
    </div>
  );
};
export default PageInspector;
