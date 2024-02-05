const UserDashboardPage = () => {
  return (
    <div className="p-5 sm:p-10 flex flex-col gap-8">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="sm:w-1/3 flex justify-center sm:justify-start">
          <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-xl bg-gray-100"></div>
        </div>
        <div className="w-2/3 flex flex-col md:flex-row justify-between py-5 gap-10">
          <div className="md:w-1/2 flex flex-col gap-10">
            <p>
              <sapn>نام : </sapn>
              <span>علی</span>
            </p>
            <p>
              <sapn>نام خانوادگی :</sapn>
              <span>الیاسی</span>
            </p>
            <p>
              <sapn>کد پستی :</sapn>
              <span>وارد نشده</span>
            </p>
            <p>
              <sapn>شهر :</sapn>
              <span>اصفهان</span>
            </p>
          </div>
          <div className="md:w-1/2 flex flex-col gap-10">
            <p>
              <sapn>تلفن :</sapn>
              <span>0911456258</span>
            </p>
            <p>
              <sapn>آدرس :</sapn>
              <span>وارد نشده</span>
            </p>
          </div>
        </div>
      </div>{" "}
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-2/3 h-16 rounded-xl text-white flex justify-center items-center bg-green-light px-2 py-1 md:py-0 ">
          <p className="text-center">
            جهت ارائه خدمات و تسریع در عملیات ثبت سفارشات اطلاعات خود را تکمیل
            نمایید.
          </p>
        </div>
        <button className="md:w-1/3 h-16 rounded-xl text-white flex justify-center items-center bg-green-light">
          تکمیل اطلاعات
        </button>
      </div>
    </div>
  );
};
export default UserDashboardPage;
