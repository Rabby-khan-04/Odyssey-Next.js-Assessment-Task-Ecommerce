import Link from "next/link";
import { usePathname } from "next/navigation";
import HoverEffectText from "./HoverEffectText";

const NavLink = ({ path, color, children }) => {
  const pathname = usePathname();

  const isActive = pathname === path;
  return (
    <Link
      href={path}
      style={{ "--item-color": color }}
      className={
        isActive
          ? `text-(--item-color)`
          : `text-secondary duration-300 hover:text-(--item-color)`
      }
    >
      <HoverEffectText text={children} />
    </Link>
  );
};

export default NavLink;
