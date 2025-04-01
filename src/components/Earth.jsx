import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";




export default function Earth() {
    const earthRef = useRef();  // 📌 "Hey, that's my Earth!"
    const texture = useTexture("public/8k_earth_daymap.jpg"); // 🎨 Load the Earth's texture!
  
    useFrame(() => {
      earthRef.current.rotation.y += 0.005; // 🌍 Keep spinning a little every frame!
    });

    return (
        <>
          <ambientLight color = "white" intensity={0.8} suppressHydrationWarning/> {/* 🌟 Soft light everywhere */}
          <directionalLight color = "white" position={[0, 5, 2]} intensity={1} /> {/* ☀️ Sunlight! */}
          <pointLight position={[10, 5, -10]} intensity={5} color="orange" />

          <mesh ref={earthRef}>
            <sphereGeometry args={[20, 64, 64]} /> {/* 🎭 A round shape for Earth */}
            <meshStandardMaterial map={texture} />{/* 🖼️ Apply the texture */}
            
          </mesh>
    
          <OrbitControls enableZoom={true} /> {/* 🖱️ Move Earth with your mouse */}
        </>
      );
}
    
  
