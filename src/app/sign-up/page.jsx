import TitleSection from "@/components/shared/TitleSection";
import SignupSection from "@/components/signup/SignupSection";

const Signup = () => {
  return (
    <>
      <TitleSection path="/" label="Home" title="Account" />
      <SignupSection />
    </>
  );
};

export default Signup;
