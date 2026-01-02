'use client'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search, Heart, ShoppingCart } from 'lucide-react';

const ClothingStore = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [windowWidth, setWindowWidth] = useState(1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides = [
    {
      id: 1,
      category: 'Mujer',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=900&fit=crop',
      link: '/mujeres',
      gradient: 'from-red-500/30 via-rose-500/20',
      hasOffer: true,
      discount: '50% OFF'
    },
    {
      id: 2,
      category: 'Hombre',
      image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=600&h=900&fit=crop',
      link: '/hombres',
      gradient: 'from-red-600/30 via-red-500/20',
      hasOffer: false
    },
    {
      id: 3,
      category: 'Familia',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=900&fit=crop',
      link: '/familia',
      gradient: 'from-rose-500/30 via-pink-500/20',
      hasOffer: true,
      discount: '30% OFF'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const translateValue =
    windowWidth < 640 ? 75 :
    windowWidth < 768 ? 85 :
    windowWidth < 1024 ? 95 : 105;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-rose-50 to-pink-50">
      {/* HERO / CAROUSEL */}
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="relative w-full max-w-[1600px]">
          <div className="relative h-[650px] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                {slides.map((slide, index) => {
                  let position = index - currentSlide;
                  if (position < -1) position += slides.length;
                  if (position > 1) position -= slides.length;

                  const isCenter = position === 0;
                  const isVisible = Math.abs(position) <= 1;

                  return (
                    <a
                      key={slide.id}
                      href={slide.link}
                      className={`absolute transition-all duration-700 ${
                        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}
                      style={{
                        transform: `
                          translateX(${position * translateValue}%)
                          scale(${isCenter ? 1 : 0.75})
                        `,
                        zIndex: isCenter ? 30 : 10,
                      }}
                    >
                      <div className={`relative overflow-hidden rounded-2xl ${
                        isCenter
                          ? 'w-[420px] h-[600px] ring-4 ring-red-600'
                          : 'w-[340px] h-[500px]'
                      }`}>
                        <img
                          src={slide.image}
                          alt={slide.category}
                          className="w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                        <div className="absolute bottom-6 left-6 text-white">
                          <h3 className="text-3xl font-bold">{slide.category}</h3>
                          <p className="text-sm">Descubrir colección</p>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Flechas */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClothingStore;
