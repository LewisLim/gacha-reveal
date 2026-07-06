// App.tsx
import "./App.css";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { GachaConfetti } from "./special-effects/GachaConfetti";
import { CombiniScene } from "./components/scenes/CombiniScene";
import { StreetScene } from "./components/scenes/StreetScene";

type Scene = "combini" | "street" | "pray";

export default function App() {
  const [scene, setScene] = useState<Scene>("combini");
  const [isRevealing, setIsRevealing] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <div id="canvas-container" className="h-[700px]">
        <Canvas>
          {scene === "combini" && (
            <CombiniScene
              isRevealing={isRevealing}
              setIsRevealing={setIsRevealing}
              onOpen={() => setScene("combini")}
            />
          )}
          {scene === "street" && <StreetScene />}
        </Canvas>

        <GachaConfetti
          isRevealing={scene === "combini" && isRevealing}
          tier="S"
        />

        <div
          style={{ position: "absolute", bottom: 20, left: 0, right: 0 }}
          className="flex justify-center space-x-4"
        >
          {scene === "combini" && (
            <button
              onClick={() => setIsRevealing(true)}
              className="bg-teal-500 hover:bg-teal-400 text-white text-sm font-medium py-2 px-4 rounded-full cursor-pointer"
            >
              Open Gacha
            </button>
          )}
          {scene === "combini" && (
            <button
              onClick={() => setIsRevealing(false)}
              className="bg-transparent hover:bg-teal-500 text-teal-400 text-sm font-medium hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded cursor-pointer"
            >
              Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
