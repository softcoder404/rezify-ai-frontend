import AppLogo from "@/components/custom/AppLogo";
import { UserButton } from "@clerk/clerk-react";

const DashboardNavBar = () => {
  return (
    <div className="bg-white shadow-lg flex w-full py-4 justify-between items-center px-10">
      <AppLogo />
      <div className="flex gap-4 items-center">
        <div className="px-6 py-2 rounded-lg border-gray-300 border bg-white text-center max-sm:hidden">
          <p className="text-sm font-inter font-normal text-gray1 ">
            Dashboard
          </p>
        </div>

        <UserButton />
      </div>
    </div>
  );
};

export default DashboardNavBar;
