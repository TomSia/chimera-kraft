import MobileMenu from "@/app/components/mobileMenu";
import Slider from "./components/slider";

export default function Home() {
  
  return (
    <main>
      <MobileMenu/>
      <Slider/>
      <div className="text-center">
        <div className=" relative h-2 w-16 border-t-2 border-black-solid float-left"></div>
        <h2 className="text-black font-semibold mt-4" >OUR SERVICES</h2>
        <div className=" relative h-2 w-16 border-t-2 border-black-solid float-right"></div>
        <h3 className="text-2xl">Kraft your own stickers!</h3>
        <p className="text-xs">Click on the cards to reveal the steps to create your own sticker.</p>
        <div className="deck"></div>
      </div>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <p>Paragraph</p>
    </main>
  );
}
