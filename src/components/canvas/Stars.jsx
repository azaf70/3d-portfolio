import { useState, useRef, Suspense, useEffect } from 'react'
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

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (event) => {
      // Convert mouse coordinates to normalized device coordinates (-1 to +1)
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const [time, setTime] = useState(0)

  useFrame((state, delta) => {
    setTime(time => time + delta)

    // Autonomous motion using sine waves
    const autonomousX = Math.sin(time * 0.3) * 0.05
    const autonomousY = Math.cos(time * 0.2) * 0.05

    // Base rotation with smoother movement
    ref.current.rotation.x -= delta/20
    ref.current.rotation.y -= delta/25

    // Blend between autonomous motion and mouse interaction
    const mouseActive = Math.abs(mousePosition.x) > 0.1 || Math.abs(mousePosition.y) > 0.1
    const targetRotationX = mouseActive ? mousePosition.y * 0.3 : autonomousX
    const targetRotationY = mouseActive ? mousePosition.x * 0.3 : autonomousY
    
    // Smooth interpolation
    ref.current.rotation.x += (targetRotationX - ref.current.rotation.x) * 0.05
    ref.current.rotation.y += (targetRotationY - ref.current.rotation.y) * 0.05
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
      </Canvas>
    </div>
  )
}

export default StarsCanvas