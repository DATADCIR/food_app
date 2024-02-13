import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";
import Footer from "./_components/footer";
const mainPageLayout = ({ children }) => {
  return (
    <div className="flex flex-col dark:bg-body bg-[#F4F5F7]  overflow-x-hidden px-2 sm:px-8 -z-50">
      <Sidebar />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default mainPageLayout;
