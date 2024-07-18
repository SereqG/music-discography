import Image from "next/image";
import { LinkButton } from "../buttons/LinkButton";

interface props {
  data: {
    id: number;
    name: string;
    img: string;
  };
}

export function AlbumCard({ data }: props) {
  return (
    <div className="flex flex-col w-64 shrink-0 gap-5">
      <Image
        alt="Album cover"
        src={`/covers/${data.id}.jpg`}
        width={300}
        height={300}
        className="w-full"
      />
      <div className="flex flex-col">
        <h2>
          <b>Name:</b> {data.name}
        </h2>
      </div>
      <LinkButton path={`album/${data.id}`}>More</LinkButton>
    </div>
  );
}
