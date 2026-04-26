const CouponCard = (props) => {
  return (
    <div>
      <div className="border border-[#fff3] bg-[#fff3] pt-10 px-4 pb-7.5 backdrop-blur-[10px] rounded-[15px] mb-[2.5px] text-center">
        <span className="inline-block text-xs text-dark-gray font-medium px-5.5 py-1.5 bg-white rounded-full mb-5">
          {props.type}
        </span>

        <h3 className="text-2xl text-white font-semibold mb-4.5">
          {props.title}
        </h3>
        <p className="text-base text-white font-normal">{props.offer}</p>
      </div>
      <div className="py-7.5 px-4 rounded-[15px] bg-white text-center">
        <span className="text-dark-gray text-lg font-normal">Use code:</span>
        <h4 className="text-lg uppercase font-semibold text-dark-gray">
          {props.code}
        </h4>
      </div>
    </div>
  );
};

export default CouponCard;
