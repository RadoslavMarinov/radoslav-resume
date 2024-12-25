import Link from "next/link";
import React from "react";

interface NavLinkProps {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  onClick,
  className,
}) => {
  return (
    <Link onClick={onClick} className={`w-full text-center`} href={href}>
      {label}
    </Link>
  );
};

export default NavLink;
