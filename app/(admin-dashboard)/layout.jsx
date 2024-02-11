import Sidebar from "./_components/sidebar.jsx";
import Navbar from "./_components/navbar.jsx";
const AdminDashboardLayout = ({ children }) => {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="w-full bg-AdminBlack-100 p-5">{children}</div>
      </div>
    </div>
  );
};
export default AdminDashboardLayout;
