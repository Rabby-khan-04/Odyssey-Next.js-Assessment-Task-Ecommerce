import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { IconMenu2Filled, IconXFilled } from "@tabler/icons-react";
import NavLink from "../shared/NavLink";
import { navLinks } from "@/constants/navLinks";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  return (
    <Drawer open={open} onOpenChange={setOpen} direction="right">
      <DrawerTrigger className="cursor-pointer">
        <IconMenu2Filled size="24" />
      </DrawerTrigger>
      <DrawerContent className="w-[85%]! max-w-none! flex items-center justify-center">
        <DrawerHeader className="flex justify-end">
          <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>
          <DrawerClose className="absolute top-4 right-4 z-50 p-2 rounded-md hover:bg-muted cursor-pointer">
            <IconXFilled />
          </DrawerClose>
        </DrawerHeader>

        <ul className="flex flex-col justify-center items-center gap-5 mb-5 font-extrabold">
          {navLinks.map((item) => (
            <li
              key={item.path}
              className="text-5xl md:text-7xl"
              onClick={() => setOpen(false)}
            >
              <NavLink path={item.path} color={item.color}>
                {item.label}
              </NavLink>
            </li>
          ))}

          {user ? null : (
            <>
              <li
                key="sign-up"
                className="text-5xl md:text-7xl"
                onClick={() => setOpen(false)}
              >
                <NavLink path="/sign-up" color="#cc1d31">
                  Sign Up
                </NavLink>
              </li>
              <li
                key="sign-in"
                className="text-5xl md:text-7xl"
                onClick={() => setOpen(false)}
              >
                <NavLink path="/sign-in" color="#e0aa00">
                  Sign In
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileMenu;
