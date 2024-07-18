"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function HomeButton() {
  const pathname = usePathname();

  if (pathname != "/") {
    return (
      <Link
        href={"/"}
        className="absolute bottom-[-30px] left-[5%] p-3 rounded-md bg-blue-400 text-white transition-all duration-300 hover:bg-blue-600"
      >
        Back to the homepage
      </Link>
    );
  }
}
