import SignInPage from "@/features/auth/SignIn";
import SignUpPage from "@/features/auth/SignUp";
import DashboardLayout from "@/features/dashboard";
import Dashboard from "@/features/dashboard/Dashboard";
import EditResume from "@/features/dashboard/resume/[resumeId]/edit";
import LandingPage from "@/features/landing";
import RootLayout from "@/features/root";
import { createBrowserRouter } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },

      {
        path: "/signin",
        element: <SignInPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        element: <DashboardLayout />,
        children: [
          { path: "/dashboard", element: <Dashboard /> },
          { path: "/dashboard/resume/:resumeId/edit", element: <EditResume /> },
        ],
      },
    ],
  },
]);

export default appRouter;
