import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";
import Footer from "./_components/footer";
const mainPageLayout = ({ children }) => {
  return (
    <div className="flex flex-col bg-body overflow-x-hidden px-8 -z-50">
      <Sidebar />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default mainPageLayout;
