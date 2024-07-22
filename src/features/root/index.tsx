import { ClerkProvider } from "@clerk/clerk-react";

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
import { Outlet, useNavigate } from "react-router-dom";
import { Toaster } from "sonner";

const RootLayout = () => {
  const navigate = useNavigate();
  return (
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
    >
      <main>
        <Outlet />
        <Toaster richColors={true} position="top-right" />
      </main>
    </ClerkProvider>
  );
};

export default RootLayout;
