import { getAllMusicians } from "@/utils/musicians/getAllMusicians";
import { ListComponent } from "@/components/lists/ListComponent";
import Image from "next/image";

export default async function Page({ params }: { params: { id: number } }) {
  const allMusicians = await getAllMusicians();
  const musician = allMusicians[params.id - 1];

  return (
    <div className="p-[5%] flex flex-col md:flex-row gap-6">
      <Image
        alt="musician photo"
        src={`/musicians/${musician.id}.jpg`}
        width={300}
        height={300}
        className="md:w-2/5 w-full"
      />
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-3xl">{musician.name}</h1>
        <div>
          <h2 className="text-xl">Birth year: {musician.birth_year}</h2>
          <h2 className="text-xl">Country: {musician.country}</h2>
          <h2 className="text-xl">Genre: {musician.genre}</h2>
          <h2 className="text-xl">Views: {musician.views_this_year}</h2>
        </div>
        <ListComponent
          listToRender={musician.top_albums}
          label="Albums"
        ></ListComponent>
      </div>
    </div>
  );
}
