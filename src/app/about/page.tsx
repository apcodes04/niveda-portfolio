import React from 'react';
import Navbar from '@/components/layout/Navbar';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Download } from 'lucide-react';

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-primary-bg pt-24">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Profile Section */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <div className="aspect-[3/4] bg-secondary-bg rounded-xl mb-6 relative overflow-hidden border border-accent-bg/30">
                <img 
                  src="/images/Profile/Niveda.webp" 
                  alt="Ar. Niveda Tupasundarya" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h1 className="font-serif text-4xl text-primary-text mb-2">Ar. Niveda Tupasundarya</h1>
              <p className="text-luxury-accent font-medium uppercase tracking-widest text-sm mb-6">Architect | Interior Designer | 3D Visualizer</p>
              
              <div className="space-y-4 text-secondary-text mb-8">
                <p>📍 Berlin, Germany</p>
                <p>📞 +49 175 3808730</p>
                <p>✉️ nivt1999@gmail.com</p>
                
                <a 
                  href="https://www.linkedin.com/in/niveda-tupasundarya-642a39366/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-text hover:text-luxury-accent transition-colors pt-2"
                >
                  <LinkedinIcon />
                  <span>LinkedIn Profile</span>
                </a>
              </div>

              <a href="/resume.pdf" download="Niveda_Architectural_Portfolio.pdf" className="block">
                <Button variant="primary" className="w-full gap-2">
                  <Download size={18} />
                  Download CV
                </Button>
              </a>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-2/3 space-y-16">
            
            {/* Experience */}
            <section>
              <h2 className="font-serif text-3xl text-primary-text mb-8 border-b border-accent-bg/30 pb-4">Experience</h2>
              <div className="space-y-8">
                <Card className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-medium text-primary-text">InchMark Design Studio</h3>
                    <span className="text-luxury-accent text-sm font-medium">2023 — 2024</span>
                  </div>
                  <h4 className="text-sm uppercase tracking-wider text-secondary-text mb-4">Architect</h4>
                  <ul className="list-disc list-outside ml-4 space-y-2 text-secondary-text">
                    <li>Developed comprehensive interior and architectural design packages from concept through to execution.</li>
                    <li>Produced detailed technical drawings, material specifications, and custom millwork details for high-end projects.</li>
                    <li>Managed on-site coordination, labor supervision, and vendor relations to ensure project quality and timeline adherence.</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-medium text-primary-text">Ravid & Co.</h3>
                    <span className="text-luxury-accent text-sm font-medium">2022 — 2023</span>
                  </div>
                  <h4 className="text-sm uppercase tracking-wider text-secondary-text mb-4">Architect</h4>
                  <ul className="list-disc list-outside ml-4 space-y-2 text-secondary-text">
                    <li>Created 2D/3D architectural documentation and high-fidelity visualizations for project presentations.</li>
                    <li>Conducted site research and technical analysis to support the design and approval planning phases.</li>
                    <li>Coordinated with multi-disciplinary teams to align design intent with structural and technical requirements.</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-medium text-primary-text">Vallay Architect</h3>
                    <span className="text-luxury-accent text-sm font-medium">2021 (120 Days)</span>
                  </div>
                  <h4 className="text-sm uppercase tracking-wider text-secondary-text mb-4">Internship</h4>
                  <ul className="list-disc list-outside ml-4 space-y-2 text-secondary-text">
                    <li>Assisted in the preparation of client presentations and supported the drafting of preliminary design phases.</li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="font-serif text-3xl text-primary-text mb-8 border-b border-accent-bg/30 pb-4">Studies</h2>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                  <span className="text-luxury-accent text-sm font-medium whitespace-nowrap">2024 — 2026</span>
                  <div>
                    <h3 className="text-lg font-medium text-primary-text">BBW Hochschule, Berlin (Ongoing)</h3>
                    <p className="text-secondary-text">M.Sc. Sustainability and Smart Building Technology</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                  <span className="text-luxury-accent text-sm font-medium whitespace-nowrap">2017 — 2022</span>
                  <div>
                    <h3 className="text-lg font-medium text-primary-text">Bachelor of Architecture (B.Arch)</h3>
                    <p className="text-secondary-text">Mumbai University (2022)</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2 className="font-serif text-3xl text-primary-text mb-8 border-b border-accent-bg/30 pb-4">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-primary-text mb-4">Design & BIM</h3>
                  <p className="text-secondary-text">AutoCAD, Revit Architecture, Revit MEP, SketchUp, V-Ray, Lumion, Rhino.</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-primary-text mb-4">Digital Tools</h3>
                  <p className="text-secondary-text">Adobe Creative Suite (Photoshop, InDesign), MS Office.</p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-sm uppercase tracking-wider text-primary-text mb-4">Competencies</h3>
                  <p className="text-secondary-text">Technical Detailing, Site Management, ESG Basics, Project Coordination.</p>
                </div>
              </div>
            </section>

            {/* Languages & Status */}
            <section>
              <h2 className="font-serif text-3xl text-primary-text mb-8 border-b border-accent-bg/30 pb-4">Languages & Status</h2>
              <div className="space-y-4 text-secondary-text">
                <p><span className="font-medium text-primary-text mr-4">Languages:</span> English (Professional), German (A1), Hindi (Native), Marathi (Native).</p>
                <p><span className="font-medium text-primary-text mr-4">Status:</span> Valid German Residence Permit; Authorized for student employment (140 days/year).</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
