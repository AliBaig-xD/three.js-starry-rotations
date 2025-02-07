import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useState } from "react";
import {
  RotatingCanvas,
  DraggableContainer,
  CustomizationWidget,
  Footer,
} from "./components";

export default function App() {
  const rotation = { x: 0.005, y: 0.01 };
  const [color, setColor] = useState("#FFFFFF");
  const [background, setBackground] = useState("#000000");
  const [intensity, setIntensity] = useState(0.5);
  const [starProps, setStarProps] = useState({
    radius: 100,
    depth: 50,
    count: 5000,
    factor: 4,
    speed: 1,
    fade: true,
  });

  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "black" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <RotatingCanvas rotation={rotation} color={color} />
        <color attach="background" args={[background]} />
        <ambientLight intensity={intensity} />
        <pointLight position={[10, 10, 10]} intensity={intensity} />
        <Stars {...starProps} />
        <OrbitControls enableZoom={true} enablePan={false} />
      </Canvas>

      <DraggableContainer>
        <CustomizationWidget
          color={color}
          setColor={setColor}
          background={background}
          setBackground={setBackground}
          intensity={intensity}
          setIntensity={setIntensity}
          setStarProps={setStarProps}
          starProps={starProps}
        />
      </DraggableContainer>

      <Footer color={background} />
    </div>
  );
}
