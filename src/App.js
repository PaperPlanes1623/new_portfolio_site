import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </div>
    )
  }
}

export default App;
