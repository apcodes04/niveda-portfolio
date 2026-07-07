import React from 'react';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import { projects } from '@/data/projects';
import { InteractiveGallery } from '@/components/ui/InteractiveGallery';
import { MotelPlanViewer } from '@/components/project/MotelPlanViewer';

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-primary-bg">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[60vh] md:h-[80vh] w-full bg-secondary-bg overflow-hidden">
        <img 
          src={project.coverImage} 
          alt={project.title} 
          className="absolute inset-0 w-full h-full object-cover object-top opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-bg/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="container mx-auto">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-primary-text mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm uppercase tracking-widest text-secondary-text">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.location}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Scope */}
      <section className="py-16 md:py-24 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-luxury-accent mb-4">Design Philosophy</h2>
              <p className="text-primary-text text-xl md:text-2xl leading-relaxed font-serif">
                &quot;{project.designPhilosophy}&quot;
              </p>
            </div>
            
            <div className="space-y-6 text-secondary-text">
              <div>
                <h3 className="text-lg text-primary-text mb-2">The Challenge</h3>
                <p>{project.challenge}</p>
              </div>
              <div>
                <h3 className="text-lg text-primary-text mb-2">The Process</h3>
                <p>{project.process}</p>
              </div>
              <div>
                <h3 className="text-lg text-primary-text mb-2">Final Output</h3>
                <p>{project.finalOutput}</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="p-8 bg-secondary-bg rounded-xl border border-accent-bg/30">
              <h3 className="font-serif text-2xl text-primary-text mb-6 border-b border-accent-bg/30 pb-4">Overview</h3>
              <ul className="space-y-4">
                <li className="flex flex-col">
                  <span className="text-xs uppercase text-secondary-text tracking-wider">Type</span>
                  <span className="text-primary-text font-medium">{project.category}</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-xs uppercase text-secondary-text tracking-wider">Area</span>
                  <span className="text-primary-text font-medium">{project.area}</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-xs uppercase text-secondary-text tracking-wider">Location</span>
                  <span className="text-primary-text font-medium">{project.location}</span>
                </li>
              </ul>
            </div>
            
            <div className="p-8 bg-secondary-bg rounded-xl border border-accent-bg/30">
              <h3 className="font-serif text-2xl text-primary-text mb-6 border-b border-accent-bg/30 pb-4">Scope of Work</h3>
              <ul className="space-y-2 list-disc list-inside text-primary-text">
                {project.scope.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Viewer / Plan Section */}
      {project.id === 'motel-design' ? (
        <MotelPlanViewer />
      ) : (
        <section className="py-16 md:py-24 bg-secondary-bg">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-5xl text-primary-text mb-8">Interactive 3D Model</h2>
            <div className="w-full aspect-video bg-primary-bg rounded-xl border border-accent-bg/50 flex flex-col items-center justify-center relative overflow-hidden">
               {/* 3D Viewer Canvas would go here */}
               <div className="absolute inset-0 bg-accent-bg/10 flex flex-col items-center justify-center">
                  <span className="text-4xl mb-4 text-primary-text">3D</span>
                  <p className="text-secondary-text">Interactive GLTF/GLB Viewer Placeholder</p>
                  <div className="flex gap-4 mt-8">
                    <span className="px-4 py-2 border border-primary-text text-primary-text rounded text-sm">Rotate</span>
                    <span className="px-4 py-2 border border-primary-text text-primary-text rounded text-sm">Zoom</span>
                    <span className="px-4 py-2 border border-primary-text text-primary-text rounded text-sm">Pan</span>
                  </div>
               </div>
            </div>
          </div>
        </section>
      )}

      {/* Media Gallery */}
      <section className="py-16 md:py-24 container mx-auto px-4 md:px-8">
        <h2 className="font-serif text-3xl md:text-5xl text-primary-text mb-12 text-center">Gallery</h2>
        <InteractiveGallery gallery={project.gallery} title={project.title} />
      </section>

    </main>
  );
}
