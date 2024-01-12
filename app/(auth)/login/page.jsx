import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="bg-yellow-400 w-2/6 relative group">
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 z-10">
          <Image
            src="/images/restaurant-food_2.png"
            alt="food"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="w-2/3 flex justify-center items-center relative">
        <div className="w-1/2 h-2/3 bg-white  rounded-2xl flex flex-col gap-5  px-28 py-20 opacity-65 ">
          <p className="text-black text-4xl font-bold text-center"> ورود</p>
          <input
            placeholder="نام کاربری"
            className="px-2 py-3 rounded-full bg-white bg-opacity-100 border border-yellow-400 focus:border-yellow-400 outline-0 text-black opacity-100 z-10"
          />
          <input
            placeholder="رمز عبور"
            className="px-2 py-3 rounded-full bg-white border border-yellow-400 focus:border-yellow-400 outline-0 text-black"
          />
          <button className="text-white bg-yellow-400 py-3 rounded-full opacity-100 border">
            ورود
          </button>
        </div>
      </div>
      <div className="absolute w-full h-full bg-[url('/images/CafeReconcile.png')] brightness-25 -z-10 top-0 left-0"></div>
    </div>
  );
};

export default LoginPage;
