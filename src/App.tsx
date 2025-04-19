import { useEffect } from 'react';
import { useLanguage } from './context/LanguageContext';
import { setupScrollAnimations, setupCounterAnimation } from './utils/animations';
import './styles/animations.css';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Store from './components/Store';
import WhyUs from './components/WhyUs';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  const { isRtl } = useLanguage();
  
  useEffect(() => {
    // Update the document title
    document.title = "Eco Shield | Pest Control & Cleaning Services";
    
    // Add RTL or LTR direction to the document
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    
    // Set up animations
    const cleanupScrollAnimations = setupScrollAnimations();
    
    // Set up counter animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setupCounterAnimation();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }
    
    // Cleanup
    return () => {
      cleanupScrollAnimations();
      observer.disconnect();
    };
  }, [isRtl]);
  
  return (
    <div className={`font-sans ${isRtl ? 'font-tajawal' : ''} bg-gray-900 text-white`}>
      <Header />
      <Hero />
      <About />
      <Services />
      <Store />
      <WhyUs />
      <Stats />
      <Testimonials />
      <Partners />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;