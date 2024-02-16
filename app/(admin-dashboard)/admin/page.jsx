import Title from "../_components/title";
const AdminDashboardPage = () => {
  return (
    <div className="w-full h-full bg-blacl-dark flex flex-col lg:flex-row gap-5 p-5">
      <div className="lg:w-2/5 flex flex-col gap-5 bg-gray-light  rounded-2xl py-3 px-2">
        <Title
          tag={"پرفروش ترین ها"}
          classes={"text-yellow-light gap-1 text-sm sm:text-base"}
        />
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            className="w-full flex flex-col gap-4 bg-AdminBlack-100 rounded-full"
          >
            <div className="w-full flex justify-between items-center bg-black-100 px-2 py-1 rounded-full">
              <div className="flex gap-2 sm:gap-4 items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 flex justify-center items-center rounded-full border border-yellow-light text-yellow-light bg-gray-light">
                  {index + 1}
                </div>
                <p className="text-yellow-light text-xs sm:text-sm">
                  خوراک ماهی کپور
                </p>
              </div>
              <div className="w-10 h-6 text-white text-xs sm:text-sm flex justify-center items-center rounded-full bg-green-light">
                520
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:w-3/5 flex flex-col gap-10">
        <div className="w-full flex glex-col gap-5 rounded-2xl bg-gray-light px-3 py-4">
          <Title tag={"نمودار رشد قیمت"} classes={"text-yellow-light gap-1"} />
        </div>
        <div className="w-full flex flex-col gap-8 rounded-2xl bg-gray-light px-3 py-4">
          <Title tag={"سود شعبات"} classes={"text-yellow-light gap-1"} />
          {[...Array(3)].map((_, index) => (
            <div className="flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-5">
              <div
                key={index}
                className="w-full h-12 flex flex-col gap-2 sm:gap-4"
              >
                <div className="w-full flex justify-between items-center bg-AdminBlack-100 px-2 py-1 rounded-full">
                  <div className="flex gap-2 sm:gap-4 items-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 flex justify-center items-center rounded-full border border-yellow-light text-yellow-light bg-gray-light">
                      {index + 1}
                    </div>
                    <p className="text-yellow-light text-xs sm:text-sm">
                      شعبه یک تهران
                    </p>
                  </div>
                  <div className="px-2 h-6 text-white text-xs sm:text-sm flex justify-center items-center rounded-full bg-green-light">
                    520 در ماه
                  </div>
                </div>
              </div>
              <div className="-translate-y-1 mr-auto">
                <button className="bg-green-light w-24 h-8 sm:h-10 rounded-full text-xs text-white">
                  10 درصد رشد
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AdminDashboardPage;
