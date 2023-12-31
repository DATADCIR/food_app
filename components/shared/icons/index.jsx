import DownIcon from "@/components/ui/icons/Down";
import UpIcon from "@/components/ui/icons/Up";
import SearchIcon from "@/components/ui/icons/Search";
import UserIcon from "@/components/ui/icons/User";
import StoreIcon from "@/components/ui/icons/Store";
import MenuIcon from "@/components/ui/icons/Menu";
import CallIcon from "@/components/ui/icons/Call";
import MoonIcon from "@/components/ui/icons/Moon";
import SunIcon from "@/components/ui/icons/Sun";
const Icons = ({ name, classes }) => {
  let DynamicComponent;

  switch (name) {
    case "Down":
      DynamicComponent = DownIcon;
      break;
    case "Up":
      DynamicComponent = UpIcon;
      break;
    case "Search":
      DynamicComponent = SearchIcon;
      break;
    case "User":
      DynamicComponent = UserIcon;
      break;
    case "Store":
      DynamicComponent = StoreIcon;
      break;
    case "Menu":
      DynamicComponent = MenuIcon;
      break;
    case "Call":
      DynamicComponent = CallIcon;
      break;
    case "Moon":
      DynamicComponent = MoonIcon;
      break;
    case "Sun":
      DynamicComponent = SunIcon;
      break;
    default:
      DynamicComponent = null;
  }

  return (
    <div className={classes}>
      <DynamicComponent />
    </div>
  );
};
export default Icons;
