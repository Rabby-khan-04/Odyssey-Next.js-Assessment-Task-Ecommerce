import Image from "next/image";

const TeamCard = (props) => {
  return (
    <div>
      <div className="overflow-hidden rounded-[10px]">
        <Image
          src={props.img}
          alt={props.name}
          className="w-full hover:scale-110 duration-300 ease-out"
        />
      </div>
      <div className="pt-6 text-center">
        <h4 className="text-lg font-medium text-dark-gray">{props.name}</h4>
        <p className="text-light-gray">{props.pos}</p>
      </div>
    </div>
  );
};

export default TeamCard;
