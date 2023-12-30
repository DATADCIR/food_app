import Navbar from "./_components/navbar";

const mainPageLayout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      {children}
    </div>
  );
};
export default mainPageLayout;
