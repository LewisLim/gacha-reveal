import { useGLTF } from "@react-three/drei";

export function CombiniScene() {
  const { scene } = useGLTF("/scene/combini-scene.glb");
  return (
    <primitive
      object={scene}
      scale={2.5}
      position={[3, -1, 0]}
      rotation={[0.05, 0, 0]}
    />
  );
}
