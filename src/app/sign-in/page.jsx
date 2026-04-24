import TitleSection from "@/components/shared/TitleSection";
import SigninSection from "@/components/signin/SigninSection";

const Signin = () => {
  return (
    <>
      <TitleSection path="/" label="Home" title="Account" />
      <SigninSection />
    </>
  );
};

export default Signin;
