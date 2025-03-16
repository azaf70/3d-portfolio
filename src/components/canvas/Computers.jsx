import React from 'react'
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, Stars, useGLTF } from '@react-three/drei';
import Loader from '../Loader';

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader/>}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <mesh>
          <ambientLight intensity={0.5} groundColor="white" />
          <pointLight intensity={1} />
          <spotLight
            position={[-20, 50, 10]}
            angle={0.15}
            castShadow
            shadow-mapSize={1024}
          />
          <primitive
            object={computer.scene}
            scale={0.6}
            position={[0, -2.25, -1.5]}
            rotation={[-0.01, -0.2, -0.1]}
          />
        </mesh>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default Computers