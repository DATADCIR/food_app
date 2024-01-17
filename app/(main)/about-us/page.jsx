import Image from "next/image";
import PageInspector from "../_components/PageInspector";
const AboutUsPage = () => {
  return (
    <>
      {" "}
      <div className="w-full flex flex-col md:flex-row bg-gray-light pt-12">
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
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
      <PageInspector
        title={"سان دي >> درباره ما"}
        classes="text-yellow-light text-lg h-24 border-2 border-yellow-light my-10"
      />
    </>
  );
};
export default AboutUsPage;
