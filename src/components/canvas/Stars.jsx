import { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

const StarBackground = (props) => {
  const ref = useRef()
  const [sphere] = useState(() => {
    // Generate positions with more controlled parameters
    const positions = random.inSphere(new Float32Array(5000), { 
      radius: 1.2,
      randomize: true,
      distribution: 'uniform'
    })
    
    // Comprehensive validation of position values
    for (let i = 0; i < positions.length; i++) {
      if (isNaN(positions[i]) || !isFinite(positions[i])) {
        positions[i] = (Math.random() - 0.5) * 2 // Generate a random value between -1 and 1
      }
    }
    
    return positions
  })

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta/15
    ref.current.rotation.y -= delta/20
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className='w-full h-screen fixed inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 0.5] }}>
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas