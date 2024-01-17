import Image from "next/image";
import PageInspector from "../_components/PageInspector";
import Survey from "../_components/survey";
const ContactUsPage = () => {
  return (
    <>
      {" "}
      <div className="w-full flex flex-col md:flex-row bg-gray-light pt-12">
        <div className="flex flex-col justify-center  md:w-1/3 px-6 gap-5">
          <h1 className="text-2xl text-yellow-light">رستوران سان دي</h1>
          <p className="text-white text-xl flex flex-col gap-3">
            <span>اینجا میتونی با ما در ارتباط</span>
            <span>باشی و هر مشکل نظر یا سوالی راجب به کارمون</span>
            <span>دارین رو باهامون در میان بگذارین</span>
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
        title={"سان دي >> تماس با ما"}
        classes="text-yellow-light text-lg h-24 border-2 border-yellow-light my-10"
      />
      <Survey />
    </>
  );
};
export default ContactUsPage;
