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
      scale: 1.5,
    })
      .from('.cont-info-container', 1, {
        y: 600,
        ease: 'Expo.easeOut',
      })
      .from(
        '.cont-info',
        0.8,
        {
          opacity: 0,
          y: 15,
          ease: 'Power4.easeOut',
        },
        1.4
      )
      .from(
        '.contact-info',
        0.8,
        {
          opacity: 0,
          y: -25,
          ease: 'Power4.easeOut',
        },
        1.4
      )
      .from(
        '.say-something',
        0.8,
        {
          opacity: 0,
          y: -25,
          ease: 'Power4.easeOut',
        },
        1.4
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
      );
  }, []);
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
                <div className='single-info'>
                  <AiFillGithub></AiFillGithub>
                  <p>GitHub</p>
                </div>
                <div className='single-info'>
                  <AiFillLinkedin></AiFillLinkedin>
                  <p>Linkedin</p>
                </div>
                <div className='single-info'>
                  <AiOutlineMail></AiOutlineMail>
                  <p>padillatomasagustin@gmail.com</p>
                </div>
                <div className='single-info'>
                  <AiFillPhone></AiFillPhone>
                  <p>+41 79 400 26 93</p>
                </div>
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
                      rows='10'
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
