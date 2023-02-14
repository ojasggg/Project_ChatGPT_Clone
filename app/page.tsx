import {
  ArrowRightIcon,
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

const homepageItems = [
  {
    title: "Examples",
    icon: SunIcon,
    descriptions: [
      {
        questions: "Explain quantum computing in simple terms",
        arrow: true,
      },
      {
        questions: "Got any creative ideas for a 10 year old's birthday?",
        arrow: true,
      },
      {
        questions: "How do I make an HTTP request in Javascript?",
        arrow: true,
      },
    ],
  },
  {
    title: "Capabilities",
    icon: BoltIcon,
    descriptions: [
      {
        questions: "Remembers what user said earlier in the conversation",
        arrow: false,
      },
      {
        questions: "Allows user to provide follow-up corrections",
        arrow: false,
      },
      {
        questions: "Trained to decline inappropriate requests",
        arrow: false,
      },
    ],
  },
  {
    title: "Limitations",
    icon: ExclamationTriangleIcon,
    descriptions: [
      {
        questions: "May occasionally generate incorrect information",
        arrow: false,
      },
      {
        questions:
          "May occasionally produce harmful instructions or biased content",
        arrow: false,
      },
      {
        questions: "Limited knowledge of wold and events after 2021",
        arrow: false,
      },
    ],
  },
];

const HomePage = () => {
  return (
    <div className="flex h-screen flex-1 flex-col items-center justify-center text-white">
      <h2 className="text-4xl font-bold">ChatGPT</h2>
      <div className="mt-16 flex flex-col space-x-4 md:flex-row">
        {homepageItems.map((item, index) => (
          <div className="flex flex-col items-center space-y-4" key={index}>
            <div className="flex flex-col items-center justify-center space-y-4">
              {item.icon && <item.icon className="h-6 w-6" />}
              <p className="text-xl">{item.title}</p>
            </div>
            {item.descriptions.map((desc, index) => (
              <div className="rounded-md bg-input_primary p-4" key={index}>
                <p className="w-[240px] text-sm leading-normal">
                  {desc.questions}
                  {desc.arrow && (
                    <ArrowRightIcon className="ml-2 inline h-4 w-4" />
                  )}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
