import { PlusIcon } from "@heroicons/react/24/solid";
import NewChat from "./NewChat";

const Sidebar = () => {
  return (
    <div className="flex h-screen w-[130px] flex-col bg-sidebar_primary text-white  lg:w-[300px]">
      <div className="m-2 flex-1">
        <NewChat />
      </div>
    </div>
  );
};

export default Sidebar;
