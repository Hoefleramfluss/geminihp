import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Pricing: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

    const [calls, setCalls] = useState(300);
    const [profile, setProfile] = useState(3.5);

    const sliderRef = useRef<HTMLInputElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);

    const plans = useMemo(() => [
        { name: 'Starter', base: 89, incl: 300, over: 0.23 },
        { name: 'Business', base: 219, incl: 900, over: 0.22 },
        { name: 'Scale', base: 499, incl: 2400, over: 0.20 }
    ], []);

    const { totalMinutes, recommendedPlan, estimatedPrice } = useMemo(() => {
        const minutes = calls * profile;

        let best = { name: '', cost: Infinity };
        for (const p of plans) {
            const overage = Math.max(0, minutes - p.incl);
            const cost = p.base + overage * p.over;
            if (cost < best.cost) {
                best = { name: p.name, cost: cost };
            }
        }

        const uiName = best.name === 'Scale' ? 'Enterprise (Richtwert)' : best.name;
        const priceFormatted = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(best.cost);

        return {
            totalMinutes: Math.round(minutes),
            recommendedPlan: uiName,
            estimatedPrice: `${priceFormatted} / Monat`,
        };
    }, [calls, profile, plans]);

    useEffect(() => {
        const slider = sliderRef.current;
        const tooltip = tooltipRef.current;
        if (slider && tooltip) {
            const updateTooltipPosition = () => {
                const min = parseFloat(slider.min);
                const max = parseFloat(slider.max);
                const val = parseFloat(slider.value);
                const percent = (val - min) / (max - min);
                const thumbWidth = 24;
                const tooltipWidth = tooltip.offsetWidth;
                const newPosition = percent * (slider.offsetWidth - thumbWidth) + (thumbWidth / 2) - (tooltipWidth / 2);
                tooltip.style.left = `${newPosition}px`;
                slider.style.setProperty('--progress', `${percent * 100}%`);
            };

            updateTooltipPosition();
            const observer = new ResizeObserver(updateTooltipPosition);
            observer.observe(slider);

            return () => {
                observer.disconnect();
            };
        }
    }, [calls]);

    const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setProfile(parseFloat(e.target.value));
    }

    return (
        <section ref={ref} id="pricing" aria-label="pricing" className={`relative isolate bg-black py-24 sm:py-32 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <style>{`
                /* Custom Range Slider Styles */
                .range-slider {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 100%;
                    height: 8px;
                    background: linear-gradient(90deg, #2e6df6 var(--progress, 0%), #374151 var(--progress, 0%));
                    border-radius: 9999px;
                    outline: none;
                    transition: background 0.3s;
                }
                .range-slider::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 24px;
                    height: 24px;
                    background: #fff;
                    border-radius: 50%;
                    cursor: pointer;
                    border: 4px solid #2e6df6;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }
                .range-slider::-moz-range-thumb {
                    width: 24px;
                    height: 24px;
                    background: #fff;
                    border-radius: 50%;
                    cursor: pointer;
                    border: 4px solid #2e6df6;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }
                .range-slider:hover::-webkit-slider-thumb { transform: scale(1.1); }
                .range-slider:active::-webkit-slider-thumb { transform: scale(1.2); box-shadow: 0 0 0 8px rgba(46, 109, 246, 0.3); }
                .range-slider:hover::-moz-range-thumb { transform: scale(1.1); }
                .range-slider:active::-moz-range-thumb { transform: scale(1.2); box-shadow: 0 0 0 8px rgba(46, 109, 246, 0.3); }
                
                /* Tooltip Styles */
                .slider-tooltip {
                    position: absolute;
                    top: -18px;
                    transform: translateX(0);
                    background-color: #2e6df6;
                    color: white;
                    padding: 4px 10px;
                    border-radius: 8px;
                    font-weight: bold;
                    font-size: 14px;
                    white-space: nowrap;
                    pointer-events: none;
                    transition: opacity 0.2s;
                }
                .slider-tooltip::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 50%;
                    transform: translateX(-50%);
                    border-width: 5px;
                    border-style: solid;
                    border-color: #2e6df6 transparent transparent transparent;
                }

                /* Custom Radio Button Styles */
                .radio-pill-group input[type="radio"] { display: none; }
                .radio-pill-group label {
                    display: inline-block;
                    padding: 8px 16px;
                    background-color: #1f2937;
                    color: #d1d5db;
                    border: 1px solid #374151;
                    border-radius: 9999px;
                    cursor: pointer;
                    transition: all 0.2s ease-in-out;
                    font-weight: 500;
                }
                .radio-pill-group label:hover {
                    background-color: #374151;
                    transform: translateY(-2px);
                }
                .radio-pill-group input[type="radio"]:checked + label {
                    background-color: #2e6df6;
                    border-color: #1e40af;
                    color: white;
                    transform: scale(1.05) translateY(-1px);
                    box-shadow: 0 4px 15px rgba(46, 109, 246, 0.3);
                }
            `}</style>
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-[#2e6df6]">Faire und transparente Preise</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Wähle den Plan, der zu deinem Volumen passt</p>
                    <p className="mt-4 text-lg leading-8 text-gray-400">Starte klein und wachse mit uns – <strong>Made in Austria</strong>, DSGVO-konform.</p>
                </div>

                {/* Cards */}
                <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Starter Card */}
                    <div className="rounded-2xl bg-gray-900/50 p-6 ring-1 ring-white/10">
                        <h3 className="text-lg font-semibold text-white">Starter</h3>
                        <p className="mt-2 text-sm text-gray-400">Für kleine Teams & ruhige Zeiten.</p>
                        <p className="mt-4 text-3xl font-bold text-white">89€<span className="text-base font-medium text-gray-400">/Monat</span></p>
                        <a href="#demo" className="mt-6 block w-full rounded-md bg-white/10 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-white/20">Plan wählen</a>
                        <ul className="mt-6 space-y-2 text-sm text-gray-300">
                            <li className="flex gap-x-2"><span className="text-green-400">✔</span> 300 Minuten/Monat inklusive</li>
                            <li className="flex gap-x-2"><span className="text-green-400">✔</span> Überminuten: 0,23 €/Min</li>
                        </ul>
                    </div>
                    
                    {/* Business Card */}
                    <div className="relative rounded-2xl bg-gray-900 p-6 ring-2 ring-[#2e6df6]">
                         <div className="absolute top-0 -translate-y-1/2 right-6 bg-[#2e6df6] px-3 py-1 text-xs font-semibold text-white rounded-full">Empfohlen</div>
                         <h3 className="text-lg font-semibold text-white">Business</h3>
                        <p className="mt-2 text-sm text-gray-400">Sweet-Spot für die meisten Betriebe.</p>
                        <p className="mt-4 text-3xl font-bold text-white">219€<span className="text-base font-medium text-gray-400">/Monat</span></p>
                        <a href="#demo" className="mt-6 block w-full rounded-md bg-[#2e6df6] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500">Plan wählen</a>
                         <ul className="mt-6 space-y-2 text-sm text-gray-300">
                            <li className="flex gap-x-2"><span className="text-green-400">✔</span> 900 Minuten/Monat inklusive</li>
                            <li className="flex gap-x-2"><span className="text-green-400">✔</span> Überminuten: 0,22 €/Min</li>
                             <li className="flex gap-x-2"><span className="text-green-400">✔</span> Premium-Integrationen</li>
                        </ul>
                    </div>

                    {/* Enterprise Card */}
                     <div className="rounded-2xl bg-gray-900/50 p-6 ring-1 ring-white/10">
                        <h3 className="text-lg font-semibold text-white">Enterprise</h3>
                        <p className="mt-2 text-sm text-gray-400">Für hohes Volumen & besondere Anforderungen.</p>
                        <p className="mt-4 text-3xl font-bold text-white">Individuell</p>
                        <a href="#demo" className="mt-6 block w-full rounded-md bg-white/10 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-white/20">Kontakt aufnehmen</a>
                         <ul className="mt-6 space-y-2 text-sm text-gray-300">
                            <li className="flex gap-x-2"><span className="text-green-400">✔</span> Alle Business-Features</li>
                             <li className="flex gap-x-2"><span className="text-green-400">✔</span> Individuelle SLAs & Audits</li>
                             <li className="text-gray-500 mt-2">Richtwert: Scale 2.400 Min ~ 499€</li>
                        </ul>
                    </div>
                </div>

                {/* Notices */}
                 <p className="text-center text-gray-400 text-sm mt-8">
                    Oder ohne Grundgebühr starten: <strong>PAYG (FLEX)</strong> – 0,24 €/Min, Mindestumsatz 29 €/Monat.
                </p>
                <p className="text-center text-gray-400 text-sm mt-2">
                    Einrichtungsgebühr einmalig <strong>299€</strong> · bei Jahresabo <strong>Business</strong> erlassen.
                </p>

                {/* Calculator */}
                <div className="mt-12 rounded-2xl bg-gray-900/50 ring-1 ring-white/10 p-6 sm:p-8">
                    <h4 className="text-xl font-bold text-white">Minuten- & Calls-Rechner</h4>
                    <div className="mt-6 grid gap-y-8 gap-x-6 sm:grid-cols-1 lg:grid-cols-2 items-center">
                        {/* Slider */}
                        <div className="w-full">
                            <label htmlFor="pr-calls-slider" className="block text-sm font-medium text-gray-300 mb-2">
                                Durchschnittliche Calls/Monat
                            </label>
                            <div className="relative pt-8">
                                <div ref={tooltipRef} className="slider-tooltip">{calls}</div>
                                <input
                                    ref={sliderRef}
                                    id="pr-calls-slider"
                                    type="range"
                                    min="50"
                                    max="2000"
                                    step="10"
                                    value={calls}
                                    onChange={(e) => setCalls(parseInt(e.target.value, 10))}
                                    className="w-full range-slider"
                                />
                            </div>
                        </div>
                        {/* Radio Buttons */}
                        <fieldset>
                            <legend className="text-sm font-medium text-gray-300 mb-3">Profil (Ø-Gesprächsdauer)</legend>
                            <div className="flex flex-wrap gap-2 radio-pill-group">
                                <div><input type="radio" id="prof_med" name="pr-profile" value="3.5" checked={profile === 3.5} onChange={handleProfileChange} /><label htmlFor="prof_med">Med 3.5 Min</label></div>
                                <div><input type="radio" id="prof_tec" name="pr-profile" value="3.0" checked={profile === 3.0} onChange={handleProfileChange} /><label htmlFor="prof_tec">Tec 3.0 Min</label></div>
                                <div><input type="radio" id="prof_gas" name="pr-profile" value="2.5" checked={profile === 2.5} onChange={handleProfileChange} /><label htmlFor="prof_gas">Gastro 2.5 Min</label></div>
                            </div>
                        </fieldset>
                    </div>

                    {/* Results */}
                    <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-3">
                        <div className="rounded-lg bg-black/30 p-4 text-center">
                            <div className="text-sm text-gray-400">≈ Minuten/Monat</div>
                            <div className="text-xl font-bold text-white">{totalMinutes}</div>
                        </div>
                        <div className="rounded-lg bg-black/30 p-4 text-center">
                            <div className="text-sm text-gray-400">Empfohlenes Paket</div>
                            <div className="text-xl font-bold text-white">{recommendedPlan}</div>
                        </div>
                         <div className="rounded-lg bg-black/30 p-4 text-center">
                            <div className="text-sm text-gray-400">Preis-Richtwert</div>
                            <div className="text-xl font-bold text-white">{estimatedPrice}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;