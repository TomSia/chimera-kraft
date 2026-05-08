export default function Slider() {
    return (
    <div className="Slider h-screen bg-[url(./assets/images/stickers.png)] bg-center align-items-center relative">
        <div className="absolute bottom-5 selectors left-[25%]">
            <div className="selectorBox bg-[#852807] w-6 h-6 mx-2 float-left"/>
            <div className="selectorBox bg-white w-6 h-6 mx-2 float-left border-2"/>
            <div className="selectorBox bg-white w-6 h-6 mx-2 float-left border-2"/>
            <div className="selectorBox bg-white w-6 h-6 mx-2 float-left border-2"/>
        </div>
    </div>
    )
}