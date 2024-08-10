"use client";
import AnimatedBox from "@/components/AnimatedBox";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import Plane from "@/components/Plane";
import Lights from "@/components/Lights";
import Cottage from "@/components/Cottage";
import { Cube } from "@/components/Cube";
import { useState } from "react";
import { Physics } from "@react-three/cannon";
import { Char } from "@/components/Char";

export default function Page() {
  const testing = true;
  return (
    <>
      <div className="container">
        <Canvas shadows>
          {testing ? <axesHelper visible={testing} args={[200]} /> : null}
          {testing ? <gridHelper args={[10, 10]} /> : null}
          <OrbitControls />
          {testing ? <Stats /> : null}
          <Lights />
            <AnimatedBox />
            <Plane />
            <Cottage />
            <Cube />
            <Char />
        </Canvas>
      </div>
    </>
  );
}
