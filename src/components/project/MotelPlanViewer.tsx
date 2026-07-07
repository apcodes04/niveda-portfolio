'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';

const PLANS = [
  {
    id: 'ground',
    title: 'Ground Floor Plan',
    description: 'I have designed the ground floor of the motel to include a range of facilities that cater to the diverse needs of our guests. These facilities include a comfortable dormitory for boys and girls, a dedicated administration staff area, a common toilet that is accessible to both boys and girls, as well as two spacious rooms, each of which can comfortably accommodate up to four people.',
    src: '/images/detail-images/MOTEL%20DESIGN/plans/ground%20floor/GROUND%20FLOOR%20PLAN.png',
    keySrc: '/images/detail-images/MOTEL%20DESIGN/plans/ground%20floor/GROUND%20FLOOR%20KEY%20Zoom.png',
    keyZoomSrc: '/images/detail-images/MOTEL%20DESIGN/plans/ground%20floor/GROUND%20FLOOR%20KEY%20Zoom.png',
    roomInfo: [
      { label: 'Dormitory for Boys', value: '36 Beds' },
      { label: 'Dormitory for Girls', value: '36 Beds' },
      { label: 'Administration Staff', value: '15' },
      { label: 'Common Toilet (Girls/Boys)', value: '6' },
      { label: '2 Rooms for 4 People', value: '8 Beds' },
    ],
  },
  {
    id: 'first',
    title: 'First Floor Plan',
    description: 'On the first floor of The motel, I have carefully designed the rooms to cater to the various needs of our guests. I have included eight spacious rooms that can comfortably accommodate up to four people each, providing a total of 36 beds. In addition, I have sixteen cozy rooms that are perfect for couples or solo travelers, each with enough space for two people and providing a total of 18 beds.',
    src: '/images/detail-images/MOTEL%20DESIGN/plans/first%20floor/FIRST%20FLOOR%20PLAN.png',
    keySrc: '/images/detail-images/MOTEL%20DESIGN/plans/first%20floor/FIRST%20FLOOR%20KEY.png',
    keyZoomSrc: '/images/detail-images/MOTEL%20DESIGN/plans/first%20floor/FIRST%20FLOOR%20KEY%20Zoom.png',
    roomInfo: [
      { label: 'Room for 4 people', value: '8 rooms (36 beds)' },
      { label: 'Room for 2 people', value: '16 rooms (18 beds)' },
    ],
  },
  {
    id: 'second',
    title: 'Second Floor Plan',
    description: 'On the second floor, I have designed three types of rooms - a four-person room, a two-person room, and a motel staff room. Each room is designed to provide comfort and convenience to the occupants while adhering to the design.',
    src: '/images/detail-images/MOTEL%20DESIGN/plans/second%20floor/SECOND%20FLOOR%20PLAN.png',
    keySrc: '/images/detail-images/MOTEL%20DESIGN/plans/second%20floor/SECOND%20FLOOR%20KEY%20Zoom.png',
    keyZoomSrc: '/images/detail-images/MOTEL%20DESIGN/plans/second%20floor/SECOND%20FLOOR%20KEY%20Zoom.png',
    roomInfo: [
      { label: 'Room for 4 people', value: '24 rooms 48 beds' },
      { label: 'Room for 2 people', value: '2 rooms 4 beds' },
      { label: 'Motel Staff room', value: '1 rooms 4 beds' },
    ],
  },
];

