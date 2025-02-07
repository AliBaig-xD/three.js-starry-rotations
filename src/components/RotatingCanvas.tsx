import { useFrame } from "@react-three/fiber";
import { Icosahedron } from "@react-three/drei";

export default function RotatingCanvas({
  rotation,
  color,
}: {
  rotation: { x: number; y: number };
  color: string;
}) {
  useFrame((state) => {
    state.scene.rotation.y += rotation.y;
    state.scene.rotation.x += rotation.x;
  });

  return (
    <Icosahedron position={[0, 0, 0]} args={[1, 1]}>
      <meshStandardMaterial attach="material" color={color} wireframe={true} />
    </Icosahedron>
  );
}
