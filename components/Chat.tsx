"use client";

import { useRef, useEffect } from "react";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Message from "./Message";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";

type Props = {
  chatId: string;
};

const Chat = ({ chatId }: Props) => {
  const scroll = useRef<HTMLDivElement>(null);
  const { data: session } = useSession();

  const [messages] = useCollection(
    session &&
      query(
        collection(
          db,
          "users",
          session?.user?.email!,
          "chats",
          chatId,
          "messages"
        ),
        orderBy("createdAt", "asc")
      )
  );

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <div className="flex flex-1 flex-col items-center overflow-y-auto">
      {messages?.empty && (
        <div className="mt-10 flex flex-col items-center text-white">
          <p className="lg:text-xl">Type a Prompt in below to get Started!</p>
          <ArrowDownCircleIcon className="mt-4 h-8 w-8 animate-bounce" />
        </div>
      )}
      {messages?.docs.map((message) => (
        <Message key={message.id} message={message.data()} scrollRef={scroll} />
      ))}
    </div>
  );
};

export default Chat;
