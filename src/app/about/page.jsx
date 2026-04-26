import AboutUs from "@/components/aboutPage/AboutUs";
import OurStorySection from "@/components/aboutPage/OurStorySection";
import TeamSection from "@/components/aboutPage/TeamSection";
import TitleSection from "@/components/shared/TitleSection";

const About = () => {
  return (
    <>
      <TitleSection path="/" label="Home" title="About us" />
      <OurStorySection />
      <AboutUs />
      <TeamSection />
    </>
  );
};

export default About;
