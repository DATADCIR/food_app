import Checkbox from "@/components/ui/forms/checkbox";
const CheckboxGroup = ({ items, classes }) => {
  return (
    <div className="flex flex-col">
      {items.map((item) => {
        <div key={item.label}>
          <Checkbox>{item.label}</Checkbox>
        </div>;
      })}
    </div>
  );
};
export default CheckboxGroup;
