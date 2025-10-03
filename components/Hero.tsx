import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const { ref: textRef, isVisible: textIsVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="hero" className="relative isolate flex min-h-screen items-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
        poster="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=" // Tiny transparent poster
      >
        <source src="https://res.cloudinary.com/dwocywg1b/video/upload/f_auto,q_auto/i_hm1ilc.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/60 to-black/30"></div>
      
      {/* Animated Glow */}
      <div 
        className="aurora-glow absolute top-1/2 left-1/2 -z-[9] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-blue-500/30"
        style={{ animationDuration: '20s' }}
      />


      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
            <div ref={textRef} className={`transition-all duration-1000 ${textIsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                KI, die wirklich für dich arbeitet.
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                Voice- & Chat-Agenten, die Termine buchen, Daten erfassen und Routine erledigen – fair, transparent, made in Austria.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4">
                  <a href="#demo" className="w-full sm:w-auto rounded-full bg-[#2e6df6] px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-blue-500/30">
                      Jetzt Demo anfragen
                  </a>
                  <a href="#pricing-teaser" className="w-full sm:w-auto text-base font-semibold leading-6 text-white rounded-full border border-white/50 px-8 py-3.5 transition-colors hover:border-white">
                      Kostenfrei starten
                  </a>
                </div>
                <div className="mt-10 text-sm text-gray-400">
                  DSGVO-konform · klare Preise · in Tagen einsatzbereit
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;