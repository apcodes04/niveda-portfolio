'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { cn } from '../ui/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '/#projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isProjectPage = pathname.startsWith('/projects/');

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'bg-primary-bg/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {isProjectPage ? (
          <Link
            href="/#projects"
            className="flex items-center gap-2 group text-primary-text hover:text-luxury-accent transition-colors py-2 px-1 text-sm uppercase tracking-widest font-semibold cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back</span>
          </Link>
        ) : (
          <>
            {/* Logo */}
            <Link href="/" className="font-serif text-2xl tracking-wider text-primary-text font-semibold">
              NIVEDA<span className="text-luxury-accent">.</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm uppercase tracking-widest text-primary-text hover:text-luxury-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="border border-primary-text px-6 py-2 text-sm uppercase tracking-widest hover:bg-primary-text hover:text-primary-bg transition-colors"
              >
                Consult
              </Link>
            </nav>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-primary-text p-2 cursor-pointer bg-transparent border-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      {!isProjectPage && mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-primary-bg border-t border-accent-bg/20 shadow-lg py-4 flex flex-col px-4 gap-4 h-screen">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg uppercase tracking-widest text-primary-text py-3 border-b border-accent-bg/10"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
