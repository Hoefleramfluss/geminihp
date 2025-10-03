
import React, { useState, useMemo } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const RoiCalculator: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [employees, setEmployees] = useState(10);
  const [hours, setHours] = useState(5);
  const [rate, setRate] = useState(40);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(value);
  };

  const { weeklySavings, monthlySavings, yearlySavings } = useMemo(() => {
    const weekly = employees * hours * rate;
    const monthly = weekly * 4.33;
    const yearly = monthly * 12;
    return {
      weeklySavings: formatCurrency(weekly),
      monthlySavings: formatCurrency(monthly),
      yearlySavings: formatCurrency(yearly),
    };
  }, [employees, hours, rate]);

  return (
    <section ref={ref} id="roi-calculator" className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ihr potenzielles Einsparpotenzial</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Finden Sie heraus, wie viel Zeit und Geld Ihr Unternehmen durch die Automatisierung von Routineaufgaben einsparen kann. Passen Sie die Regler an Ihre Unternehmensdaten an.
            </p>
            <div className="mt-10 space-y-8">
              <div>
                <label htmlFor="employees" className="flex justify-between text-base font-medium text-white">
                  <span>Mitarbeiter, die die Aufgabe ausführen</span>
                  <span className="font-bold text-[#2e6df6]">{employees}</span>
                </label>
                <input
                  id="employees"
                  type="range"
                  min="1"
                  max="100"
                  value={employees}
                  onChange={(e) => setEmployees(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div>
                <label htmlFor="hours" className="flex justify-between text-base font-medium text-white">
                    <span>Stunden pro Mitarbeiter pro Woche</span>
                    <span className="font-bold text-[#2e6df6]">{hours}</span>
                </label>
                <input
                  id="hours"
                  type="range"
                  min="1"
                  max="40"
                  value={hours}
                  onChange={(e) => setHours(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div>
                <label htmlFor="rate" className="flex justify-between text-base font-medium text-white">
                    <span>Durchschnittlicher Stundensatz</span>
                    <span className="font-bold text-[#2e6df6]">{formatCurrency(rate)}</span>
                </label>
                <input
                  id="rate"
                  type="range"
                  min="15"
                  max="150"
                  value={rate}
                  onChange={(e) => setRate(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className={`rounded-3xl bg-gray-900 p-8 ring-1 ring-white/10 transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <h3 className="text-xl font-semibold leading-8 text-white">Geschätzte Einsparungen</h3>
            <div className="mt-8 space-y-6">
              <div className="flex justify-between items-baseline">
                <p className="text-gray-300">Wöchentlich</p>
                <p className="text-3xl font-bold text-white">{weeklySavings}</p>
              </div>
              <div className="flex justify-between items-baseline">
                <p className="text-gray-300">Monatlich</p>
                <p className="text-4xl font-bold text-[#2e6df6]">{monthlySavings}</p>
              </div>
              <div className="flex justify-between items-baseline">
                <p className="text-gray-300">Jährlich</p>
                <p className="text-5xl font-bold text-white">{yearlySavings}</p>
              </div>
            </div>
             <p className="mt-8 text-sm text-gray-500">
              *Diese Berechnung ist eine Schätzung und dient nur zu Demonstrationszwecken. Die tatsächlichen Einsparungen können variieren.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoiCalculator;
