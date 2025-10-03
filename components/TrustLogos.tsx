import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const TrustLogos: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

    return (
        <section ref={ref} id="trust" className="bg-[#0a0a0a] py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div 
                    className={`text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                >
                    <h2 className="text-lg font-medium tracking-wide text-gray-400">
                        Vertraut von Teams in Praxis, Werkstatt & Gastronomie.
                    </h2>
                    {/* Optional: Add client logos here in the future */}
                </div>
            </div>
        </section>
    );
};

export default TrustLogos;