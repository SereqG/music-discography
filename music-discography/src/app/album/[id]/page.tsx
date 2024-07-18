import { getAllAlbums } from "@/app/utils/albums/getAllAlbums";
import { ListComponent } from "@/components/lists/ListComponent";
import Image from "next/image";

export default async function Page({ params }: { params: { id: number } }) {
  const allAlbums = await getAllAlbums();
  const album = allAlbums[params.id - 1];

  return (
    <div className="p-[5%] flex flex-col md:flex-row gap-6">
      <Image
        alt="musician photo"
        src={`/covers/${album.id}.jpg`}
        width={300}
        height={300}
        className="md:w-2/5 w-full"
      />
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-3xl">{album.name}</h1>
        <div>
          <h2 className="text-xl">Artist: {album.artist}</h2>
          <h2 className="text-xl">Album release year: {album.release_year}</h2>
        </div>
        <ListComponent listToRender={album.songs} label="Songs"></ListComponent>
      </div>
    </div>
  );
}
