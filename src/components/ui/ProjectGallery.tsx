'use client';

import React from 'react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { Card } from './Card';

export function ProjectGallery() {
  return (
    <div className="w-full">
      {/* Mobile: Vertical list, Desktop: Masonry-like grid using CSS columns */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {projects.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id} className="block break-inside-avoid group">
            <Card className="relative overflow-hidden cursor-pointer bg-primary-bg">
              {/* Aspect ratio varied slightly based on id length to mock masonry effect */}
              <div 
                className="w-full bg-secondary-bg/50 relative overflow-hidden group-hover:opacity-90 transition-opacity" 
                style={{ aspectRatio: project.id.length % 2 === 0 ? '4/5' : '1/1' }}
              >
                <img 
                  src={project.coverImage} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl text-primary-text group-hover:text-luxury-accent transition-colors">{project.title}</h3>
                  <span className="text-sm font-medium text-luxury-accent">{project.year}</span>
                </div>
                <p className="text-secondary-text text-sm mb-4 line-clamp-2">{project.shortDescription}</p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs uppercase tracking-wider bg-secondary-bg px-2 py-1 rounded text-primary-text">{project.category}</span>
                  <span className="text-xs uppercase tracking-wider bg-secondary-bg px-2 py-1 rounded text-primary-text">{project.location}</span>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
