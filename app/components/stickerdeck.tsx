export default function StickerDeck() {
    return (
        <div className="flex-col text-center">
        <div>
          <h2 className="text-black font-semibold mt-4" >OUR SERVICES</h2>
        </div>
        <h3 className="text-2xl">Kraft your own stickers!</h3>
        <p className="text-xs">Click on the cards to reveal the steps to create your own sticker.</p>
        <div className="deck mt-10 grid grid-cols-3 gap-5 w-screen h-60 px-10">
          <div className="bg-[#B87F4A] rounded-md"></div>
          <div className="bg-[#B87F4A] rounded-md"></div>
          <div className="bg-[#B87F4A] rounded-md"></div>
          <div className="bg-[#B87F4A] rounded-md"></div>
          <div className="bg-[#B87F4A] rounded-md"></div>
          <div className="bg-[#B87F4A] rounded-md"></div>
        </div>
      </div>
    )
}