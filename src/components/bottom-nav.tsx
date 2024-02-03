"use client";

import Link from "next/link";
import HomeIcon from "./icons/home-icon";
import HourglassIcon from "./icons/hourglass-icon";
import UserCircleIcon from "./icons/user-circle-icon";
import { NavigationProps } from "@/utils/types";
import { usePathname } from "next/navigation";

const menus: NavigationProps[] = [
  {
    path: "/",
    label: "home",
    icon: <HomeIcon className="w-6" />,
  },
  {
    path: "/history",
    label: "history",
    icon: <HourglassIcon className="w-6" />,
  },
  {
    path: "/profile",
    label: "profile",
    icon: <UserCircleIcon className="w-6" />,
  },
];

function BottomNav() {
  const currentPath = usePathname();

  return (
    <div className="fixed bottom-0 w-full max-w-[inherit] p-5 text-xs font-semibold text-white">
      <nav className="flex w-full justify-evenly overflow-hidden rounded-full bg-red-700 shadow">
        {menus.map(({ icon, label, path }, index) => {
          return (
            <Link
              key={index}
              href={path}
              className={`flex w-1/3 flex-col items-center rounded-full p-1 capitalize ${path === currentPath ? "bg-red-800" : "text-red-200"}`}
            >
              {icon}
              <p>{label}</p>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default BottomNav;