export function MotelPlanViewer() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState({ width: 300, height: 260, tz: 180 });
  const touchStartX = useRef<number | null>(null);

  // Handle responsive dimensions for the central 3D rotating cylinder
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // Mobile layout
        setDimensions({ width: 220, height: 160, tz: 100 });
      } else if (window.innerWidth < 1024) {
        // Tablet layout
        setDimensions({ width: 280, height: 200, tz: 140 });
      } else {
        // Desktop layout
        setDimensions({ width: 360, height: 250, tz: 190 });
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when plan is enlarged in fullscreen lightbox
  useEffect(() => {
    if (selectedImg !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImg]);

  const activePlan = PLANS[activeIdx];

  const rotateTo = (idx: number) => {
    const wrappedIdx = (idx + PLANS.length) % PLANS.length;
    setActiveIdx(wrappedIdx);
  };

  const handleCardClick = (idx: number) => {
    if (activeIdx === idx) {
      setSelectedImg(PLANS[idx].src);
    } else {
      rotateTo(idx);
    }
  };

  // Touch swipe support for mobile carousel rotation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        rotateTo(activeIdx + 1);
      } else {
        rotateTo(activeIdx - 1);
      }
    }
    touchStartX.current = null;
  };

  return (
    <section className="py-16 md:py-24 bg-secondary-bg border-y border-accent-bg/20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-luxury-accent font-semibold font-sans">Zoning & Layouts</span>
          <h2 className="font-serif text-3xl md:text-5xl text-primary-text mt-2 mb-4">Architectural Plan Viewer</h2>
          <p className="text-secondary-text max-w-xl mx-auto text-sm font-sans">
            Swipe left/right or click the chevrons to rotate. Click the center active plan to zoom fullscreen.
          </p>
        </div>

        {/* Top Segment: Room Info (Left), 3D Carousel (Center), Key Map (Right) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-stretch relative">
          
          {/* A. ROOM INFO (Top Left Side - Desktop only) */}
          <div className="hidden md:flex md:col-span-1 bg-primary-bg rounded-xl border border-accent-bg/30 p-6 flex-col justify-between shadow-sm min-h-[220px] md:min-h-auto">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-luxury-accent font-semibold mb-4 border-b border-accent-bg/10 pb-2 font-sans">
                Room Info
              </h3>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 font-sans"
                >
                  <div className="space-y-3 pt-1">
                    {activePlan.roomInfo.map((info, i) => (
                      <div key={i} className="flex flex-col border-b border-accent-bg/5 pb-2 last:border-0 last:pb-0">
                        <span className="text-[10px] uppercase text-secondary-text tracking-wider">{info.label}</span>
                        <span className="text-sm font-semibold text-primary-text mt-0.5">{info.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* B. MAIN PLAN - 3D SWINGING ROTATING CAROUSEL (Center) */}
          <div 
            className="md:col-span-2 bg-primary-bg rounded-xl border border-accent-bg/30 p-6 flex items-center justify-center min-h-[300px] md:min-h-[420px] shadow-sm relative group select-none overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Dynamic Heading inside the card box on top (Desktop & Mobile) */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 pointer-events-none select-none text-center w-[90%]">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={activeIdx}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    fontFamily: 'var(--font-barlow)',
                  }}
                  className="text-black font-semibold text-lg md:text-2xl tracking-[0.25em] uppercase whitespace-nowrap"
                >
                  {activePlan.title.replace(' Plan', '').toUpperCase()}
                </motion.h3>
              </AnimatePresence>
            </div>

            {/* Left Rotation Chevron */}
            <button
              onClick={() => rotateTo(activeIdx - 1)}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-25 bg-secondary-bg/95 hover:bg-secondary-bg text-primary-text border border-accent-bg/25 p-2 rounded-full cursor-pointer opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity shadow-md"
              aria-label="Rotate Left"
            >
              <ChevronLeft size={18} />
            </button>

            {/* 3D Perspective Viewport */}
            <div
              className="relative w-full flex items-center justify-center"
              style={{
                perspective: '1200px',
                perspectiveOrigin: '50% 50%',
                height: `${dimensions.height}px`,
              }}
            >
              {/* Cylindrical Rotating Container */}
              <div
                className="relative flex items-center justify-center"
                style={{
                  width: `${dimensions.width}px`,
                  height: `${dimensions.height}px`,
                  transformStyle: 'preserve-3d',
                  transform: `rotateY(${-activeIdx * 120}deg)`,
                  transition: 'transform 0.85s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {PLANS.map((plan, idx) => {
                  const isActive = activeIdx === idx;
                  const cardAngle = idx * 120;

                  return (
                    <div
                      key={plan.id}
                      onClick={() => handleCardClick(idx)}
                      className={`absolute rounded-xl overflow-hidden border transition-all duration-700 ease-out cursor-pointer group/card flex items-center justify-center p-3 ${
                        isActive
                          ? 'border-luxury-accent/60 shadow-[0_12px_30px_rgba(0,0,0,0.4)] z-20 opacity-100 bg-primary-bg'
                          : 'border-accent-bg/25 shadow-sm opacity-35 bg-primary-bg/90 blur-[0.5px] hover:opacity-65'
                      }`}
                      style={{
                        width: `${dimensions.width}px`,
                        height: `${dimensions.height}px`,
                        transform: `rotateY(${cardAngle}deg) translateZ(${dimensions.tz}px)`,
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'visible',
                      }}
                    >
                      <div className="relative w-full h-full flex items-center justify-center bg-secondary-bg/10 rounded-lg overflow-hidden">
                        <img
                          src={plan.src}
                          alt={plan.title}
                          className="max-w-full max-h-full object-contain pointer-events-none transition-transform duration-500 group-hover/card:scale-[1.01]"
                        />
                        {isActive && (
                          <div className="absolute top-3 right-3 bg-primary-bg/90 border border-accent-bg/30 p-1.5 rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity shadow-sm">
                            <ZoomIn size={14} className="text-luxury-accent" />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Rotation Chevron */}
            <button
              onClick={() => rotateTo(activeIdx + 1)}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-25 bg-secondary-bg/95 hover:bg-secondary-bg text-primary-text border border-accent-bg/25 p-2 rounded-full cursor-pointer opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity shadow-md"
              aria-label="Rotate Right"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* C. KEY MAP (Top Right Side) */}
          <div className="md:col-span-1 bg-primary-bg rounded-xl border border-accent-bg/30 p-6 flex flex-col justify-between shadow-sm min-h-[220px] md:min-h-auto group">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-luxury-accent font-semibold mb-4 border-b border-accent-bg/10 pb-2 font-sans">
                Key Map
              </h3>
              <div className="relative w-full h-[180px] md:h-[240px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {activePlan.keySrc ? (
                    <motion.div
                      key={activeIdx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => setSelectedImg(activePlan.keyZoomSrc || activePlan.keySrc)}
                      className="w-full h-full flex flex-col items-center justify-center cursor-zoom-in relative pt-2"
                    >
                      <img
                        src={activePlan.keySrc}
                        alt={`${activePlan.title} key map`}
                        className="max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-[1.02]"
                      />
                      <div className="absolute top-2 right-2 bg-secondary-bg/90 border border-accent-bg/30 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                        <ZoomIn size={14} className="text-luxury-accent" />
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="no-key"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.3 }}
                      exit={{ opacity: 0 }}
                      className="w-full h-full flex flex-col items-center justify-center text-center text-secondary-text text-xs p-4 select-none pointer-events-none"
                    >
                      <span className="font-serif italic text-secondary-text/60">No Key Map for this floor</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>

        {/* D. DESIGN DESCRIPTION (Bottom - Full Width) */}
        <div className="mt-8 bg-primary-bg rounded-xl border border-accent-bg/30 p-6 shadow-sm">
          
          {/* Mobile-only Room Info block, rendered inline with Description */}
          <div className="block md:hidden mb-6 border-b border-accent-bg/10 pb-4">
            <h3 className="text-xs uppercase tracking-widest text-luxury-accent font-semibold mb-4 border-b border-accent-bg/5 pb-1 font-sans">
              Room Info
            </h3>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-2 gap-x-4 gap-y-3 font-sans"
              >
                {activePlan.roomInfo.map((info, i) => (
                  <div key={i} className="flex flex-col border-b border-accent-bg/5 pb-1.5">
                    <span className="text-[9px] uppercase text-secondary-text tracking-wider">{info.label}</span>
                    <span className="text-xs font-semibold text-primary-text mt-0.5">{info.value}</span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <h3 className="text-xs uppercase tracking-widest text-luxury-accent font-semibold mb-4 border-b border-accent-bg/10 pb-2 font-sans">
            Design Description
          </h3>
          <AnimatePresence mode="wait">
            <motion.p
              key={activeIdx}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="text-secondary-text text-sm md:text-base leading-relaxed font-serif"
            >
              {activePlan.description}
            </motion.p>
          </AnimatePresence>
        </div>

      </div>

      {/* Fullscreen Plan Lightbox Overlay */}
      <AnimatePresence>
        {selectedImg !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 select-none touch-none cursor-zoom-out"
            onClick={() => setSelectedImg(null)}
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200 cursor-pointer z-55"
              aria-label="Close enlarged plan"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-[95vw] max-h-[85vh] md:max-w-[90vw] md:max-h-[90vh] flex items-center justify-center pointer-events-auto"
              onClick={(e) => e.stopPropagation()} // Prevent close on image click
            >
              <img
                src={selectedImg}
                alt="Enlarged floor plan"
                className="max-w-full max-h-[85vh] md:max-h-[90vh] object-contain rounded shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
