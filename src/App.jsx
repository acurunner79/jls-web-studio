import Header from './components/Header';
import Hero from './components/Hero';
import ValueSection from './components/ValueSection';
import Services from './components/Services';
import Industries from './components/Industries';
import Work from './components/Work';
import Process from './components/Process';
import ReviewCTA from './components/ReviewCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Success from './components/Success';

/**
 * App
 * Renders either the main JLS Web Studio landing page or the form success page.
 * The success route is detected from the current browser pathname.
 */
const App = () => {
  const isSuccessPage = window.location.pathname === '/success';

  return (
    <div className="app">
      {!isSuccessPage && <Header />}

      <main>
        {isSuccessPage ? (
          <Success />
        ) : (
          <>
            <Hero />
            <ValueSection />
            <Services />
            <Industries />
            <Work />
            <Process />
            <ReviewCTA />
            <Contact />
          </>
        )}
      </main>

      {!isSuccessPage && <Footer />}
    </div>
  );
};

export default App;