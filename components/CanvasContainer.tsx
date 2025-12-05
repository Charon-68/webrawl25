'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState, useEffect } from 'react'

// Particle Sphere Component
function ParticleSphere() {
  const pointsRef = useRef<any>(null)
  const [hovered, setHovered] = useState(false)
  const particlesData = useRef<{
    position: any
    originalPosition: Float32Array
  } | null>(null)

  // Initialize particles
  useEffect(() => {
    if (!pointsRef.current) return

    const count = 1000
    const positions = new Float32Array(count * 3)
    const originalPositions = new Float32Array(count * 3)

    // Create sphere of particles
    for (let i = 0; i < count; i++) {
      const i3 = i * 3

      // Random position on sphere surface
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      const radius = 2

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)

      positions[i3] = x
      positions[i3 + 1] = y
      positions[i3 + 2] = z

      originalPositions[i3] = x
      originalPositions[i3 + 1] = y
      originalPositions[i3 + 2] = z
    }

    if (pointsRef.current && pointsRef.current.geometry) {
      const BufferAttribute = require('three').BufferAttribute
      pointsRef.current.geometry.setAttribute(
        'position',
        new BufferAttribute(positions, 3)
      )
      particlesData.current = {
        position: pointsRef.current.geometry.attributes.position,
        originalPosition: originalPositions,
      }
    }
  }, [])

  useFrame(() => {
    if (!pointsRef.current || !particlesData.current) return

    const positions = particlesData.current.position
    const posArray = positions.array as Float32Array

    // Rotate sphere
    if (pointsRef.current.rotation) {
      pointsRef.current.rotation.x += 0.0005
      pointsRef.current.rotation.y += 0.001
    }

    // Update particles based on hover
    if (hovered) {
      for (let i = 0; i < posArray.length; i += 3) {
        const originalX = particlesData.current.originalPosition[i]
        const originalY = particlesData.current.originalPosition[i + 1]
        const originalZ = particlesData.current.originalPosition[i + 2]

        // Explode effect
        const explosionStrength = 0.15
        posArray[i] = originalX * (1 + Math.sin(Date.now() * 0.001 + i) * explosionStrength)
        posArray[i + 1] = originalY * (1 + Math.cos(Date.now() * 0.001 + i) * explosionStrength)
        posArray[i + 2] = originalZ * (1 + Math.sin(Date.now() * 0.0008 + i) * explosionStrength)
      }
    } else {
      // Return to original positions
      for (let i = 0; i < posArray.length; i += 3) {
        posArray[i] += (particlesData.current.originalPosition[i] - posArray[i]) * 0.05
        posArray[i + 1] += (particlesData.current.originalPosition[i + 1] - posArray[i + 1]) * 0.05
        posArray[i + 2] += (particlesData.current.originalPosition[i + 2] - posArray[i + 2]) * 0.05
      }
    }

    positions.needsUpdate = true
  })

  return (
    <group
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <points ref={pointsRef}>
        <bufferGeometry />
        <pointsMaterial
          size={0.04}
          color={hovered ? '#e11d48' : '#feb901'}
          transparent
          opacity={hovered ? 0.8 : 0.6}
          sizeAttenuation
        />
      </points>
    </group>
  )
}

export function CanvasContainer() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      className="w-full h-full"
      gl={{ alpha: true }}
    >
      <ParticleSphere />
    </Canvas>
  )
}
