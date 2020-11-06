import React, { useEffect } from 'react';
import './App.css';
import gsap from 'gsap';
// Components:
import Navigation from './Components/Navigation';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
// Pages:
import Homepage from './Pages/Homepage';

function App() {
  useEffect(() => {
    //   Preventing Default "Flash":
    gsap.to('body', 0, { css: { visibility: 'visible' } });
  }, []);
  // ::::::::::::::: Main :::::::::::::::::
  return (
    <div className='App'>
      <Navigation></Navigation>
      <Homepage></Homepage>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
