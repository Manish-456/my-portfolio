"use client";

import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";
import MobileNavbar from "./mobileNavbar";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import { links } from "@/utils/links";
import { ModeToggle } from "../themeSwitcher";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="sticky bg-opacity-50 backdrop-blur-sm  z-[9999] px-4 dark:bg-gray-900/[0.1]  inset-0 py-2">
      <nav className="flex   items-center justify-between ">
        <Link
          href={"/"}
          className={cn(
            "px-4  rounded-lg py-2 dark:bg-slate-400/[0.4] cursor-pointer",
            { invisible: pathname === "/" }
          )}
        >
          <Home className="h-6 w-6 " />
        </Link>

        <ul className="sm:flex hidden shadow-xl divide-x divide-slate-500 bg-white/[0.7]   dark:bg-slate-700/[0.6] items-center px-4 rounded-xl py-3 space-x-4">
          {links.map((item) => (
            <li key={item.href} className="flex flex-col pl-2">
              <Link
                className={cn(
                  `font-base text-sm hover:text-teal-400 ${
                    pathname === item.href ? "text-teal-400" : ""
                  }`
                )}
                href={item.href}
              >
                {item.label}
              </Link>
              <div
                className={cn(
                  `h-[1px] text-center duration-0 w-0 opacity-0 transition-all  dark:bg-gray-200 bg-black ${
                    pathname === item.href ? "block opacity-1 w-5 " : "hidden"
                  }`
                )}
              />
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          <div className="sm:hidden flex">
            <MobileNavbar navItems={links} />
          </div>
          <div className="  rounded-lg cursor-pointer">
            <ModeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
}
