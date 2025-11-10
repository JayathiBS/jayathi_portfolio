import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <section id="about" className="py-20"><About /></section>
        <hr className="border-gray-700 my-8" />
        <section id="skills" className="py-20"><Skills /></section>
        <hr className="border-gray-700 my-8" />
        <section id="education" className="py-20"><Education /></section>
        <hr className="border-gray-700 my-8" />
        <section id="projects" className="py-20"><Projects /></section>
        <hr className="border-gray-700 my-8" />
        <section id="contact" className="py-20"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;