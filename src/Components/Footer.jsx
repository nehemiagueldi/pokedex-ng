import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex items-center justify-around flex-wrap bg-gradient-to-tl from-paginationp from-10% to-btnviewh to-80% p-6">
      <div className="flex items-center ">
        <p className="text-whitet text-xl font-bold">
          &copy; {currentYear} | Made with ❤️ by{" "}
          <Link to={"https://nehemiagueldi.github.io/"} target="_blank" className="font-bold text-github hover:text-ohover duration-300 tracking-tight">
            Nehemia Gueldi
          </Link>
          , use{" "}
          <Link to={"https://react.dev/"} target="_blank" className="font-bold text-react hover:text-ohover duration-300 tracking-tight">
            React JS
          </Link>{" "}
          and{" "}
          <Link to={"https://tailwindcss.com/"} target="_blank" className="font-bold text-tailwind hover:text-ohover duration-300 tracking-tight">
            Tailwind CSS
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
