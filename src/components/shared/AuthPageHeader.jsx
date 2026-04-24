import SocialLogin from "../signin/SocialLogin";

const AuthPageHeader = ({ text }) => {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h1 className="uppercase text-[clamp(1.5rem,2vw,2.5rem)] font-semibold">
        {text}
      </h1>
      <SocialLogin />
    </div>
  );
};

export default AuthPageHeader;
