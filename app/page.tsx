'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Search, Heart, ShoppingCart } from 'lucide-react';

const ClothingStore = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-rose-50 to-pink-50">
      {/* Navigation Header */}
      <nav className="bg-white/95 backdrop-blur-lg fixed w-full z-50 shadow-lg border-b border-red-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src="/assets/ropa.jpeg" 
                alt="INDU BDJ Logo" 
                className="h-10 md:h-12 lg:h-14 w-auto object-contain"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a href="#inicio" className="text-sm lg:text-base text-gray-700 hover:text-red-600 transition-all font-medium hover:scale-105">
                Inicio
              </a>
              <a href="#mujeres" className="text-sm lg:text-base text-gray-700 hover:text-red-600 transition-all font-medium hover:scale-105">
                Mujeres
              </a>
              <a href="#hombres" className="text-sm lg:text-base text-gray-700 hover:text-red-600 transition-all font-medium hover:scale-105">
                Hombres
              </a>
              <a href="#rebajas" className="text-sm lg:text-base text-gray-700 hover:text-red-600 transition-all font-medium hover:scale-105">
                Rebajas
              </a>
              <a href="#contacto" className="text-sm lg:text-base text-gray-700 hover:text-red-600 transition-all font-medium hover:scale-105">
                Contacto
              </a>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <button className="text-gray-700 hover:text-red-600 transition-all p-2 hover:bg-red-50 rounded-full hover:shadow-md">
                <Search size={20} className="md:w-5 md:h-5" />
              </button>
              <button className="text-gray-700 hover:text-red-600 transition-all p-2 hover:bg-red-50 rounded-full hover:shadow-md">
                <Heart size={20} className="md:w-5 md:h-5" />
              </button>
              <button className="text-gray-700 hover:text-red-600 transition-all p-2 hover:bg-red-50 rounded-full hover:shadow-md">
                <ShoppingCart size={20} className="md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-16 md:pt-20 min-h-screen flex flex-col items-center justify-center px-2 sm:px-4 py-8 md:py-12">
        {/* Title */}
        <div className="mb-8 md:mb-12 lg:mb-16 text-center px-4">
          <div className="inline-block relative">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-rose-600 border-2 md:border-[5px] border-red-600 py-3 md:py-5 lg:py-7 px-6 md:px-12 lg:px-16 bg-white/80 backdrop-blur-md shadow-[0_20px_70px_rgba(220,38,38,0.3)] hover:shadow-[0_25px_80px_rgba(220,38,38,0.4)] transition-all duration-300 relative z-10">
              TIENDA DE ROPA
            </h2>
            {/* Decorative corners */}
            <div className="absolute -top-2 -left-2 w-6 h-6 md:w-8 md:h-8 border-t-4 border-l-4 border-red-600"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 border-t-4 border-r-4 border-red-600"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 md:w-8 md:h-8 border-b-4 border-l-4 border-red-600"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 md:w-8 md:h-8 border-b-4 border-r-4 border-red-600"></div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-[1600px]">
          <div className="relative h-[450px] sm:h-[550px] md:h-[650px] lg:h-[750px] xl:h-[850px] overflow-hidden">
            {/* Carousel Track */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center perspective-1000">
                {slides.map((slide, index) => {
                  let position = index - currentSlide;
                  
                  if (position < -1) position += slides.length;
                  if (position > 1) position -= slides.length;
                  
                  const isCenter = position === 0;
                  const isLeft = position === -1;
                  const isRight = position === 1;
                  const isVisible = Math.abs(position) <= 1;

                  // Calculate responsive translateX percentage using CSS classes instead of window
                  const getTranslateX = () => {
                    return position * 95; // Default percentage
                  };

                  return (
                    <a
                      key={slide.id}
                      href={slide.link}
                      className={`absolute transition-all duration-700 ease-in-out ${
                        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}
                      style={{
                        transform: `
                          translateX(${getTranslateX()}%) 
                          scale(${isCenter ? 1 : 0.75}) 
                          translateZ(${isCenter ? 0 : -100}px)
                        `,
                        zIndex: isCenter ? 30 : isVisible ? 20 : 10,
                      }}
                    >
                      <div className={`relative overflow-hidden rounded-xl md:rounded-2xl transition-all duration-700 ${
                        isCenter 
                          ? 'shadow-[0_20px_60px_-15px_rgba(220,38,38,0.4)] ring-2 md:ring-4 ring-red-600' 
                          : 'shadow-[0_10px_40px_-10px_rgba(220,38,38,0.3)]'
                      } ${
                        isCenter 
                          ? 'w-[280px] sm:w-[340px] md:w-[420px] lg:w-[500px] xl:w-[550px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px]'
                          : 'w-[220px] sm:w-[280px] md:w-[340px] lg:w-[400px] xl:w-[450px] h-[330px] sm:h-[420px] md:h-[500px] lg:h-[580px] xl:h-[650px]'
                      }`}>
                        
                        {/* Offer Badge */}
                        {slide.hasOffer && (
                          <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-black text-xs md:text-sm lg:text-base shadow-[0_8px_20px_rgba(220,38,38,0.5)] animate-pulse border-2 border-white/30">
                            <span className="relative z-10">🔥 {slide.discount}</span>
                          </div>
                        )}
                        
                        {/* Image */}
                        <img
                          src={slide.image}
                          alt={slide.category}
                          className={`w-full h-full object-cover transition-transform duration-700 ${
                            isCenter ? 'scale-100' : 'scale-105'
                          }`}
                        />
                        
                        {/* Gradient Overlay with Color */}
                        <div className={`absolute inset-0 bg-gradient-to-t ${slide.gradient} to-transparent transition-opacity duration-700`} />
                        
                        {/* Dark Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-700 ${
                          isCenter ? 'opacity-60' : 'opacity-80'
                        }`} />
                        
                        {/* Content */}
                        <div className={`absolute inset-0 flex flex-col justify-end transition-all duration-700 ${
                          isCenter ? 'p-5 sm:p-6 md:p-8' : 'p-4 sm:p-5 md:p-6'
                        }`}>
                          <h3 className={`font-bold text-white mb-1 md:mb-2 transition-all duration-700 ${
                            isCenter 
                              ? 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl' 
                              : 'text-xl sm:text-2xl md:text-3xl'
                          }`}>
                            {slide.category}
                          </h3>
                          <p className={`text-gray-200 transition-all duration-700 ${
                            isCenter 
                              ? 'text-sm sm:text-base md:text-lg opacity-100' 
                              : 'text-xs sm:text-sm opacity-80'
                          }`}>
                            {isCenter ? 'Descubre la colección' : 'Ver más'}
                          </p>
                          {isCenter && (
                            <button className="mt-3 sm:mt-4 md:mt-6 bg-gradient-to-r from-red-600 to-red-500 text-white px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold hover:from-red-700 hover:to-red-600 transition-all transform hover:scale-105 hover:shadow-xl active:scale-95 w-fit shadow-lg text-sm sm:text-base border border-red-400/30">
                              Explorar
                            </button>
                          )}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-1 sm:left-2 md:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-40 bg-white hover:bg-red-50 p-2 sm:p-3 md:p-4 rounded-full transition-all hover:scale-110 shadow-[0_8px_30px_rgba(220,38,38,0.15)] hover:shadow-[0_12px_40px_rgba(220,38,38,0.25)] border border-red-100/50 active:scale-95"
              aria-label="Previous"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7 text-red-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-1 sm:right-2 md:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-40 bg-white hover:bg-red-50 p-2 sm:p-3 md:p-4 rounded-full transition-all hover:scale-110 shadow-[0_8px_30px_rgba(220,38,38,0.15)] hover:shadow-[0_12px_40px_rgba(220,38,38,0.25)] border border-red-100/50 active:scale-95"
              aria-label="Next"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7 text-red-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 md:mt-8 lg:mt-12 space-x-2 md:space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 md:h-3 rounded-full transition-all ${
                  currentSlide === index
                    ? 'bg-red-600 w-8 md:w-10 shadow-[0_0_10px_rgba(220,38,38,0.5)]'
                    : 'bg-red-300 w-2 md:w-3 hover:bg-red-500'
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-white/95 backdrop-blur-lg rounded-full shadow-[0_10px_40px_rgba(220,38,38,0.2)] px-4 sm:px-6 py-2.5 sm:py-3 border border-red-100/50">
        <div className="flex items-center space-x-4 sm:space-x-6">
          <a href="#mujeres" className="text-gray-700 hover:text-red-600 text-xs sm:text-sm font-medium transition-colors">Mujeres</a>
          <a href="#hombres" className="text-gray-700 hover:text-red-600 text-xs sm:text-sm font-medium transition-colors">Hombres</a>
          <a href="#rebajas" className="text-gray-700 hover:text-red-600 text-xs sm:text-sm font-medium transition-colors">Rebajas</a>
        </div>
      </div>
    </div>
  );
};

export default ClothingStore;
