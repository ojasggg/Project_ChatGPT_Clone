"use client";

import { toast } from "react-hot-toast";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { db } from "../firebase";
import useSWR from "swr";
import ModelSelection from "./ModelSelection";

type Props = {
  chatId: string;
};

const ChatInput = ({ chatId }: Props) => {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();

  //TODO: get model input
  const { data: model } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;
    const input = prompt.trim();
    setPrompt("");
    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name={$session?.user?.name}`,
      },
    };

    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      message
    );

    const notification = toast.loading("ChatGPT Clone is Thinking....");

    await fetch("/api/askQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
      }),
    }).then(() => {
      toast.success("ChatCPT Clone has Responded!", {
        id: notification,
      });
    });
  };
  return (
    <div>
      <form
        className="m-4 flex items-center rounded-lg bg-secondary"
        onSubmit={sendMessage}
      >
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          disabled={!session}
          placeholder="Enter your message here"
          className="w-full border-none bg-transparent p-3 text-white outline-none placeholder:text-[14px]"
        />
        <button type="submit" disabled={!prompt || !session}>
          <PaperAirplaneIcon className="mr-4 h-6 w-6 cursor-pointer text-white/40" />
        </button>
      </form>
      <div className="mx-4 my-2 md:hidden">
        <ModelSelection />
      </div>
    </div>
  );
};

export default ChatInput;
