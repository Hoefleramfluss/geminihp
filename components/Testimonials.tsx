import React from 'react';
import type { Testimonial } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials: Testimonial[] = [
  {
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80',
    quote: 'Workflow AI hat unsere interne Rechnungsfreigabe revolutioniert. Was früher Tage dauerte, ist jetzt eine Sache von Minuten. Eine absolute Zeitersparnis und Fehlerquelle weniger.',
    name: 'Markus Weber',
    company: 'CFO, TechSolutions GmbH',
  },
  {
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80',
    quote: 'Die Implementierung war überraschend einfach und der Support erstklassig. Wir konnten die Automatisierung unseres Kundenservice-Postfachs in nur einer Woche live schalten.',
    name: 'Julia Schmidt',
    company: 'Head of Customer Success, Innovate AG',
  },
  {
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80',
    quote: 'Dank der intelligenten Datenextraktion sparen wir monatlich über 40 Arbeitsstunden bei der Verarbeitung von Lieferscheinen. Das Team kann sich endlich auf wichtigere Aufgaben konzentrieren.',
    name: 'Lukas Meier',
    company: 'Logistikleiter, Connect Logistics',
  },
];

const Testimonials: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} id="testimonials" className="relative isolate bg-gray-900 py-24 sm:py-32 overflow-hidden">
        {/* Animated Glow */}
        <div 
            className="aurora-glow absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] bg-blue-500/10"
            style={{ animationDelay: '3s' }}
        />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className={`mx-auto max-w-2xl text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-base font-semibold leading-7 text-[#2e6df6]">Was unsere Kunden sagen</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Vertrauen von führenden Unternehmen
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`flex flex-col justify-between rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <blockquote className="text-gray-300">
                  <p>“{testimonial.quote}”</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <img className="h-10 w-10 rounded-full" src={testimonial.avatar} alt={testimonial.name} />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400">{testimonial.company}</div>
                  </div>
                </figcaption>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
