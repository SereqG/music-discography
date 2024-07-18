"use client";

import Link from "next/link";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Navbar, Nav } from "rsuite";

const links: {
  label: string;
  path: string;
}[] = [
  { label: "Home", path: "/" },
  { label: "All musicians", path: "#Musicians" },
  { label: "All albums", path: "#Albums" },
];

export function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar className="w-full flex justify-center fixed top-0 p-5 bg-white flex-col md:flex-row z-10">
      <button
        className="text-4xl md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <IoClose /> : <IoMenu />}
      </button>
      <Nav
        className={`${
          isMenuOpen == true ? "flex flex-col" : "hidden"
        } gap-10 md:flex`}
      >
        {links.map((el) => (
          <Nav.Item className="text-black" href={el.path} key={el.label}>
            {el.label}
          </Nav.Item>
        ))}
      </Nav>
    </Navbar>
  );
}
