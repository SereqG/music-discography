import { IoMdSearch } from "react-icons/io";
import { Button, Input } from "rsuite";

export function WelcomeSection() {
  return (
    <div className="h-screen w-screen bg-[url('../../public/img/heroImg.jpg')] bg-cover bg-center flex items-center p-[5%]">
      <div className="w-[30%]">
        <h1 className="text-5xl text-white font-bold">
          Find your favorite musician’s discography
        </h1>
      </div>
    </div>
  );
}
