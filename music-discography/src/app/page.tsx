import { DataSection } from "@/components/homepage/DataSection";
import { WelcomeSection } from "@/components/homepage/WelcomeSection";
import Image from "next/image";
import { getAllMusicians } from "./utils/musicians/getAllMusicians";
import { getAllAlbums } from "./utils/albums/getAllAlbums";

export default async function Home() {
  const musicians = await getAllMusicians();
  const albums = await getAllAlbums();

  console.log(musicians);
  return (
    <main className="">
      <WelcomeSection />
      <DataSection data={musicians} sectionName="Musicians" />
      <DataSection data={albums} sectionName="Albums" />
    </main>
  );
}
