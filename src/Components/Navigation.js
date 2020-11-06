import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Navigation = () => {
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    tl.from('.desktop-link', 1, {
      delay: 1.5,
      x: -500,
      stagger: 0.2,
      ease: 'Power4.Out',
    });
  }, []);
  return (
    <React.Fragment>
      {/* DESKTOP NAV */}
      <nav className='desktop-nav'>
        <ul className='desktop-links'>
          <li className='desktop-link'>
            <p>Projects</p>
          </li>
          <li className='desktop-link'>
            <p>About</p>
          </li>
          <li className='desktop-link'>
            <p>Contact</p>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navigation;
