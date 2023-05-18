import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import {
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
  useGLTF,
  useScroll,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

export function Cyber_truck(props) {
  const { nodes, materials } = useGLTF("./models/cyber_truck-transformed.glb");
  const truck = useRef();
  const scroll = useScroll();
  const tl = useRef();

  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    const windowWidth = window.innerWidth;
    setIsMobile(windowWidth < 768);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 2, ease: "power1.inOut" },
    });

    tl.current
      .to(truck.current.rotation, { y: -0.7 }, 2)
      .to(truck.current.position, { x: 0.6 }, 2)

      .to(truck.current.rotation, { y: 0.9 }, 4)
      .to(truck.current.position, { x: 0.4 }, 4)

      .to(truck.current.rotation, { y: 0 }, 12)
      .to(truck.current.rotation, { x: 0 }, 12)
      .to(truck.current.position, { x: 0 }, 12);
  }, []);

  const getColor = () => {
    switch (props.selectedIcon) {
      case 1:
        return "#aaa";
      case 2:
        return "#F74545";
      case 3:
        return "green";
      case 4:
        return "#FFC000";
      case 5:
        return "#313030";
      default:
        return "#aaa";
    }
  };

  return (
    <PresentationControls
      speed={1.5}
      global
      zoom={0.7}
      polar={[-0.1, Math.PI / 4]}
    >
      <Stage environment={"city"} intensity={1} contactShadow={false}>
        <group {...props} dispose={null} ref={truck}>
          <group
            position={isMobile ? [-1.1, -0.5, 0] : [-2.3, -0.5, 0]}
            rotation={[0, 0, 0]}
            scale={isMobile ? 0.003 : 0.007}
          >
            <group position={[0, 0, 0]}>
              <mesh
                geometry={nodes.updated_tire001_Tire_0.geometry}
                material={materials.Tire}
              >
                <meshPhysicalMaterial
                  color="black"
                  roughnes={0.6}
                  reflectivity={0.4}
                />
              </mesh>

              <mesh
                geometry={nodes.updated_tire001_Rims_0.geometry}
                material={materials.Rims}
                castShadow
              >
                <meshStandardMaterial
                  color="black"
                  roughness={0.2}
                  metalness={0.7}
                  reflectivity={0.9}
                />
              </mesh>

              <mesh
                geometry={nodes.updated_tire001_Undercarag_0.geometry}
                material={materials.Undercarag}
              />
              <mesh
                geometry={nodes.updated_tire001_Body_0.geometry}
                material={materials.Body}
                castShadow
              >
                <meshStandardMaterial
                  color={getColor()}
                  roughness={0.18}
                  metalness={1}
                  reflectivity={0.4}
                  iridescence={0}
                  iridescenceIOR={0}
                  iridescenceThicknessRange={[100, 1000]}
                />
              </mesh>
              <mesh
                geometry={nodes.updated_tire001_Headlights_0.geometry}
                material={materials.Headlights}
                castShadow
              ></mesh>
              <mesh
                geometry={nodes.updated_tire001_Glass_0.geometry}
                material={materials.Glass}
                castShadow
              >
                <meshPhysicalMaterial
                  color="black"
                  roughness={0}
                  emissive={"black"}
                  clearcoat={0}
                  reflectivity={0}
                  metalness={1}
                  iridescence={0}
                  iridescenceIOR={1}
                  iridescenceThicknessRange={[100, 1000]}
                />
              </mesh>
            </group>
          </group>
        </group>
      </Stage>

      <mesh
        position={isMobile ? [0, -0.74, 0] : [0, -1.1, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[170, 170]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#101010"
          metalness={0.5}
        />
      </mesh>
    </PresentationControls>
  );
}

useGLTF.preload("./models/cyber_truck-transformed.glb");
