import Features from "@/features/landing/components/Features";
import Footers from "@/features/landing/components/Footers";
import NavBar from "@/features/landing/components/NavBar";
import Templates from "@/features/landing/components/Templates";
import Testimonies from "@/features/landing/components/Testimonies";
import { useAuth } from "@clerk/clerk-react";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const { isLoaded, isSignedIn } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const auth = useCallback(() => {
    if (isLoaded && isSignedIn) {
      navigate("/dashboard");
    }
  }, [isLoaded, isSignedIn, navigate]);

  const login = () => navigate("/signin");

  useEffect(() => {
    setIsLoading(isLoaded ? false : true);
    auth();
  }, [isLoaded, isSignedIn, auth]);

  return (
    <main>
      <NavBar onGetStarted={login} isLoading={isLoading} />
      <Features />
      <Templates />
      <Testimonies />
      <Footers onCreateResume={login} />
    </main>
  );
};

export default LandingPage;
