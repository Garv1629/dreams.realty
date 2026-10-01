"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function PropertyGallery({ images, has3D = false }: { images: string[], has3D?: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [show3DViewer, setShow3DViewer] = useState(false);

  // Keyboard navigation for fullscreen
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isFullscreen) return;
    if (e.key === "Escape") setIsFullscreen(false);
    if (e.key === "ArrowLeft") setCurrentIndex(prev => Math.max(0, prev - 1));
    if (e.key === "ArrowRight") setCurrentIndex(prev => Math.min(images.length - 1, prev + 1));
  }, [isFullscreen, images.length]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll when fullscreen
  useEffect(() => {
    if (isFullscreen || show3DViewer) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isFullscreen, show3DViewer]);

  if (!images || images.length === 0) {
    return <div className="w-full aspect-[21/9] bg-stone-muted/10 flex items-center justify-center font-bold uppercase tracking-widest text-stone-muted">No Images Available</div>;
  }

  const primaryImage = images[0];
  const gridImages = images.slice(1, 4);

  return (
    <div className="mb-12">
      {/* Full-width visual opening + Grid preview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 h-[50vh] md:h-[60vh] max-h-[600px] mb-4">
        {/* Main large image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:col-span-2 relative bg-stone-muted/10 overflow-hidden group cursor-pointer"
          onClick={() => { setCurrentIndex(0); setIsFullscreen(true); }}
        >
          <Image 
            src={primaryImage} 
            alt="Primary Property View" 
            fill 
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 66vw"
            priority
          />
          <div className="absolute inset-0 bg-charcoal-deep/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>

        {/* Side Grid */}
        <div className="hidden md:flex flex-col gap-2 h-full">
          {gridImages.map((img, i) => (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + (i * 0.1) }}
              key={i + 1} 
              className="relative flex-1 bg-stone-muted/10 overflow-hidden group cursor-pointer"
              onClick={() => { setCurrentIndex(i + 1); setIsFullscreen(true); }}
            >
              <Image 
                src={img} 
                alt={`Property view ${i + 2}`} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="33vw"
              />
              <div className="absolute inset-0 bg-charcoal-deep/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {i === gridImages.length - 1 && images.length > 4 && (
                <div className="absolute inset-0 bg-charcoal-deep/60 flex items-center justify-center text-ivory-warm font-serif text-2xl group-hover:bg-charcoal-deep/80 transition-colors">
                  +{images.length - 4} More
                </div>
              )}
            </motion.div>
          ))}
          {/* If there are fewer than 3 extra images, fill the space */}
          {gridImages.length < 3 && Array.from({ length: 3 - gridImages.length }).map((_, i) => (
             <div key={`empty-${i}`} className="relative flex-1 bg-stone-muted/5 border border-stone-muted/10" />
          ))}
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <button 
          onClick={() => { setCurrentIndex(0); setIsFullscreen(true); }}
          className="border border-charcoal-deep text-charcoal-deep px-6 py-3 text-sm uppercase tracking-widest font-bold hover:bg-charcoal-deep hover:text-ivory-warm transition-colors flex items-center gap-2"
        >
          <span>⤢</span> View All {images.length} Photos
        </button>
        
        {has3D && (
          <button 
            onClick={() => setShow3DViewer(true)}
            className="bg-brass-elegant text-white px-6 py-3 text-sm uppercase tracking-widest font-bold shadow-sm hover:bg-charcoal-deep transition-colors flex items-center gap-2"
          >
             <span>👁</span> Explore in 3D
          </button>
        )}
      </div>

      {/* Fullscreen Gallery */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-charcoal-deep/98 flex flex-col"
          >
            {/* Top Bar */}
            <div className="flex justify-between items-center p-6 text-ivory-warm">
              <span className="font-bold uppercase tracking-widest text-sm text-stone-muted">
                {currentIndex + 1} / {images.length}
              </span>
              <button 
                onClick={() => setIsFullscreen(false)}
                className="w-12 h-12 flex items-center justify-center text-3xl hover:text-brass-elegant transition-colors"
                aria-label="Close gallery"
              >
                ×
              </button>
            </div>

            {/* Main Image Area */}
            <div className="flex-1 relative flex items-center justify-center overflow-hidden px-16">
              <button 
                onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                className={`absolute left-4 lg:left-8 text-ivory-warm text-5xl p-4 hover:text-brass-elegant transition-colors z-10 ${currentIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'opacity-70 hover:opacity-100'}`}
                disabled={currentIndex === 0}
                aria-label="Previous image"
              >
                ‹
              </button>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <img 
                    src={images[currentIndex]} 
                    alt={`Gallery view ${currentIndex + 1}`} 
                    className="max-w-full max-h-full object-contain drop-shadow-2xl" 
                  />
                </motion.div>
              </AnimatePresence>

              <button 
                onClick={() => setCurrentIndex(prev => Math.min(images.length - 1, prev + 1))}
                className={`absolute right-4 lg:right-8 text-ivory-warm text-5xl p-4 hover:text-brass-elegant transition-colors z-10 ${currentIndex === images.length - 1 ? 'opacity-20 cursor-not-allowed' : 'opacity-70 hover:opacity-100'}`}
                disabled={currentIndex === images.length - 1}
                aria-label="Next image"
              >
                ›
              </button>
            </div>

            {/* Thumbnails */}
            <div className="h-24 md:h-32 p-4 flex justify-center gap-2 overflow-x-auto hide-scrollbar bg-black/20">
              {images.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrentIndex(i)}
                  className={`relative h-full aspect-video overflow-hidden transition-all duration-300 ${i === currentIndex ? 'border-2 border-brass-elegant opacity-100 scale-105' : 'opacity-40 hover:opacity-80'}`}
                >
                  <Image src={img} alt={`Thumbnail ${i + 1}`} fill className="object-cover" sizes="150px" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D Viewer Modal (Placeholder) */}
      <AnimatePresence>
        {show3DViewer && (
           <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal-deep flex flex-col"
          >
             <div className="flex justify-between items-center p-6 text-ivory-warm border-b border-stone-muted/20">
              <span className="font-bold uppercase tracking-widest text-sm text-brass-elegant">
                3D Virtual Tour
              </span>
              <button 
                onClick={() => setShow3DViewer(false)}
                className="w-12 h-12 flex items-center justify-center text-3xl hover:text-brass-elegant transition-colors"
                aria-label="Close 3D viewer"
              >
                ×
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center text-stone-muted">
                 <p className="text-6xl mb-4">👁</p>
                 <p className="font-serif text-2xl text-ivory-warm mb-2">Interactive 3D Viewer</p>
                 <p className="max-w-md mx-auto">This listing contains verified 3D assets. The interactive walkthrough viewer will load here.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
