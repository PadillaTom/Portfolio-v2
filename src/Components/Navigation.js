import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Animations:
import gsap from 'gsap';
// Icons:
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai';

const Navigation = () => {
  // Sidebar:
  const [isOpen, setIsOpen] = useState(false);

  // Animations
  const tl = gsap.timeline();
  const [replay, setReplay] = useState(false);

  // Scrolls:
  useEffect(() => {
    gsap.from('.mobile-ham', 0.5, {
      scale: 0,
      ease: 'Back.easeOut',
    });
    tl.from('.desktop-link', 1, {
      delay: 1.5,
      x: -500,
      stagger: 0.2,
      ease: 'Power4.Out',
    });
    if (isOpen) {
      gsap.from('.sidebar', 1, {
        x: -500,
        ease: 'Power4.easeOut',
      });
    }
  }, [replay, tl, isOpen]);

  return (
    <React.Fragment>
      {/* MOBILE NAV */}
      <nav className='mobile-nav'>
        {isOpen ? (
          <div
            className='sidebar-close'
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <AiOutlineClose></AiOutlineClose>
          </div>
        ) : (
          <div
            className='mobile-ham'
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <AiOutlineBars></AiOutlineBars>
          </div>
        )}
        {isOpen && (
          <div className='sidebar'>
            <ul className='side-links'>
              <li className='single-link'>
                <Link
                  to='/'
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  <p>Home</p>
                </Link>
              </li>
              <li className='single-link'>
                <Link
                  to='/about'
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  <p>About</p>
                </Link>
              </li>
              <li className='single-link'>
                <Link
                  to='/contact'
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  <p>Contact</p>
                </Link>
              </li>
              <li className='single-link'>
                <Link
                  to='/projects'
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  <p>Projects</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
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
