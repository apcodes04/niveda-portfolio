'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function BuildingModel() {
  const groupRef = useRef<THREE.Group>(null);

  // Subtle floating and rotating animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Base */}
      <mesh position={[0, -1, 0]} castShadow receiveShadow>
        <boxGeometry args={[4, 0.5, 4]} />
        <meshStandardMaterial color="#EDE3D3" />
      </mesh>
      
      {/* Tower 1 */}
      <mesh position={[-0.8, 1, -0.8]} castShadow receiveShadow>
        <boxGeometry args={[1.5, 3.5, 1.5]} />
        <meshStandardMaterial color="#C8B79E" />
      </mesh>

      {/* Tower 2 */}
      <mesh position={[1, 0.5, 1]} castShadow receiveShadow>
        <boxGeometry args={[1.2, 2.5, 1.2]} />
        <meshStandardMaterial color="#B89A6A" />
      </mesh>

      {/* Connecting Bridge */}
      <mesh position={[0.1, 1.5, 0.1]} castShadow receiveShadow>
        <boxGeometry args={[2, 0.5, 0.5]} />
        <meshStandardMaterial color="#4A3B2F" />
      </mesh>
    </group>
  );
}
