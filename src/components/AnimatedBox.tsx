"use client";
import { TransformControls, useHelper, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { BoxHelper } from "three";

const AnimatedBox = () => {
  const meshRef = useRef(null!);
  useHelper(meshRef, BoxHelper, "blue"); //shows how much place the box is taking

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
    }
  });

  {
    /* we can use textures from https://www.textures.com and https://polyhaven.com */
  }
  const map = useTexture("./textures/metal_plate_diff_1k.png");
  const displacementMap = useTexture("./textures/metal_plate_disp_1k.png");
  const noramlMap = useTexture("./textures/metal_plate_nor_gl_1k.png");
  const roughMap = useTexture("./textures/metal_plate_rough_1k.png");
  return (
    <>
    {/* TransformControls helps in moving the object...Switch off OrbitControls */}
    {/* <TransformControls> */}
      <mesh scale={[2, 2, 2]} ref={meshRef} position={[0,3,0]} castShadow>
        {/* <boxGeometry/> */}
        {/* <coneGeometry/> */}
        <sphereGeometry />
        {/* <meshStandardMaterial color={"blue"} /> */}
        <meshStandardMaterial map={map} />
      </mesh>
      {/* </TransformControls> */}
      <mesh scale={[2, 2, 2]} position={[-4, 0, 0]}>
        {/* best one */}
        {/* <boxGeometry/> */}
        {/* <coneGeometry/> */}
        <sphereGeometry />
        <meshStandardMaterial
          map={map}
          normalMap={noramlMap}
          roughnessMap={roughMap}
        />
      </mesh>
      <mesh scale={[2, 2, 2]} position={[4, 0, 0]}>
        {/* <boxGeometry/> */}
        {/* <coneGeometry/> */}
        <sphereGeometry args={[1, 200, 200]} />
        {/* size=1 200X200 segments */}
        <meshStandardMaterial
          map={map}
          normalMap={noramlMap}
          roughnessMap={roughMap}
          displacementMap={displacementMap}
          displacementScale={0.05} // used to limit displacement
        />
      </mesh>
    </>
  );
};

export default AnimatedBox;
