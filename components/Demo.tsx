import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import CodingBackground from './CodingBackground';

const Demo: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
    };

  return (
    <section ref={ref} id="demo" className="relative bg-black py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <CodingBackground />
        </div>
        {/* Animated Glow */}
        <div 
            className="aurora-glow absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] bg-blue-500/20"
            style={{ animationDelay: '0s' }}
        />
      <div className="relative isolate mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Bereit für spürbare Entlastung?</h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                    Starte mit einer Demo – und erlebe, wie viel dein Team gewinnt.
                </p>
            </div>
        </div>
        <div className="mx-auto mt-16 max-w-xl sm:mt-20">
          {submitted ? (
            <div className={`text-center rounded-lg bg-green-500/10 border border-green-500 p-8 transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                <h3 className="text-2xl font-bold text-green-400">Vielen Dank!</h3>
                <p className="mt-4 text-lg text-gray-300">Ihre Anfrage wurde erfolgreich übermittelt. Wir werden uns in Kürze bei Ihnen melden, um einen Termin zu vereinbaren.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                        <label htmlFor="name" className="block text-sm font-semibold leading-6 text-white">Name/Unternehmen</label>
                        <div className="mt-2.5">
                            <input type="text" name="name" id="name" autoComplete="organization" required placeholder="Wie dürfen wir dich ansprechen?" className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 placeholder:text-gray-500"/>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">E-Mail</label>
                        <div className="mt-2.5">
                            <input type="email" name="email" id="email" autoComplete="email" required placeholder="Für die Terminbestätigung & Unterlagen" className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 placeholder:text-gray-500"/>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-white">Telefon <span className="text-gray-400">(Optional)</span></label>
                        <div className="mt-2.5">
                            <input type="tel" name="phone" id="phone" autoComplete="tel" placeholder="Für schnelle Rückfragen" className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 placeholder:text-gray-500"/>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <button type="submit" className="block w-full rounded-full bg-[#2e6df6] px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-blue-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                        Unverbindlich anfragen
                    </button>
                </div>
                <p className="text-center text-xs text-gray-500">Wir verarbeiten deine Angaben ausschließlich zur Bearbeitung deiner Anfrage (DSGVO).</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Demo;