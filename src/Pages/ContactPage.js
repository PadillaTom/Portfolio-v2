import React, { useEffect } from 'react';
import gsap from 'gsap';
// Icons:
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillPhone,
  AiOutlineMail,
} from 'react-icons/ai';

const ContactPage = () => {
  let tl = gsap.timeline();

  useEffect(() => {
    tl.from('.cont-title', 0.8, {
      delay: 0.5,
      scale: 1.5,
    })
      .from('.cont-info-container', 1, {
        y: 600,
        ease: 'Expo.easeOut',
      })
      .from('.info-container', 0.8, {
        opacity: 0,
        y: -25,
        ease: 'Power4.easeOut',
      })
      .from(
        '.say-something',
        0.8,
        {
          opacity: 0,
          y: -25,
          ease: 'Power4.easeOut',
        },
        1
      )
      .from(
        '.contact-form-container',
        0.8,
        {
          opacity: 0,
          y: -25,
          ease: 'Power4.easeOut',
        },
        1.4
      )
      .from('.form-submit', 0.7, {
        opacity: 0,
        y: -25,
        ease: 'Power4.easeOut',
      });
  }, [tl]);
  return (
    <React.Fragment>
      <section className='section cont-sect'>
        <div className='cont-container'>
          <div className='cont-img'></div>
          <div className='cont-title'>
            <h2>Contact</h2>
          </div>
          <div className='cont-info-container'>
            <div className='info-container'>
              <div className='contact-info'>
                {/* Github */}
                <a
                  href='https://github.com/PadillaTom'
                  rel='noreferrer'
                  target='_blank'
                >
                  <div className='single-info'>
                    <AiFillGithub></AiFillGithub>
                    <p>GitHub</p>
                  </div>
                </a>
                {/* Linkedin */}
                <a
                  href='https://www.linkedin.com/in/padillatom/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='single-info'>
                    <AiFillLinkedin></AiFillLinkedin>
                    <p>Linkedin</p>
                  </div>
                </a>
                {/* Email */}
                <a href='mailto: padillatomasagustin@gmail.com'>
                  <div className='single-info'>
                    <AiOutlineMail></AiOutlineMail>
                    <p>padillatomasagustin@gmail.com</p>
                  </div>
                </a>
                {/* Phone */}
                <a href='tel:+41794002693'>
                  <div className='single-info'>
                    <AiFillPhone></AiFillPhone>
                    <p>+41 79 400 26 93</p>
                  </div>
                </a>
              </div>
              <h4 className='say-something'>Say something!</h4>
              <div className='contact-form-container'>
                <form className='contact-form'>
                  <div className='single-control'>
                    <input type='text' placeholder='Name' />
                  </div>
                  <div className='single-control'>
                    <input type='email' placeholder='Your e-mail' />
                  </div>
                  <div className='textarea'>
                    <textarea
                      placeholder='Your Message...'
                      rows='7'
                      className='form-message'
                    ></textarea>
                  </div>
                  <button className='form-submit'>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactPage;
