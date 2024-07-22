import AnchorLink from "react-anchor-link-smooth-scroll-ts";
import { Button } from "../../../components/ui/button";
import menuIcon from "@/assets/icons/menu.svg";
import closeIcon from "@/assets/icons/close.svg";

import { useState } from "react";
import { APP_NAME } from "@/shared/constants";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import AppLogo from "@/components/custom/AppLogo";

type Props = {
  onGetStarted: () => void;
  isLoading: boolean;
};

const NavBar = ({ onGetStarted, isLoading }: Props) => {
  const linkStyle = `hover:text-blue-400 text-gray-500`;
  const sideBarStyle = `fixed bottom-0 top-0 w-[300px] bg-white z-40 drop-shadow-md animate-in duration-500 py-16 px-4`;
  const [hideSideBar, setHideSideBar] = useState<boolean>(true);
  const toggleSideBar = () => {
    setHideSideBar((state) => !state);
  };
  return (
    <header>
      <nav className=" w-full fixed top-0 py-6 shadow-md z-30 bg-white">
        <div className=" w-5/6 mx-auto flex justify-between items-center">
          {/* Logo And Title */}
          <div className="flex items-center gap-4 ">
            <AppLogo />
          </div>

          {/*  Features */}
          <div className="max-md:hidden flex-1">
            <ul className="flex justify-center gap-4 text-sm">
              <li className={`${linkStyle}`}>
                <AnchorLink href="#features">Features</AnchorLink>
              </li>
              <li className={`${linkStyle}`}>
                <AnchorLink href="#templates">Templates</AnchorLink>
              </li>
              <li className={`${linkStyle}`}>
                <AnchorLink href="#testimonials">Testimonials</AnchorLink>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex">
            <Button
              disabled={isLoading}
              className=" max-md:hidden"
              onClick={onGetStarted}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}{" "}
              {isLoading ? "Loading..." : " Get Started"}
            </Button>
            <img
              className="md:hidden"
              src={menuIcon}
              alt="menu"
              height={24}
              width={24}
              onClick={toggleSideBar}
            />
          </div>
        </div>
      </nav>

      {/* Mobile SideBar */}
      <div
        className={`${sideBarStyle} ${
          hideSideBar ? "-right-[300px]" : "right-0 "
        } `}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="ai resume logo" width={32} height={32} />
            <h1 className="font-spacegrotesk font-bold text-sm text-black">
              {APP_NAME}
            </h1>
          </div>
          <img
            src={closeIcon}
            alt="close icon"
            height={32}
            width={32}
            onClick={toggleSideBar}
          />
        </div>
        {/* Features */}

        <ul className="mt-14 flex flex-col w-full justify-start items-center text-lg cursor-pointer gap-8">
          <li className={`${linkStyle}`}>
            <AnchorLink href="#features">Features</AnchorLink>
          </li>
          <li className={`${linkStyle}`}>
            <AnchorLink href="#templates">Templates</AnchorLink>
          </li>
          <li className={`${linkStyle}`}>
            <AnchorLink href="#testimonials">Testimonials</AnchorLink>
          </li>
        </ul>

        {/* Action Button */}
        <Link to={"/login"} className="mt-20 flex justify-center">
          <Button className="w-[200px] cursor-pointer" onClick={onGetStarted}>
            Get Started
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
