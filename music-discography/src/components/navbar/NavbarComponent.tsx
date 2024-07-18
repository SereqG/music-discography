"use client";

import Link from "next/link";
import { Navbar, Nav } from "rsuite";

const links: {
  label: string;
  path: string;
}[] = [
  { label: "Home", path: "/" },
  { label: "All musicians", path: "#allMusicians" },
  { label: "All albums", path: "/all-albums" },
];

export function NavbarComponent() {
  return (
    <Navbar className="w-full flex justify-center fixed top-0 p-5">
      <Nav className="flex gap-10">
        {links.map((el) => (
          <Nav.Item className="text-white" href={el.path} key={el.label}>
            {el.label}
          </Nav.Item>
        ))}
      </Nav>
    </Navbar>
  );
}
