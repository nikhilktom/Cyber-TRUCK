import {
  ScrollControls,
  Scroll,

  Stars,
  Sparkles,
 

} from "@react-three/drei";

import { Cyber_truck } from "./components/Cyber_truck.jsx";
import "./index.css";
import tesla from "../public/assets/tesla.png";
import Name from "../public/assets/name.png";
import { useState } from "react";

function App() {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (iconId) => {
    setSelectedIcon(iconId);
  };

  return (
    <>
      <ScrollControls pages={5} damping={0.1}>
        <Stars
          radius={100}
          depth={500}
          count={5}
          factor={4}
          saturation={0.5}
          fade
          speed={1}
        />
        <Sparkles size={1} color={"#aaa"} scale={[10, 10, 10]}></Sparkles>

        <Cyber_truck selectedIcon={selectedIcon} />
        <Scroll></Scroll>
        <Scroll html>
          <div className="h-screen flex flex-col justify-between items-center">
            <div className="flex flex-col justify-center items-center mt-56 sm:mt-32">
              <img
                className="image scale-50 select-none"
                src={Name}
                alt="cyber truck"
              />
            </div>

            <div className="flex items-start justify-start font-dirtchunk flex-col w-1/5 h-1/5 select-none absolute top-0 left-0 mt-5 ">
              <img
                className="image scale-50 select-none"
                src={tesla}
                alt="tesla logo"
              />
            </div>

            <div className="flex  justify-center space-x-4 mb-40 rounded-3xl border border-slate-500 p-2">
              <div
                className={`flex items-center justify-center rounded-full ${
                  selectedIcon === 1 ? "border-2 border-slate-500" : ""
                }`}
                onClick={() => handleIconClick(1)}
              >
                <div className=" w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-gray-300 via-slate-400 to-slate-300"></div>
              </div>
              <div
                className={`flex items-center justify-center rounded-full ${
                  selectedIcon === 2 ? "border-2 border-slate-500" : ""
                }`}
                onClick={() => handleIconClick(2)}
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-red-900 via-rose-400 to-red-700"></div>
              </div>
              <div
                className={`flex items-center justify-center rounded-full ${
                  selectedIcon === 3 ? "border-2 border-slate-500" : ""
                }`}
                onClick={() => handleIconClick(3)}
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-lime-500 via-green-500 to-emerald-900"></div>
              </div>
              <div
                className={`flex items-center justify-center rounded-full ${
                  selectedIcon === 4 ? "border-2 border-slate-500" : ""
                }`}
                onClick={() => handleIconClick(4)}
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-300"></div>
              </div>

              <div
                className={`flex items-center justify-center rounded-full ${
                  selectedIcon === 5 ? "border-2 border-slate-500" : ""
                }`}
                onClick={() => handleIconClick(5)}
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-gray-700 to-black"></div>
              </div>
            </div>
          </div>

          <div className="flex items-start justify-start h-screen font-dirtchunk flex-col w-screen pl-7 select-none">
            <div className="w-1/3">
              <div>
                <h2 className="text-2xl md:text-7xl   text-white uppercase  mt-10">
                Unleash the Power of Innovation
                </h2>
              </div>
              <br />
              <div>
                <p className="hidden xl:block text-3xl  text-slate-300 capitalize">
                Experience the cutting-edge technology and unparalleled performance of the Cyber Truck. With its sleek design and advanced features, this revolutionary vehicle redefines the future of transportation. Whether you're conquering rugged terrains or cruising through city streets, the Cyber Truck delivers an unmatched driving experience.
                </p>
              </div>
              <br />
              <div>
                <button className="h-8  md:h-10 bg-transparent hover:bg-black-500  text-slate-300 font-semibold hover: py-2 px-4 border border-black-900 hover:border-black ">
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-end justify-end h-screen font-dirtchunk flex-col w-screen pr-7 select-none">
            <div className="w-1/3">
              <div className="   ">
                <h2 className="text-2xl md:text-7xl text-white  uppercase  mt-10">
                Redefining Sustainable Mobility
                </h2>
              </div>
              <br />
              <div>
                <p className="hidden xl:block  text-slate-300 text-3xl capitalize">
                Discover the perfect blend of sustainability and style with the Cyber Truck. Designed with an eco-friendly mindset and powered by electric innovation, this vehicle is a symbol of responsible mobility. Experience the thrill of emission-free driving without compromising on performance or luxury.
                </p>
              </div>
              <br />
              <div>
                <button className="h-8  md:h-10 bg-transparent hover:bg-black-500  text-slate-300 font-semibold hover:text-grey py-2 px-4 border border-black-900 hover:border-black ">
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end h-screen font-dirtchunk flex-col w-screen pl-7 select-none">
            <h2 className="text-3xl md:text-7xl text-white uppercase mt-10 animate-glitch">
            Embrace the Future of Transportation
            </h2>
          </div>

          <div className="flex items-center h-screen  w- screen justify-center mt-60">
            <button className=" h-8  md:h-10 bg-transparent hover:bg-black-500  text-slate-300 font-semibold hover:py-2 px-4 border border-black-900 hover:border-black ">
              Order Now
            </button>
          </div>
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;
