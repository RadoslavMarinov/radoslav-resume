import Link from "next/link";
import { Burger } from "../Items/Burger/Burger";
import React from "react";

interface NavItem {
  label: string;
  link: string;
}

interface MainNavProps {}

const navItems: NavItem[] = [
  { label: "Home", link: "/" },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Mabout",
    link: "/about/mabout",
  },
];

export const MainNav = ({}: MainNavProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className={`relative bg-default font-bold  text-lg`}>
      <Burger open={open} setOpen={setOpen} />
      <div
        className={`
          flex flex-col md:flex-row justify-center items-center align-middle
          ${open ? "flex" : "hidden md:flex"}
        `}
      >
        {navItems.map((i, idx) => (
          <Link className={`w-full text-center`} href={i.link} key={idx}>
            {i.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};
