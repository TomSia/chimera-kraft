import MobileMenu from "@/app/components/mobileMenu";
import Slider from "./components/slider";
import StickerDeck from "./components/stickerdeck";

export default function Home() {
  
  return (
    <main>
      <MobileMenu/>
      <Slider/>
      <StickerDeck/>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <p>Paragraph</p>
    </main>
  );
}
