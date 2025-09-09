import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Introduction />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
