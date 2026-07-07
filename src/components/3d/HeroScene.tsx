'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { BuildingModel } from './BuildingModel';

export default function HeroScene() {
  return (
    <div className="w-full h-full absolute inset-0 z-0 pointer-events-none md:pointer-events-auto cursor-move">
      <Canvas shadows camera={{ position: [5, 3, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow shadow-mapSize={[1024, 1024]} />
        <Suspense fallback={null}>
          <BuildingModel />
          <Environment preset="city" />
          <ContactShadows position={[0, -1.2, 0]} opacity={0.5} scale={10} blur={2} far={4} />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2 + 0.1} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
