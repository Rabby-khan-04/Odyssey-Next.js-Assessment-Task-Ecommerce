import bgImg from "@/../public/breadcrumb-img.jpg";
import Image from "next/image";
import Link from "next/link";

const TitleSection = (props) => {
  return (
    <section className="relative h-[clamp(160px,20vh,200px)]">
      <Image src={bgImg} alt="" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/40" />
      <div className="main-container text-white text-center absolute left-0 right-0 bottom-1/2 translate-y-1/2">
        <p className="text-base font-normal uppercase">
          <Link href={props.path}>{props.label}</Link>
          <span> - </span>
          <span>{props.title}</span>
        </p>
        <h2 className="text-[clamp(1.5rem,2.2vw,3rem)] font-bold mt-2">
          {props.title}
        </h2>
      </div>
    </section>
  );
};

export default TitleSection;
