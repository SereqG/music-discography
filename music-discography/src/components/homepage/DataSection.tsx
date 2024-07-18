import { MusicianCard } from "../MusicianCard";
import { AlbumCard } from "../AlbumCard";

interface props {
  data: { id: number; name: string; img: string }[];
  sectionName: "Musicians" | "Albums";
}

export function DataSection({ data, sectionName }: props) {
  console.log(data);
  return (
    <div className="p-[5%]" id="allMusicians">
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
