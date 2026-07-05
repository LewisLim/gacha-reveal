import { useGLTF } from '@react-three/drei'

interface Props {
  modelPath: string
  position?: [number, number, number]
  rotation?: [number, number, number]
  scale?: number
}

export function SceneItem({ modelPath, position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }: Props) {
  const { scene } = useGLTF(modelPath)
  
  return (
    <primitive
      object={scene}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  )
}