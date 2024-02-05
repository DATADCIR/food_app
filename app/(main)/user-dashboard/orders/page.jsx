import Table from "../_components/table";
import { orderTable } from "@/data";
const DashboardOrderPage = () => {
  return (
    <div className="p-2 sm:p-10">
      <Table columns={orderTable.lablees} data={orderTable.data} perPage={5} />
    </div>
  );
};
export default DashboardOrderPage;
