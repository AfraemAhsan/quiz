import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import Div from "elements/Div";

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  return (
    <Popover className="relative bg-white">
      <Div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <Div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="text-4xl font-bold">
              <b className="text-primary">Guess</b> Quizz
            </Link>
          </Div>

          <Div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0 gap-5">
            <Link
              to="/"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              to="/statistics"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Statistics
            </Link>
            <Link
              to="/blogs"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Blog
            </Link>
          </Div>
        </Div>
      </Div>
    </Popover>
  );
};
export default Header;
