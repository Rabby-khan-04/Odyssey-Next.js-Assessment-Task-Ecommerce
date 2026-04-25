import {
  IconMapPin,
  IconRotateClockwise,
  IconCurrencyDollar,
} from "@tabler/icons-react";

const ServiceBlock = () => {
  const services = [
    {
      title: "Order tracking",
      icon: IconMapPin,
    },
    {
      title: "90 days return",
      icon: IconRotateClockwise,
    },
    {
      title: "Money guarantee",
      icon: IconCurrencyDollar,
    },
  ];

  return (
    <div className="">
      <ul className="grid md:grid-cols-3 gap-4 p-7 border border-border rounded-[10px]">
        {services.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.title}>
              <div className="flex flex-col cursor-pointer items-center gap-3 group">
                <Icon
                  size={22}
                  stroke={1.5}
                  className="transition-transform duration-300 group-hover:scale-x-[-1]"
                />

                <div className="">
                  <h6 className="text-base font-medium mr-0 text-center">
                    {item.title}
                  </h6>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ServiceBlock;
