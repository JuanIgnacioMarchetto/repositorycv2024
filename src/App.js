import React from 'react';
import Navbar from './components/Navbar';
import PersonalInfo from './components/PersonalInfo';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <PersonalInfo />
        <Experience />
        <Education />
      </div>
      <Footer />
    </div>
  );
}

export default App;
