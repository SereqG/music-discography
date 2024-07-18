import Image from "next/image";
import Link from "next/link";

interface props {
  data: {
    id: number;
    name: string;
    img: string;
  };
}

export function MusicianCard({ data }: props) {
  return (
    <div className="flex flex-col w-64 shrink-0 gap-5">
      <Image
        alt="musician photo"
        src={`/musicians/${data.id}.jpg`}
        width={300}
        height={300}
        className="w-full"
      />
      <div className="flex flex-col">
        <h2>
          <b>Name:</b> {data.name}
        </h2>
      </div>
      <Link
        href={`/musician/${data.id}`}
        className="p-3 border-2 border-blue-400 rounded-lg flex items-center justify-center font-bold hover:bg-blue-400"
      >
        More
      </Link>
    </div>
  );
}
