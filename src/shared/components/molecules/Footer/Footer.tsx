import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center gap-2 bg-black px-[15rem] py-10 text-zinc-500">
      <div className="flex w-full gap-5 text-2xl">
        <a
          href="https://github.com/jakefernandez102"
          target={"_blank"}
          rel={"noreferrer noopener"}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jake-fernandez-brizuela-73572222a/"
          target={"_blank"}
          rel={"noreferrer noopener"}
        >
          <FaLinkedinIn />
        </a>
      </div>
      <div className="flex w-full flex-row justify-between gap-2">
        <div className="flex flex-col gap-2">
          <p className="font-bold text-zinc-400">Company</p>
          <div className="flex flex-col gap-2">
            <a href="#" className="group relative transition-all duration-200">
              About Us
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="group relative transition-all duration-200">
              Careers
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="group relative transition-all duration-200">
              Investor Relations
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="group relative transition-all duration-200">
              Terms of Use
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="group relative transition-all duration-200">
              Privacy
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold text-zinc-400">Support</p>
          <div className="flex flex-col gap-2">
            <a href="#" className="group relative transition-all duration-200">
              Help Center
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="group relative transition-all duration-200">
              Media Center
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="group relative transition-all duration-200">
              Corporate Information
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="group relative transition-all duration-200">
              Contact Us
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold text-zinc-400">Account</p>
          <div className="flex flex-col gap-2">
            <a href="#" className="group relative transition-all duration-200">
              Sign In
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="group relative transition-all duration-200">
              Sign Up
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="group relative transition-all duration-200">
              Redeem Gift Card
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="group relative transition-all duration-200">
              Buy Gift Cards
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="group relative transition-all duration-200">
              Ways to Watch
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold text-zinc-400">Legal</p>
          <div className="flex flex-col gap-2">
            <a href="#" className="group relative transition-all duration-200">
              Legal Notices
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="group relative transition-all duration-200">
              Privacy
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="group relative transition-all duration-200">
              Terms of Use
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="group relative transition-all duration-200">
              Corporate Information
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="group relative transition-all duration-200">
              Compliance
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>
      <div>
        <p>
          ©{new Date(new Date()).getFullYear()} JakeFlix. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
