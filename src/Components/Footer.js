import React from 'react';
// Icons:
import { AiFillLinkedin, AiFillGithub, AiFillPhone } from 'react-icons/ai';

const Footer = () => {
  return (
    <React.Fragment>
      <footer className='section footer-sect'>
        <div className='footer-top'>
          <div className='contact-container'>
            <div className='contact-text'>
              <h2>Let's work together!</h2>
            </div>
            <div className='contact-social'>
              <a href='https://github.com/PadillaTom' target='_blank'>
                <AiFillGithub></AiFillGithub>
              </a>
              <a href='https://www.linkedin.com/in/padillatom/' target='_blank'>
                <AiFillLinkedin></AiFillLinkedin>
              </a>
            </div>
            <a href='tel:+41794002693'>
              <div className='social-phone'>
                <AiFillPhone></AiFillPhone>
                <p>+41 79 400 26 93</p>
              </div>
            </a>
          </div>
        </div>
        <div className='footer-bot'>
          <p>Tomas Padilla &copy; 2020</p>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
