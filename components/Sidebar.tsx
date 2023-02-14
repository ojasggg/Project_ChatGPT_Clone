import { PlusIcon } from "@heroicons/react/24/solid";

const Sidebar = () => {
  return (
    <div className="h-screen w-[300px] flex flex-col bg-sidebar_primary text-white">
      <div className="flex-1 m-2">
        <div className="border w-full border-secondary rounded-xl text-white items-center flex justify-center space-x-2 p-2">
          <PlusIcon className="h-6 w-6" />
          <p>New Chat</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
