import { APP_NAME } from "@/shared/constants";
import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <div className="w-full h-screen">
      <div className="relative flex justify-center pt-20">
        <SignIn />
      </div>
      <div className="absolute bottom-0 right-0 left-0 flex justify-center py-4 bg-primary">
        <p className="text-white text-sm font-spacegrotesk">
          Welcome to {APP_NAME} resume builder. SignUp/SignIn to continue
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
