import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const navigation = {
  solutions: [
    { name: 'WorkFlow.Med', href: '#products' },
    { name: 'WorkFlow.Tec', href: '#products' },
    { name: 'WorkFlow.Gastro', href: '#products' },
    { name: 'PersonalAgents', href: '#products' },
  ],
  company: [
    { name: 'Über uns', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Partner', href: '#' },
  ],
  legal: [
    { name: 'Datenschutz', href: '#datenschutz' },
    { name: 'Impressum', href: '#impressum' },
  ],
}

const Footer: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <footer ref={ref} className="bg-black/50" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className={`mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <img
              className="h-10"
              src="https://i.ibb.co/XrxVxvc8/logo.png"
              alt="Workflow AI"
            />
            <p className="text-sm leading-6 text-gray-300">
              Autonomie statt Apps. KI, die sich deinen Abläufen anpasst – nicht umgekehrt.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Lösungen</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Unternehmen</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Rechtliches</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">&copy; {new Date().getFullYear()} Workflow AI. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;