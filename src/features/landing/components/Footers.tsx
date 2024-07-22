import footerBgImage from "@/assets/images/footer_bg.png";
import { APP_NAME } from "@/shared/constants";

import youtubeIcon from "@/assets/icons/youtube_icon.svg";
import twitterIcon from "@/assets/icons/twitter_icon.svg";
import linkedInIcon from "@/assets/icons/linkedin_icon.svg";

type Props = {
  onCreateResume: () => void;
};
const Footers = ({ onCreateResume }: Props) => {
  return (
    <footer className="w-full">
      {/* Top Black Container */}
      <div className="relative w-full h-[420px]">
        {/* Background image */}
        <div className="absolute inset-0 w-5/6 mx-auto ">
          <img
            src={footerBgImage}
            alt="Resume background"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-85" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center font-spacegrotesk lg:w-2/5 ">
            Use {APP_NAME} and land your dream job
          </h1>
          <button
            className="bg-primary hover:bg-blue-600 text-white font-bold py-4 px-8 mt-6"
            onClick={onCreateResume}
          >
            Create Resume
          </button>
          <p className="mt-2 text-[12px] text-gray-100">
            No registration required
          </p>
        </div>
      </div>

      {/* Footer Content */}
      <div className="w-full bg-gray-200">
        <div className="w-5/6 mx-auto py-12">
          {/* Social Links */}
          <div className="flex gap-6 items-center">
            <p className="text-lg text-gray2 font-inter font-normal">
              Follow Us
            </p>
            <ul className="flex gap-4 cursor-pointer">
              <li>
                <img src={linkedInIcon} alt="linkedin icon" />
              </li>
              <li>
                <img src={youtubeIcon} alt="linkedin icon" />
              </li>
              <li>
                <img src={twitterIcon} alt="linkedin icon" />
              </li>
            </ul>
          </div>
          {/* Divider Line */}
          <div className=" h-[.08rem] w-full bg-gray4 my-8" />
          {/* Bottom Content */}
          <div className="justify-between items-center md:flex">
            <div className="flex gap-4 items-center max-md:mb-4">
              <h1 className="font-bold font-spacegrotesk text-lg text-gray2">
                {APP_NAME}
              </h1>
              <a
                href="https://google.com"
                className="text-[12px] hover:text-blue-500"
              >
                Privacy Policy
              </a>
              <a
                href="https://google.com"
                className="text-[12px] hover:text-blue-500"
              >
                Terms & Conditions
              </a>
            </div>

            <div>
              <p className="text-[12px]">&copy; Copyright 2024, {APP_NAME}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
