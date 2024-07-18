import { MusicianCard } from "../cards/MusicianCard";
import { AlbumCard } from "../cards/AlbumCard";

interface props {
  data: { id: number; name: string; img: string }[];
  sectionName: "Musicians" | "Albums";
}

export function DataSection({ data, sectionName }: props) {
  return (
    <div className="p-[5%]" id={sectionName}>
      <h2 className="font-bold text-3xl">{sectionName}</h2>
      <div className="w-full overflow-auto">
        <div className="flex gap-5">
          {sectionName == "Musicians"
            ? data.map((el) => <MusicianCard key={el.id} data={el} />)
            : data.map((el) => <AlbumCard key={el.id} data={el} />)}
        </div>
      </div>
    </div>
  );
}
