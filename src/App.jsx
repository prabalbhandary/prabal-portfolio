import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import Work from './pages/Work';

const App = () => {
  return (
    <>
      <Header />
      <div className="mt-1">
        <Home />
        <About />
        <Work />
        <Reviews />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
