"use client";

import { useAuth } from "@/context/AuthContext";
import AuthPageHeader from "../shared/AuthPageHeader";
import SignupForm from "./SignupForm";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { updateProfile } from "firebase/auth";
import { auth } from "@/lib/firebase.config";

const SignupSection = () => {
  const { emailPasswordSignUp } = useAuth();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const displayName = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    emailPasswordSignUp(email, password)
      .then(async () => {
        try {
          const profileData = {};

          if (displayName) profileData.displayName = displayName;

          if (Object.keys(profileData).length > 0) {
            await updateProfile(auth.currentUser, profileData);
          }

          toast.success("Successfully Signed Up!");
          router.push("/");
        } catch (err) {
          console.error(err);
        }
      })
      .catch((err) => {
        toast.error("sign up error: ", err.message);
      });
  };
  return (
    <section className="py-14 md:py-20">
      <div className="main-container">
        {/* Social Login */}
        <AuthPageHeader text="Signin account" />

        {/* Login Form */}
        <SignupForm onSubmit={handleSubmit} />
      </div>
    </section>
  );
};

export default SignupSection;
