"use client";
import { sign } from "crypto";
import { useSession, signOut } from "next-auth/react";
import NewChat from "./NewChat";

const Sidebar = () => {
  const { data: session } = useSession();
  return (
    <div className="flex h-screen w-[130px] flex-col bg-sidebar_primary text-white  lg:w-[300px]">
      <div className="m-2 flex-1">
        <NewChat />
      </div>
      <div
        className="justify-center mb-10 flex cursor-pointer items-center space-x-2"
        onClick={() => signOut()}
      >
        {session && (
          <img
            src={session.user?.image!}
            className="w-10 cursor-pointer rounded-full"
            alt="User Image"
          />
        )}
        <p className="text-[14px] text-white/60 lg:text-[16px] ">Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
