import { IconSpadeFilled } from "@tabler/icons-react";

const OfferMarquee = ({ offer = "" }) => {
  return (
    <div className="flex items-center text-sm font-medium text-white">
      <IconSpadeFilled className="inline-block mx-20" size={16} />
      <h2>{offer}</h2>
    </div>
  );
};

export default OfferMarquee;
