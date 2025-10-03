import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import CodingBackground from './CodingBackground';

const steps = [
  {
    icon: '1',
    title: 'Kickoff & Setup',
    description: 'Ziele abstimmen, Agent aktivieren.',
  },
  {
    icon: '2',
    title: 'Training mit deinen Inhalten',
    description: 'Begrüßung, FAQ, Formulare, Stil.',
  },
  {
    icon: '3',
    title: 'Live gehen & verbessern',
    description: 'messen, verfeinern, skalieren.',
  },
];

const HowItWorks: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
    return (
        <section ref={ref} id="how-it-works" className="relative bg-gray-900 py-24 sm:py-32 overflow-hidden">
             <div className="absolute inset-0 opacity-10">
                <CodingBackground />
            </div>
            <div className="relative isolate mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl`}>
                        In 3 Schritten startklar
                    </p>
                    <p className={`mt-6 text-lg leading-8 text-gray-400 transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        Unser Prozess ist darauf ausgelegt, Sie schnell und unkompliziert zu entlasten.
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
                    <dl className="grid grid-cols-1 gap-y-12 lg:grid-cols-3 lg:gap-x-8">
                        {steps.map((step, index) => (
                            <div 
                                key={step.title} 
                                className={`relative transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} 
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 text-center">
                                    <dt className="flex flex-col items-center gap-y-4">
                                        <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-[#2e6df6] text-xl font-bold ring-8 ring-gray-900 transition-transform duration-500 ${isVisible ? 'scale-100' : 'scale-0'}`}>
                                            {step.icon}
                                        </div>
                                        <span className="text-base font-semibold leading-7 text-white">{step.title}</span>
                                    </dt>
                                    <dd className="mt-2 text-base leading-7 text-gray-400">{step.description}</dd>
                                </div>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;