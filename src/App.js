import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import gsap from 'gsap';
// Components:
import Navigation from './Components/Navigation';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
// Pages:
import Homepage from './Pages/Homepage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';

function App() {
  useEffect(() => {
    //   Preventing Default "Flash":
    gsap.to('body', 0, { css: { visibility: 'visible' } });
  }, []);
  // ::::::::::::::: Main :::::::::::::::::
  return (
    <div className='App'>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route path='/' exact>
            <Homepage></Homepage>
          </Route>
          <Route path='/about'>
            <AboutPage></AboutPage>
          </Route>
          <Route path='/contact'>
            <ContactPage></ContactPage>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
