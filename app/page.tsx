import Image from "next/image";
import phonemenu from "./assets/images/phonemenu.png"

export default function Home() {
  return (
    <main>
      <nav className="fixed pt-4 m-2">
        <div className="float-left mr-4 text-[#E5DBAD]">
        <h1 className="text-sm c ">Welcome this is where we turn ideas into reality.</h1>
        <h1 className="text-5xl">ChimeraKraft</h1>
      </div>
      <Image className="w-10 pt-3" src={phonemenu} alt="Menu"/>
      </nav>
      <div className="Slider h-screen bg-black">
        <div className="selectors"></div>

      </div>
      <div className="text-center">
        <div className=" relative h-2 w-16 border-t-2 border-black-solid float-left"></div>
        <h2 className="text-black font-semibold mt-4">OUR SERVICES</h2>
        <div className=" relative h-2 w-16 border-t-2 border-black-solid float-right"></div>
      </div>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <p>Paragraph</p>
    </main>
  );
}
