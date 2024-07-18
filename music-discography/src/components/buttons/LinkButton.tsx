import Link from "next/link";
import { ReactNode } from "react";

interface props {
  children: ReactNode;
  path: string;
}

export function LinkButton({ children, path }: props) {
  return (
    <Link
      href={path}
      className="flex p-3 rounded-md bg-blue-400 text-white transition-all duration-300 hover:bg-blue-600 justify-center items-center"
    >
      {children}
    </Link>
  );
}
