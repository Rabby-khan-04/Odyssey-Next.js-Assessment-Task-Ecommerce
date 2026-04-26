import aboutImg1 from "@/../public/team-1.webp";
import aboutImg2 from "@/../public/team-2.webp";
import aboutImg3 from "@/../public/team-3.webp";
import aboutImg4 from "@/../public/team-4.webp";
import SectionTitle from "../shared/SectionTitle";
import TeamCard from "./TeamCard";

const TeamSection = () => {
  const teamInfo = [
    {
      name: "Harvey jones",
      pos: "Ceo & founder",
      img: aboutImg1,
    },
    {
      name: "mory Orlando",
      pos: "Marketing",
      img: aboutImg2,
    },
    {
      name: "Harlie puth",
      pos: "Designer & model",
      img: aboutImg3,
    },
    {
      name: "Tristin Chineze",
      pos: "Distribution",
      img: aboutImg4,
    },
  ];
  return (
    <section className="pb-14 md:pb-20">
      <div className="main-container">
        <SectionTitle title="Our Team" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7.5">
          {teamInfo.map((team) => (
            <TeamCard key={team.name} {...team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
