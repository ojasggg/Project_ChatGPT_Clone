import type { NextApiRequest, NextApiResponse } from "next";
import query from "../../lib/queryApi";
import admin from "firebase-admin";
import { adminDb } from "../../firebaseAdmin";
import ChatGPT_logo from "../../public/chatgpt-seeklogo.com.svg";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;

  if (!prompt) {
    res.status(400).json({ answer: "Please provide a prompt!" });
    return;
  }
  if (!chatId) {
    res.status(400).json({ answer: "Please provide a Valid Chat Id!" });
    return;
  }

  const response = await query(prompt, model);
  const message: Message = {
    text: response || "ChatGPT was unable to answer.",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "ChatGPT",
      name: "ChatGPT",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/800px-ChatGPT_logo.svg.png",
    },
  };

  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

  res.status(200).json({ answer: message.text });
}
