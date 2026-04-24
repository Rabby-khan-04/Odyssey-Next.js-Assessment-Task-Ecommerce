"use client";

import { useAuth } from "@/context/AuthContext";
import AuthPageHeader from "../shared/AuthPageHeader";
import SigninForm from "./SigninForm";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const SigninSection = () => {
  const { loading, emailPasswordLogin } = useAuth();
  const router = useRouter();
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");

    emailPasswordLogin(email, password)
      .then(() => {
        toast.success("Successfully Logged In!!");
        router.push("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });

    form.reset();
  };

  return (
    <section className="py-14 md:py-20">
      <div className="main-container">
        {/* Social Login */}
        <AuthPageHeader text="Signin account" />

        {/* Login Form */}
        <SigninForm onSubmit={handleSubmitForm} loading={loading} />
      </div>
    </section>
  );
};

export default SigninSection;
