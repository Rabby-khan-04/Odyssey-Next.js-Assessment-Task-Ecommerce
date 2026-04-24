import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  IconPencil,
  IconPlus,
  IconTransitionRight,
  IconUserCircle,
} from "@tabler/icons-react";
import NavLink from "../shared/NavLink";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";
import Image from "next/image";
import userImg from "@/../public/user.png";

const UserDropdown = () => {
  const [open, setOpen] = useState(false);
  const { user, logoutAUser } = useAuth();

  const handleLogout = () => {
    logoutAUser()
      .then(() => {
        toast.success("Successfully logged out!");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <div className="relative w-10 h-10 rounded-full overflow-hidden cursor-pointer">
          <Image
            src={user && user?.photoURL ? user?.photoURL : userImg}
            className="object-cover"
            fill
            alt="avatar"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-auto" align="end">
        <DropdownMenuLabel>
          <p className="text-base mb-4 text-black font-semibold">
            Hello, {user?.displayName}
          </p>
        </DropdownMenuLabel>

        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => setOpen(false)}
            className="text-lg xl:text-2xl font-extrabold"
          >
            <NavLink path="/items/add" color="#cc1d31">
              Add Product
            </NavLink>
            <DropdownMenuShortcut>
              <IconPlus size={32} />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setOpen(false)}
            className="text-lg xl:text-2xl font-extrabold"
          >
            <NavLink path="/items/manage" color="#e0aa00">
              Manage Product
            </NavLink>
            <DropdownMenuShortcut>
              <IconPencil size={32} />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={handleLogout}
            className="text-lg xl:text-2xl font-extrabold"
          >
            Logout
            <DropdownMenuShortcut>
              <IconTransitionRight size={32} />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
