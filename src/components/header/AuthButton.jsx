import Link from "next/link";
import { Button } from "../ui/button";
import HoverEffectText from "../shared/HoverEffectText";
import CustomBtn from "../shared/CustomBtn";

const AuthButton = () => {
  return (
    <div className={`hidden lg:flex items-center gap-4 xl:gap-6 justify-end`}>
      <Link href="/sign-in">
        <CustomBtn text="Sign In" />
      </Link>
      <Link href="/sign-up">
        <CustomBtn text="Sign Up" variant="secondary" />
      </Link>
    </div>
  );
};

export default AuthButton;
