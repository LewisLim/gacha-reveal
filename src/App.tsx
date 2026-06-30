import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import "./App.css";

function SpinningCube() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
}

export default function App() {
  return (
    <>
      <h1 className="text-lg font-bold text-blue-500">Gacha Reveal</h1>
      <div id="canvas-container" className="h-[500px] bg-pink-100">
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <SpinningCube />
        </Canvas>
      </div>
    </>
  );
}
