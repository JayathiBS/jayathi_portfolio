// src/App.jsx

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-theme text-light-text relative overflow-hidden">
      {/* decorative orbs placed under content */}
      <div className="orb orb--blue" aria-hidden="true"></div>
      <div className="orb orb--teal" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Header />
        <main>
          <Hero />
          <div className="py-16">
            <About />
          </div>
          <div className="py-16">
            <Projects />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;