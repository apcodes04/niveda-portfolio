import React from 'react';
import Navbar from '@/components/layout/Navbar';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-primary-bg pt-24">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl text-primary-text mb-6">Let&apos;s Create Together</h1>
            <p className="text-secondary-text text-lg md:text-xl max-w-2xl mx-auto">
              Ready to elevate your architectural vision? Get in touch to discuss your next project, collaboration, or consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h3 className="text-sm uppercase tracking-widest text-luxury-accent mb-6">Contact Info</h3>
                <div className="space-y-6 text-primary-text">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">📍</div>
                    <div>
                      <h4 className="font-medium text-lg">Location</h4>
                      <p className="text-secondary-text">Berlin, Germany</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1">📞</div>
                    <div>
                      <h4 className="font-medium text-lg">Phone</h4>
                      <p className="text-secondary-text">+49 175 3808730</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1">✉️</div>
                    <div>
                      <h4 className="font-medium text-lg">Email</h4>
                      <p className="text-secondary-text">nivt1999@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-widest text-luxury-accent mb-6">Availability</h3>
                <p className="text-secondary-text leading-relaxed">
                  Currently accepting new projects and freelance opportunities. Available for local and international commissions.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-secondary-bg p-8 rounded-xl border border-accent-bg/30">
              <h3 className="font-serif text-2xl text-primary-text mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-text mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-primary-bg border border-accent-bg/50 rounded-md px-4 py-3 text-primary-text focus:outline-none focus:ring-1 focus:ring-luxury-accent transition-shadow"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-text mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-primary-bg border border-accent-bg/50 rounded-md px-4 py-3 text-primary-text focus:outline-none focus:ring-1 focus:ring-luxury-accent transition-shadow"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-primary-text mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-primary-bg border border-accent-bg/50 rounded-md px-4 py-3 text-primary-text focus:outline-none focus:ring-1 focus:ring-luxury-accent transition-shadow"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-text mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-primary-bg border border-accent-bg/50 rounded-md px-4 py-3 text-primary-text focus:outline-none focus:ring-1 focus:ring-luxury-accent transition-shadow resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <Button variant="primary" className="w-full py-4 text-lg">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
