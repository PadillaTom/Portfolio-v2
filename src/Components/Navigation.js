import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Animations:
import gsap from 'gsap';
// Icons:
import {
  AiOutlineBars,
  AiOutlineClose,
  AiFillLinkedin,
  AiFillGithub,
  AiFillPhone,
  AiOutlineMail,
} from 'react-icons/ai';

const Navigation = () => {
  // Sidebar:
  const [isOpen, setIsOpen] = useState(false);

  // Animations
  const tl = gsap.timeline();
  const [replay, setReplay] = useState(false);

  // Scrolls:
  useEffect(() => {
    if (isOpen) {
      gsap.utils.toArray('.single-link').forEach((item) => {
        tl.from(item, 0.1, {
          delay: 0.1,
          x: -500,
          ease: 'Power4.Out',
        });
      });
    }
    gsap.from('.mobile-social', 0.2, {
      delay: 1,
      scale: 0,
      ease: 'Power4.Out',
    });
    tl.from('.desktop-link', 1, {
      delay: 1.5,
      x: -500,
      stagger: 0.2,
      ease: 'Power4.Out',
    });
  }, [replay, tl, isOpen]);

  return (
    <React.Fragment>
      {/* MOBILE NAV */}
      <nav className='mobile-nav'>
        {!isOpen ? (
          <div
            className='mobile-ham'
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <AiOutlineBars></AiOutlineBars>
          </div>
        ) : (
          <div
            className='sidebar-close'
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <AiOutlineClose></AiOutlineClose>
          </div>
        )}

        <div className={`sidebar ${isOpen && 'show-sidebar'}`}>
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

            <div className='mobile-social'>
              <div className='single-social-m'>
                <a
                  href='https://www.linkedin.com/in/padillatom/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='social-link-m'>
                    <AiFillLinkedin></AiFillLinkedin>
                  </div>
                </a>
              </div>
              <div className='single-social-m'>
                <a
                  href='https://github.com/PadillaTom'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='social-link-m'>
                    <AiFillGithub></AiFillGithub>
                  </div>
                </a>
              </div>
              <div className='single-social-m'>
                <a href='mailto: padillatomasagustin@gmail.com'>
                  <div className='social-link-m'>
                    <AiOutlineMail></AiOutlineMail>
                  </div>
                </a>
              </div>
              <div className='single-social-m'>
                <a href='tel:+41794002693'>
                  <div className='social-link-m'>
                    <AiFillPhone></AiFillPhone>
                  </div>
                </a>
              </div>
            </div>
          </ul>
        </div>
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
          <li className='single-link cv-link'>
            <p>Download CV</p>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navigation;
