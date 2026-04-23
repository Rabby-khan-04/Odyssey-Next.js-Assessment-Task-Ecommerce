import Link from "next/link";
import { Button } from "../ui/button";
import HoverEffectText from "../shared/HoverEffectText";

const AuthButton = () => {
  return (
    <div className={`hidden lg:flex items-center gap-4 xl:gap-6 justify-end`}>
      <Link href="/sign-in">
        <Button className="text-base xl:text-2xl p-3 xl:p-5 rounded-[12px] xl:rounded-[24px] h-auto font-extrabold cursor-pointer">
          <HoverEffectText text="Sign In" />
        </Button>
      </Link>
      <Link href="/sign-up">
        <Button
          className="text-base xl:text-2xl p-3 xl:p-5 rounded-[12px] xl:rounded-[24px] h-auto font-extrabold cursor-pointer"
          variant="secondary"
        >
          <HoverEffectText text="Sign Up" />
        </Button>
      </Link>
    </div>
  );
};

export default AuthButton;
