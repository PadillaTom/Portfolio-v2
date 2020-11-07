import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Animations:
import gsap from 'gsap';

const Navigation = () => {
  const tl = gsap.timeline();
  const [replay, setReplay] = useState(false);
  // Scrolls:

  useEffect(() => {
    tl.from('.desktop-link', 1, {
      delay: 1.5,
      x: -500,
      stagger: 0.2,
      ease: 'Power4.Out',
    });
  }, [replay, tl]);

  return (
    <React.Fragment>
      {/* DESKTOP NAV */}
      <nav className='desktop-nav'>
        <ul className='desktop-links'>
          <li className='desktop-link'>
            <Link to='/' onClick={() => setReplay(!replay)}>
              <p className='desktop-link-home'>Home</p>
            </Link>
          </li>
          <li className='desktop-link'>
            <Link to='/about' onClick={() => setReplay(!replay)}>
              <p>About</p>
            </Link>
          </li>
          <li className='desktop-link' onClick={() => setReplay(!replay)}>
            <Link to='/contact'>
              <p>Contact</p>
            </Link>
          </li>
          <li
            className='desktop-link'
            onClick={() => {
              setReplay(!replay);
            }}
          >
            <Link to='/projects'>
              <p>Projects</p>
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navigation;
