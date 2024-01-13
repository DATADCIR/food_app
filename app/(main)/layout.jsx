import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";
const mainPageLayout = ({ children }) => {
  return (
    <div className="flex flex-col bg-body overflow-x-hidden -z-50">
      <Sidebar />
      <Navbar />
      {children}
    </div>
  );
};
export default mainPageLayout;
