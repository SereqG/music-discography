"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { List } from "rsuite";

interface props {
  listToRender: string[];
  label: string;
}

export function ListComponent({ listToRender, label }: props) {
  console.log(listToRender);
  return (
    <div>
      <h2 className="font-bold text-3xl">{label}</h2>
      <List>
        {listToRender.map((el: string) => (
          <List.Item className="text-xl" key={el}>
            {el}
          </List.Item>
        ))}
      </List>
    </div>
  );
}
