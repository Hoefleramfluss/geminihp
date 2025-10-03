import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import CodingBackground from './CodingBackground';

const valueProps = [
  {
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.5 3.75 4.5-3.75m-9 8.25h9" />
        </svg>
    ),
    title: 'Natürlich klingende Stimmen & realistische Dialoge',
  },
  {
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V8.25a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 8.25v7.5A2.25 2.25 0 006.75 18z" />
        </svg>
    ),
    title: 'Freie Intenterkennung statt starrer Menüs',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a16.5 16.5 0 10-16.5 16.5H15.59z" />
      </svg>
    ),
    title: 'Messbar & optimierbar: Reports, Transkripte, Qualitäts-Checks',
  },
  {
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
    ),
    title: 'Schnelles Onboarding – Inhalte von dir, KI macht den Rest',
  },
  {
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 11.21 12.77 10.5 12 10.5s-1.536.71-2.121 1.256c-1.172.879-1.172 2.303 0 3.182z" />
        </svg>
    ),
    title: 'Fair & transparent: klare Pläne, keine versteckten Gebühren',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: 'DSGVO-konform, verantwortungsvoll, „Made in Austria“',
  }
];

const ValueProps: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

    return (
        <section ref={ref} id="value-props" className="relative bg-black py-24 sm:py-32 overflow-hidden">
             <div className="absolute inset-0 opacity-10">
                <CodingBackground />
            </div>
            <div className="relative isolate mx-auto max-w-7xl px-6 lg:px-8">
                <div className={`mx-auto max-w-2xl lg:text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-base font-semibold leading-7 text-[#2e6df6]">Alles was Sie brauchen</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Eine Plattform, die mitdenkt
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-400">
                        Workflow AI bietet Ihnen eine umfassende Suite von Funktionen, die darauf ausgelegt sind, Ihre Arbeit zu vereinfachen und Ihr Unternehmen voranzubringen.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                        {valueProps.map((prop, index) => (
                            <div key={prop.title} className={`relative pl-16 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                                <dt className="text-base font-semibold leading-7 text-white">
                                    <div className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#2e6df6] transition-transform duration-500 ${isVisible ? 'scale-100 rotate-0' : 'scale-50 -rotate-12'}`}>
                                        {React.cloneElement(prop.icon, { className: 'h-6 w-6 text-white' })}
                                    </div>
                                    {prop.title}
                                </dt>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default ValueProps;