"use client";

import { useCollection } from "react-firebase-hooks/firestore";
import { useSession, signOut } from "next-auth/react";
import NewChat from "./NewChat";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";

const Sidebar = () => {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );
  return (
    <div className="flex h-screen w-[130px] flex-col bg-sidebar_primary text-white  lg:w-[300px]">
      <div className="m-2 flex flex-1 flex-col space-y-2">
        <NewChat />

        {chats?.docs.map((chat, index) => (
          <ChatRow key={chat.id} id={chat.id} />
        ))}
      </div>

      <div
        className="mb-5 flex cursor-pointer items-center justify-center space-x-2"
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
