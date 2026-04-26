import Image from "next/image";

const ChooseCard = (props) => {
  return (
    <div className="group">
      <div className="overflow-hidden rounded-[10px]">
        <Image
          src={props.image}
          alt={props.title}
          className="w-full group-hover:scale-125 duration-300 ease-out"
        />
      </div>

      <div className="text-center py-7.5 px-2.5">
        <h3 className="text-2xl font-medium text-dark-gray mb-2.5">
          {props.title}
        </h3>
        <p className="text-light-gray">{props.description}</p>
      </div>
    </div>
  );
};

export default ChooseCard;
