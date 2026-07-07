import React from 'react';
import Navbar from '@/components/layout/Navbar';
import HeroScene from '@/components/3d/HeroScene';
import { Button } from '@/components/ui/Button';
import { ProjectGallery } from '@/components/ui/ProjectGallery';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* 3D Background */}
        <HeroScene />
        
        {/* Content Overlay */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pointer-events-none mt-20">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary-text mb-6 drop-shadow-sm">
            Designing Spaces That Shape Human Experience
          </h1>
          <p className="text-secondary-text text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Premium residential, commercial, and hospitality architecture by Ar. Niveda Tupasundarya.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pointer-events-auto">
            <Button variant="primary" size="lg">Explore Projects</Button>
            <Button variant="ghost" size="lg">Book Consultation</Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-70">
          <p className="text-xs uppercase tracking-widest text-primary-text mb-2">Scroll</p>
          <div className="w-[1px] h-12 bg-primary-text mx-auto"></div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="py-24 bg-primary-bg relative z-20">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="font-serif text-4xl md:text-5xl text-primary-text mb-12 text-center">Selected Works</h2>
          <ProjectGallery />
        </div>
      </section>
    </main>
  );
}
