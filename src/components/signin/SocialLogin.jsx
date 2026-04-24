"use client";

import { useAuth } from "@/context/AuthContext";
import { IconBrandGoogleFilled } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";
import OrDivider from "./OrDivider";
import { useState } from "react";

const SocialLogin = () => {
  const [socialLoginLoading, setSocialLoginLoding] = useState(false);
  const router = useRouter();
  const { googleLogin } = useAuth();
  const handleGoogleLogin = () => {
    setSocialLoginLoding(true);
    googleLogin()
      .then(() => {
        toast.success("Successfully Loggin");
        router.push("/");
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setSocialLoginLoding(false);
      });
  };
  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        disabled={socialLoginLoading}
        className="w-auto mx-auto cursor-pointer flex items-center justify-center gap-3 px-5 py-3 border border-border rounded-lg bg-[#5433eb] text-white hover:bg-secondary transition duration-200 disabled:opacity-50"
      >
        <IconBrandGoogleFilled size={20} />
        <span className="font-medium text-sm md:text-base">
          {socialLoginLoading ? "Signing in..." : "Continue with Google"}
        </span>
      </button>
      <OrDivider />
    </div>
  );
};

export default SocialLogin;
