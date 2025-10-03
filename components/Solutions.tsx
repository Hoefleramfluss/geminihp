import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CheckCircleIcon } from './icons/CheckCircleIcon';

const products = [
  {
    name: 'WorkFlow.Med',
    subtitle: '„Jürgen“, dein Praxis-Agent',
    features: [
      'Nimmt Anrufe entgegen, erkennt das Anliegen, bucht Termine.',
      'Erfasst SV-Nummer & Kontaktdaten sicher.',
      'Rezeptverlängerung & Rückruflogik nach deinen Regeln.',
      'Anbindung an Kalender/Tools möglich.',
    ],
    cta: 'Mehr zu WorkFlow.Med',
  },
  {
    name: 'WorkFlow.Tec',
    subtitle: 'der Werkstätten-Assistent',
    features: [
        'Intelligente Annahme: Schaden, Fahrzeug, Wunschtermin.',
        'Verfügbarkeiten & Kostenvoranschlag-Workflow.',
        'Status-Updates per SMS/E-Mail.',
        'Entlastet Telefon & Tresen.',
    ],
    cta: 'Mehr zu WorkFlow.Tec',
  },
  {
    name: 'WorkFlow.Gastro',
    subtitle: '„Toni“, der Restaurantbot',
    features: [
        'Reservierungen, Anlass & Allergien – natürlich im Gespräch.',
        'Stammgasterkennung & charmante Beratung.',
        'Wetter-/Gastgarten-Logik, Küchenzeiten-Hinweise.',
        'Optional: Resmio-/Kassen-Integration.',
    ],
    cta: 'Mehr zu WorkFlow.Gastro',
  },
  {
    name: 'PersonalAgents',
    subtitle: 'dein Agent nach Maß',
    features: [
        'Sales, Support oder Terminservice – trainiert auf deine Abläufe.',
        'In kurzer Zeit live, skalierbar, messbar.',
        'Keine Blackbox: nachvollziehbar & kontrollierbar.',
    ],
    cta: 'Mehr zu PersonalAgents',
  },
];

const Products: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

    return (
        <section ref={ref} id="products" className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className={`mx-auto max-w-2xl lg:text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-base font-semibold leading-7 text-[#2e6df6]">Maßgeschneiderte Lösungen</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Automatisierung für jeden Anwendungsfall
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-400">
                        Egal welche Herausforderung, wir entwickeln die passende KI-gestützte Lösung, um Ihre spezifischen Geschäftsprozesse zu optimieren.
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {products.map((product, index) => (
                        <div 
                            key={product.name} 
                            className={`flex flex-col rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <h3 className="text-xl font-semibold leading-8 text-white">{product.name}</h3>
                            <p className="text-[#2e6df6] font-medium">{product.subtitle}</p>
                            <ul role="list" className="mt-6 space-y-3 text-base leading-7 text-gray-300 flex-1">
                                {product.features.map(feature => (
                                    <li key={feature} className="flex gap-x-3">
                                        <CheckCircleIcon className={`h-6 w-5 flex-none text-green-400 transition-transform duration-500 ${isVisible ? 'scale-100' : 'scale-0'}`} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="#demo" className="mt-8 rounded-full border border-white/20 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10 text-center">
                                {product.cta}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;