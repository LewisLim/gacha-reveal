export function FluorescentLight() {
  const deg = (d: number) => (d * Math.PI) / 180;

  return (
    <>
      <rectAreaLight
        width={0.4}
        height={15}
        intensity={0.7}
        color="white"
        position={[-2, 1.65, -3.5]}
        rotation={[deg(93), 0, deg(0)]}
      />

      <rectAreaLight
        width={0.4}
        height={15}
        intensity={1}
        color="white"
        position={[0.5, 1.65, -3.5]}
        rotation={[deg(93), 0, deg(0)]}
      />

      <rectAreaLight
        width={0.4}
        height={15}
        intensity={0.7}
        color="white"
        position={[3.5, 1.65, -3.5]}
        rotation={[deg(93), 0, deg(0)]}
      />

      {/* Visible tube mesh for adjusting position*/}
      {/* <mesh position={[-2.2, 1.65, -3.5]} rotation={[deg(93), 0, deg(0)]}>
        <planeGeometry args={[0.4, 15]} />
        <meshStandardMaterial
          color="red"
          emissive="red"
          emissiveIntensity={2}
        />
      </mesh> */}
    </>
  );
}
