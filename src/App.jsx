import React, { useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Loader from './components/loader/Loader';
import Ambient from './components/ambient/Ambient';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Work from './components/work/Work';
import Qualification from './components/qualification/Qualification';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import BlogPage from './pages/BlogPage';
import NotFound from './pages/NotFound';

const HomePage = () => (
  <>
    <Header />
    <main>
      <Hero />
      <About />
      <Skills />
      <Work />
      <Qualification />
      <Blog />
      <Contact />
    </main>
    <Footer />
    <ScrollUp />
  </>
);

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const handleLoaded = useCallback(() => setLoaded(true), []);

  return (
    <>
      {!loaded && <Loader onComplete={handleLoaded} />}
      <Ambient />
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.6s ease' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
