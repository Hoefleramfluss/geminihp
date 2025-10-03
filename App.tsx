import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustLogos from './components/TrustLogos';
import Products from './components/Solutions'; // Renamed semantically to Products
import ValueProps from './components/Features'; // Renamed semantically to ValueProps
import HowItWorks from './components/ValueProps'; // Repurposed for HowItWorks
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Demo from './components/Demo';
import Footer from './components/Footer';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';

const App: React.FC = () => {
  const [page, setPage] = React.useState('home');

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'impressum' || hash === 'datenschutz') {
        setPage(hash);
        window.scrollTo(0, 0);
      } else {
        setPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange, false);
    // Initial check
    handleHashChange();
    
    // Cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange, false);
    };
  }, []);


  const renderPage = () => {
    switch (page) {
      case 'impressum':
        return <Impressum />;
      case 'datenschutz':
        return <Datenschutz />;
      default:
        return (
          <main>
            <Hero />
            <TrustLogos />
            <Products />
            <ValueProps />
            <HowItWorks />
            <Pricing />
            <Faq />
            <Demo />
          </main>
        );
    }
  };

  return (
    <div className="bg-[#0a0a0a] text-white">
      <Header />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;