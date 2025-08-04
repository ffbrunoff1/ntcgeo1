import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 lg:px-8 flex flex-col items-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-ntc-black mb-6 text-center">
            🎥 Conheça nossos <span className="text-gradient">produtos em ação</span>
          </h2>
          <div className="relative w-full max-w-3xl aspect-video rounded-lg shadow-2xl overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/IuQ3E3tEX9I"
              title="NTCGeo Produtos"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </motion.section>
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
