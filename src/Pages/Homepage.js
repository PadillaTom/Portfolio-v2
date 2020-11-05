import React, { useEffect } from 'react';
import gsap from 'gsap';
// Images:
import bg1 from '../Assets/bg1.jpg';

const Homepage = () => {
  useEffect(() => {
    //   Preventing Default "Flash":
    gsap.to('body', 0, { css: { visibility: 'visible' } });
    // Animations:
  }, []);

  return (
    <React.Fragment>
      <div className='section home-sect'>
        <div className='home-bg-container'>
          <div className='home-bg-overlay'></div>
          <img src={bg1} alt='bgimg' className='home-bg' />
        </div>
        <div className='home-text'>
          <h1>Front-End</h1>
          <h2>Web Developer</h2>
          <p>Tomas Padilla</p>
        </div>
        <div className='home-name'>
          <h4>Tomas Padilla</h4>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
