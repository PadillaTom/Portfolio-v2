import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// Animations:
import gsap from 'gsap';
import Homepage from '../Pages/Homepage';

const Navigation = () => {
  const tl = gsap.timeline();
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
            <Link to='/'>
              <p className='desktop-link-home'>Home</p>
            </Link>
          </li>
          <li className='desktop-link'>
            <Link to='/about'>
              <p>About</p>
            </Link>
          </li>
          <li className='desktop-link'>
            <Link to='/contact'>
              <p>Contact</p>
            </Link>
          </li>
          <li className='desktop-link'>
            <p>Projects</p>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navigation;
