import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Images:
import bg1 from '../Assets/bg1.jpg';
// Components:
import Projects from '../Components/Projects';

const Homepage = () => {
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // :::::::::::: Animations ::::::::::::::::

    tl.from('.home-text p', 1.5, {
      scale: 3,
      y: -150,
      delay: 0.6,
      ease: 'circ.out',
    })
      .from('.home-text h1', 0.5, {
        opacity: 0,
        scale: 0.9,
        ease: 'circ.out',
      })
      .from('.home-text h2', 0.5, {
        opacity: 0,
        scale: 0.9,
        ease: 'circ.out',
      })
      .from(
        '.home-bg-container',
        2,
        {
          opacity: 0,
          ease: 'Power4.easeInOut',
        },
        1
      )
      .from('.cta-elements-container', 0.5, {
        scale: 0,
        delay: 0.3,
        ease: 'Bounce.easeOut',
      })
      .to('.cta-elements-container', {
        y: 405,
        scrollTrigger: {
          trigger: '.cta-elements-container',
          pin: true,
          scrub: 3,
          start: 'top top+=95',
          end: 'top top-=5000',
        },
      });
  }, []);
  return (
    <React.Fragment>
      <div className='section home-sect'>
        <div className='home-bg-container'>
          <div className='home-bg-overlay'></div>
          <img src={bg1} alt='bgimg' className='home-bg' />
          <div className='home-img-bottom-overlay'></div>
        </div>
        <div className='home-text'>
          <h1>Front-End</h1>
          <h2>Web Developer</h2>
          <p>Tomas Padilla</p>
        </div>
        <a href='mailto:padillatomasagustin@gmail.com'>
          <div className='home-cta'>
            <div className='cta-elements-container'>
              <div className='cta-circle'></div>
              <h4 className='cta-text'>Get in Touch!</h4>
            </div>
          </div>
        </a>
      </div>
      <Projects></Projects>
    </React.Fragment>
  );
};

export default Homepage;
