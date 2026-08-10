import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Work from './components/work/Work';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

const App = () => (
  <>
    <Header />
    <main>
      <Hero />
      <About />
      <Skills />
      <Work />
      <Qualification />
      <Contact />
    </main>
    <Footer />
    <ScrollUp />
  </>
);

export default App;
