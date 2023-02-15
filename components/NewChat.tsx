"use client";

import { PlusIcon } from "@heroicons/react/24/solid";
import {
  addDoc,
  collection,
  Firestore,
  serverTimestamp,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { db } from "../firebase";

const NewChat = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        userId: session?.user?.email!,
        createdAt: serverTimestamp(),
      }
    );
    router.push(`/chat/${doc.id}`);
  };
  return (
    <div
      className="flex w-full cursor-pointer items-center justify-center space-x-2 rounded-xl border border-secondary p-2 text-white transition-all ease-out hover:bg-secondary/80"
      onClick={createNewChat}
    >
      <PlusIcon className=" h-4 w-4 lg:h-6 lg:w-6" />
      <p className="text-[12px] lg:text-[16px]">New Chat</p>
    </div>
  );
};

export default NewChat;
