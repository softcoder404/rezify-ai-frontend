import { Outlet } from "react-router-dom";
import DashboardNavBar from "./components/DashboardNavBar";

const DashboardLayout = () => {
  return (
    <main>
      <DashboardNavBar />
      <Outlet />
    </main>
  );
};

export default DashboardLayout;
