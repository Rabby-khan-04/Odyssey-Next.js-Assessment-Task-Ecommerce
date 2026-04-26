import { IconStar, IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";

const TestimonialCard = (props) => {
  function generateStars(rating) {
    const stars = [];
    let i = 1;
    while (i <= rating) {
      stars.push(<IconStarFilled size={14} key={i} />);
      i++;
    }

    while (i <= 5) {
      stars.push(<IconStar size={14} key={i} />);
      i++;
    }

    return stars;
  }
  return (
    <div className="py-7 px-12 bg-[#f6f6f6] cursor-pointer">
      <span className="text-[#ffb607] flex items-center justify-center gap-px">
        {generateStars(props.rating)}
      </span>
      <p className="text-center text-light-gray pt-5 mb-5">{props.review}</p>
      <div className="flex items-center justify-center">
        <Image
          src={props.image}
          alt={props.name}
          className="aspect-445/450 w-25 rounded-full"
        />
      </div>
      <div className="text-center">
        <h3 className="text-xl font-medium text-dark-gray pt-6">
          {props?.name}
        </h3>
      </div>
    </div>
  );
};

export default TestimonialCard;
