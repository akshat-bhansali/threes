"use client";
import AnimatedBox from "@/components/AnimatedBox";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import Plane from "@/components/Plane";
import Lights from "@/components/Lights";
import Cottage from "@/components/Cottage";
import { Cube } from "@/components/Cube";
import Home2 from "@/components/Home2";
import { useRouter } from "next/navigation";

export default function Home() {
  const testing = true;
  const router = useRouter();
  return (
      <>
      <button onClick={() => router.push(`hi`)}>Click ME</button>
      </>
  );
}
