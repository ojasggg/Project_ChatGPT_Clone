"use client";

import { PlusIcon } from "@heroicons/react/24/solid";

const NewChat = () => {
  return (
    <div className="flex w-full cursor-pointer items-center justify-center space-x-2 rounded-xl border border-secondary p-2 text-white transition-all ease-out hover:bg-secondary/80 ">
      <PlusIcon className=" h-4 w-4 lg:h-6 lg:w-6" />
      <p className="text-[12px]">New Chat</p>
    </div>
  );
};

export default NewChat;
