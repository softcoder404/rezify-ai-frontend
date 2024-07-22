import { APP_NAME } from "@/shared/constants";
type Props = {
  className?: string | undefined;
};
const AppLogo = ({ className }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <img src="/logo.svg" alt="ai resume logo" width={45} height={45} />
      <h1
        className={`${className} "font-spacegrotesk font-bold text-xl text-black"`}
      >
        {APP_NAME}
      </h1>
    </div>
  );
};

export default AppLogo;
