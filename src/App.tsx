import "./App.css";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { GachaConfetti } from "./components/effects/GachaConfetti";
import { CombiniScene } from "./components/scenes/CombiniScene";
import SceneControls from "./components/ui/SceneControls";

useGLTF.setDecoderPath(
  "https://www.gstatic.com/draco/versioned/decoders/1.5.6/",
);

export default function App() {
  const [scene, setScene] = useState<"combini">("combini");
  const [isRevealing, setIsRevealing] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <div id="canvas-container" className="min-h-[700px] h-screen">
        <Canvas>
          <CombiniScene isRevealing={isRevealing} />
        </Canvas>
        <GachaConfetti
          isRevealing={scene === "combini" && isRevealing}
          tier="S"
        />
        <SceneControls scene={scene} setIsRevealing={setIsRevealing} />
      </div>
    </div>
  );
}
