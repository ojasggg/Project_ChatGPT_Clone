import { DocumentData } from "firebase/firestore";

type Props = {
  message: DocumentData;
  scrollRef: React.LegacyRef<HTMLDivElement>;
};

const Message = ({ message, scrollRef }: Props) => {
  const isChatGPT = message.user.name === "ChatGPT";
  return (
    <div
      className={`w-full py-5 text-white ${isChatGPT && "bg-[#434654]"}`}
      ref={scrollRef}
    >
      <div className="mx-auto flex max-w-2xl space-x-5 px-10">
        <img src={message?.user?.avatar} alt="" className="h-8 w-8" />
        <p className="pt-1 text-sm">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
