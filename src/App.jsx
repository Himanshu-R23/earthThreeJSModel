import './App.css'
import { Canvas } from "@react-three/fiber"
import Earth from './components/Earth'
import { Stars } from '@react-three/drei'


function App() {
  

  return (
    <>
      <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <Canvas camera={{ fov: 75, position: [0, 0, 60] }}>
        
        <Earth/>
        <Stars 
          radius={100} 
          depth={50} 
          count={5000} 
          factor={4} 
          saturation={0} 
          fade 
        />
      </Canvas>
      </div>
    </>
  )
}

export default App
