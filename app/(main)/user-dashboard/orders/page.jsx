import Table from "../_components/table";
import { orderTable } from "@/data";
const DashboardOrderPage = () => {
  return (
    <div className="p-10">
      <Table columns={orderTable.lablees} data={orderTable.data} />
    </div>
  );
};
export default DashboardOrderPage;
