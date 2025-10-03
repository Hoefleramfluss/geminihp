import React, { useState } from 'react';
import type { FaqItem } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const faqs: FaqItem[] = [
  {
    question: 'Wie schnell sind wir live?',
    answer: 'In wenigen Tagen – nach Kickoff und kurzem Training mit deinen Inhalten.',
  },
  {
    question: 'Wie sicher sind meine Daten?',
    answer: 'Datensicherheit hat für uns höchste Priorität. Wir verwenden modernste Verschlüsselungstechnologien und halten uns an strenge Datenschutzstandards (DSGVO-konform). Ihre Daten werden sicher in zertifizierten Rechenzentren in Deutschland gehostet.',
  },
   {
    question: 'Lässt sich Workflow AI in meine bestehenden Systeme integrieren?',
    answer: 'Ja, unsere Plattform bietet eine breite Palette an Standard-Integrationen für gängige Software. Für spezielle Anforderungen bieten wir auch individuelle Integrationslösungen an.',
  },
];

const Faq: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} id="faq" className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`mx-auto max-w-4xl lg:text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-base font-semibold leading-7 text-[#2e6df6]">Häufig gestellte Fragen</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Antworten auf Ihre wichtigsten Fragen
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl">
          <dl className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className={`rounded-lg bg-white/5 p-6 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <dt>
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-start justify-between text-left text-white"
                  >
                    <span className="text-base font-semibold leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                       <svg
                        className={`h-6 w-6 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd className={`mt-2 pr-12 transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                  <p className="text-base leading-7 text-gray-300 pt-2">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Faq;