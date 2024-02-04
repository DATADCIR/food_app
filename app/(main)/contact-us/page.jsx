import Image from "next/image";
import PageInspector from "../_components/PageInspector";
import Survey from "../_components/survey";
const ContactUsPage = () => {
  return (
    <>
      {" "}
      <div className="w-full flex flex-col md:flex-row dark:bg-gray-light bg-[#E3E3E4] pt-12">
        <div className="flex flex-col justify-center  md:w-1/3 px-6 gap-5">
          <h1 className="text-2xl text-yellow-light">رستوران سان دي</h1>
          <p className="text-[#232323] dark:text-white text-xl flex flex-col gap-3">
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
            className="scale-75 sm:scale-100  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
      <PageInspector
        title={"سان دي >> تماس با ما"}
        classes="text-yellow-light text-lg h-24 border-2 border-yellow-light my-10 rounded-xl"
      />
      <div className="flex flex-col md:flex-row items-center gap-5 dark:bg-gray-light bg-[#E3E3E4] rounded-lg p-5 md:p-10 mb-10">
        <div className="md:w-3/5 flex flex-col gap-5 p-10 sm:p-20">
          <h1 className="text-yellow-light text-xl">فرم ارسال نظر</h1>
          <p className="text-[#232323] dark:text-white text-lg">
            شما میتوانید از این قسمت نظر انتقادات و هر مسئله ای را که صلاح
            میدانید با ما در ارتباط بگذارید.
          </p>
          <p className="text-[#232323] dark:text-white text-lg">
            {" "}
            توجه داشته باشید که میتوانید به غذاهای مورد علاقه تان نیز رای بدهید
            .
          </p>
        </div>
        <div className="w-full md:w-2/5 flex flex-col gap-5">
          <input
            placeholder="ایمیل"
            className="w-full px-4 py-3 rounded-full bg-white border-yellow-light border-2 focus:border-yellow-light outline-0 text-black"
          />{" "}
          <input
            placeholder="ایمیل"
            type={"textarea"}
            className="w-full px-4 py-32 rounded-3xl bg-white border-yellow-light border-2 focus:border-yellow-light outline-0 text-black"
          />{" "}
          <button className="text-white  bg-yellow-light  py-5 rounded-full opacity-100 border text-xl">
            تایید
          </button>
        </div>
      </div>
      <div className="flex flex-col-reverse  gap-10 md:flex-row pt-20 pb-28 dark:bg-gray-light bg-[#E3E3E4]">
        <div className="w-[90%] md:w-1/2 lg:w-2/5 flex flex-col gap-3 border-2 border-yellow-light outline outline-20 dark:outline-body outline-white  outline-offset-0 p-3 dark:bg-body bg-[#fff]">
          <div className="flex gap-3">
            <div className="w-1/2 flex justify-center items-center dark:bg-white bg-[#E3E3E4] rounded-lg py-8 ">
              <Image
                alt="instagram"
                src="/images/Vector.png"
                width={80}
                height={80}
              />
            </div>
            <div className="w-1/2 flex justify-center items-center dark:bg-white bg-[#E3E3E4] rounded-lg py-8 ">
              <Image
                alt="instagram"
                src="/images/skill-icons_instagram.png"
                width={80}
                height={80}
              />
            </div>
          </div>
          <div className="flex gap-3">
            {" "}
            <div className="w-1/2 flex justify-center items-center dark:bg-white bg-[#E3E3E4] rounded-lg py-8 ">
              <Image
                alt="instagram"
                src="/images/skill-icons_gmail-light.png"
                width={80}
                height={80}
              />
            </div>
            <div className="w-1/2 flex justify-center items-center dark:bg-white bg-[#E3E3E4] rounded-lg py-8 ">
              <Image
                alt="instagram"
                src="/images/skill-icons_instagram.png"
                width={80}
                height={80}
              />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 lg:w-3/5 flex flex-col gap-5 justify-center text-lg text-[#232323] dark:text-white p-10 sm:p-20 text-justify">
          <p>
            علاوه بر ارسال نظرات شما میتوانید ما را در شبکه های اجتماعی دنبال
            کنید و با ما در ارتباط باشید.
          </p>
          <p>لینک شبکه های اجتماعی سان دی در روبرو امده است .</p>
          <p>امیدوارم موفق باشید .</p>
        </div>
      </div>
      <Survey />
    </>
  );
};
export default ContactUsPage;
