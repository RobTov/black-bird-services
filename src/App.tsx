import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Fleet from './components/Fleet';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-dark text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Fleet />
          <QuoteForm />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
