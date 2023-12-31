import DownIcon from "@/components/ui/icons/Down";
import UpIcon from "@/components/ui/icons/Up";
const Icons = ({ name }) => {
  let DynamicComponent;

  switch (name) {
    case "Down":
      DynamicComponent = DownIcon;
      break;
    case "Up":
      DynamicComponent = UpIcon;
      break;
    default:
      DynamicComponent = null;
  }

  return <DynamicComponent />;
};
export default Icons;
