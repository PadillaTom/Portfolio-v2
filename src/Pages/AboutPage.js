import React, { useEffect } from 'react';
import gsap from 'gsap';

const AboutPage = () => {
  let tl = gsap.timeline();

  useEffect(() => {
    tl.from('.about-title', 0.8, {
      scale: 1.5,
    })
      .from('.about-info-container', 1, {
        y: 600,
        ease: 'Expo.easeOut',
      })
      .from(
        '.about-info',
        0.8,
        {
          opacity: 0,
          y: 15,
          ease: 'Power4.easeOut',
        },
        1.4
      )
      .from('.about-cta', 1, {
        delay: 0,
        opacity: 0,
        y: 10,
        ease: 'circ.out',
      });
  }, []);

  return (
    <React.Fragment>
      <section className='section about-sect'>
        <div className='about-container'>
          <div className='about-img'></div>
          <div className='about-title'>
            <h2>About me</h2>
          </div>
          <div className='about-info-container'>
            <div className='about-info'>
              <p>
                With an artistic background, I have started my studies as a Web
                Developer to find a real passion.
              </p>
              <br />
              <span>Tools & Technologies:</span>
              <br />
              <p>
                HTML, CSS, Javascript, Gsap, React, Gatsby, NPM, Git, Firebase,
                Material UI, Jquery.
              </p>
              <br />
              <span>How will I proceed?</span>
              <br />
              <p>PHP - mySQL - MongoDB</p>
              <br />
              <p>
                I invite you to see my
                <button className='proj-cta'>Projects.</button>
              </p>
            </div>
            <div className='about-cta'>
              <p>Contact Me</p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutPage;
