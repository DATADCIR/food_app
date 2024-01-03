import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";
const mainPageLayout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Sidebar />
      <Navbar />
      {children}
    </div>
  );
};
export default mainPageLayout;
