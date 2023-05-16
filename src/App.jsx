import {
  ScrollControls,
  Scroll,
  Environment,
  Stars,
  Sparkles,
  Backdrop,
  Float,
  Tetrahedron,


} from "@react-three/drei";

import { Cyber_truck } from "./components/Cyber_truck.jsx";
import "./index.css";

import Name from "../public/assets/name.png";

function App() {

  return (
    <>
      <ScrollControls pages={6} damping={0.1}>
        <Stars
          radius={100}
          depth={500}
          count={5}
          factor={4}
          saturation={0.5}
          fade
          speed={1}
        />
        <Sparkles size={1} color={"#ff"} scale={[10, 10, 10]}></Sparkles>
        <Backdrop
          receiveShadow
          floor={20.5}
          segments={100}
          scale={[50, 30, 10]}
          position={[4, -10, 0]}
        >
          <meshStandardMaterial color="#000000" />
        </Backdrop>

        <spotLight
          intensity={3}
          position={[-30, -6, 10]}
          angle={0.2}
          penumbra={1}
          castShadow
        />

        <Cyber_truck />
        <Environment preset="city" />

        <Scroll>
  



        </Scroll>
        <Scroll html classsName="w-full flex items-center justify-center ">

        <div className="h-screen flex items-center justify-center w-screen">
  <div className="h-1/2 flex items-start justify-center w-1/2">
    <img className="image" src={Name} alt="cyber truck" />
  </div>
</div>
          <div className="flex items-start justify-center h-screen font-dirtchunk flex-col w-screen pl-7">
            <div className="w-1/3">
              <div>
                <h2 className="text-3xl md:text-7xl   text-white uppercase  mt-10">
                Revolutionizing the future of transportation
                </h2>
              </div>
              <br />
              <div>
                <p className="hidden xl:block text-3xl  text-slate-300 capitalize">
                Experience the future of driving with the Cyber Truck. This sleek and powerful vehicle combines advanced technology with rugged durability to tackle any terrain. With its impressive range and versatile capabilities, the Cyber Truck is the ultimate driving machine for the modern adventurer.
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

          <div className="flex items-end justify-end h-screen font-dirtchunk flex-col w-screen pr-7">
            <div className="w-1/3">
              <div className="   ">
                <h2 className="text-3xl md:text-7xl text-white  uppercase  mt-10">
                A Futuristic Blend of Innovation and Style
                </h2>
              </div>
              <br />
              <div>
                <p className="hidden xl:block  text-slate-300 text-3xl capitalize">
                ntroducing the future of rugged, sustainable transportation - the Cyber Truck. With its robust design and advanced technology, this vehicle is built to take on any challenge, from off-roading to long road trips. But it's not just tough - the Cyber Truck is also environmentally conscious, with its electric powertrain and sustainable materials. Get ready to experience the ultimate blend of strength and style on the road ahead
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

          <div className="flex items-center justify-center h-screen font-dirtchunk flex-col w-screen pl-7">
            {" "}
            <h2 className="text-3xl md:text-7xl  text-white  uppercase  mt-10">
              {" "}
              Explore the Cutting-Edge of Technology
            </h2>
          </div>

          <div className="flex items-center justify-center h-screen font-dirtchunk flex-col w-screen pl-7">
            {" "}
            <h2 className="text-3xl md:text-7xl  text-white  uppercase  mt-10">
              {" "}
              Embrace the Future
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
