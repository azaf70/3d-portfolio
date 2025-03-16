import React from 'react'
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, Stars, useGLTF } from '@react-three/drei';
import CanvasLoader from '../CanvasLoader';

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);

    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);

  }, [])

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <mesh>
          <ambientLight intensity={1.5} groundColor="white" />
          <pointLight intensity={1} />
          <spotLight
            position={[-20, 50, 10]}
            angle={0.15}
            shadow-mapSize={1024}
          />
          <primitive
            object={computer.scene}
            scale={isMobile ? 0.3 : 0.6}
            position={isMobile ? [0, -1.5, -0.5] : [0, -2.25, -1.5]}
            rotation={isMobile ? [-0.01, -0.7, -0.1] : [-0.01, -0.2, -0.1]}
          />
        </mesh>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default Computers