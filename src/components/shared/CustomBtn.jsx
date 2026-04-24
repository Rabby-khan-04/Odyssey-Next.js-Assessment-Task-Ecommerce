import { Button } from "../ui/button";
import HoverEffectText from "./HoverEffectText";

const CustomBtn = ({
  text,
  variant = "default",
  type = "",
  className = "",
}) => {
  return (
    <Button
      className={`${className} text-base xl:text-2xl p-3 xl:p-5 rounded-[12px] xl:rounded-[16px] h-auto font-extrabold cursor-pointer`}
      variant={variant}
    >
      <HoverEffectText text={text} />
    </Button>
  );
};

export default CustomBtn;
