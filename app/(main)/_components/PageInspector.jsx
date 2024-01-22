import Image from "next/image";
const PageInspector = ({ title, classes }) => {
  return (
    <div className={`relative ${classes}`}>
      <div className="absolute top-0 left-0 w-full h-full bg-body opacity-70 flex items-center">
        <span className="mr-8">{title}</span>
      </div>
      <Image
        alt="food"
        src="/images/Rectangle 33.png"
        width={900}
        height={90}
        className="w-full h-full"
      />
    </div>
  );
};
export default PageInspector;
