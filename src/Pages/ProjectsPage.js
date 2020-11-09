import React, { useEffect } from 'react';
// Icons:
import { AiFillGithub } from 'react-icons/ai';
import { MdOpenInNew } from 'react-icons/md';
// Images:
import Peru from '../Assets/Projects/PeruvianChef.jpg';
import Rts from '../Assets/Projects/TvSuisse.jpg';
import Music from '../Assets/Projects/MusicStore.jpg';
import Nasa from '../Assets/Projects/NasaAPI.jpg';
import Nyus from '../Assets/Projects/Nyus.jpg';
import Flix from '../Assets/Projects/FlixTribute.jpg';
// Animations:
import gsap from 'gsap';

const ProjectsPage = () => {
  const tl = gsap.timeline();

  // Animations:
  useEffect(() => {
    tl.from('.projPage-title', 0.8, {
      delay: 0.5,
      scale: 1.5,
    }).from('.projPage-proj-container', 1, {
      y: 600,
      ease: 'Expo.easeOut',
    });
    gsap.utils.toArray('.single-pp-container').forEach((item) => {
      tl.from(item, 0.4, {
        opacity: 0,
        scale: 1.3,
      });
    });
  }, [tl]);

  return (
    <section className='section projPage-sect'>
      <div className='projPage-container'>
        <div className='projPage-img'></div>
        <div className='projPage-title'>
          <h2>Projects</h2>
        </div>
        <div className='projPage-proj-container'>
          <div className='all-single-pp-container'>
            {/* Peruvian Chef */}
            <div className='single-pp-container'>
              <div className='pp-img-container'>
                <img src={Peru} className='pp-img' alt='projectimg' />
              </div>
              <div className='pp-info'>
                <div className='pp-name'>
                  <h2>Peruvian Chef</h2>
                </div>
                <div className='pp-stack'>
                  <ul className='pp-stack-list'>
                    <li className='pp-stack-item'>HTML</li>
                    <li className='pp-stack-item'>CSS</li>
                    <li className='pp-stack-item'>JS</li>
                  </ul>
                </div>
                <div className='pp-desc'>
                  <p>
                    Static website applying Flexbox and Grids. 100% Responsive.
                  </p>
                </div>
                <div className='pp-links'>
                  <a
                    href='https://github.com/PadillaTom/Peruvian-Chef'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <AiFillGithub></AiFillGithub>
                  </a>
                  <a
                    href='https://port-peruchef.netlify.app/'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <MdOpenInNew></MdOpenInNew>
                  </a>
                </div>
              </div>
            </div>
            {/* End Peruvian Chef */}

            {/* RTS */}
            <div className='single-pp-container'>
              <div className='pp-img-container'>
                <img src={Rts} className='pp-img' alt='projectimg' />
              </div>
              <div className='pp-info'>
                <div className='pp-name'>
                  <h2>RTS Tribute</h2>
                </div>
                <div className='pp-stack'>
                  <ul className='pp-stack-list'>
                    <li className='pp-stack-item'>HTML</li>
                    <li className='pp-stack-item'>CSS</li>
                    <li className='pp-stack-item'>JS</li>
                  </ul>
                </div>
                <div className='pp-desc'>
                  <p>
                    Static website applying Flexbox and Grids. Tribute to the
                    Swiss Radio and Television. 100% Responsive
                  </p>
                </div>
                <div className='pp-links'>
                  <a
                    href='https://github.com/PadillaTom/rts-project'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <AiFillGithub></AiFillGithub>
                  </a>
                  <a
                    href='https://rts-project-clone.netlify.app/'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <MdOpenInNew></MdOpenInNew>
                  </a>
                </div>
              </div>
            </div>
            {/* End RTS */}

            {/* Music Store */}
            <div className='single-pp-container'>
              <div className='pp-img-container'>
                <img src={Music} className='pp-img' alt='projectimg' />
              </div>
              <div className='pp-info'>
                <div className='pp-name'>
                  <h2>Music Store</h2>
                </div>
                <div className='pp-stack'>
                  <ul className='pp-stack-list'>
                    <li className='pp-stack-item'>React JS</li>
                    <li className='pp-stack-item'>Context API</li>
                    <li className='pp-stack-item'>Firebase</li>
                  </ul>
                </div>
                <div className='pp-desc'>
                  <p>
                    Online Music Store website, 100% responsive, with user
                    Authentication and Shopping Cart.
                  </p>
                </div>
                <div className='pp-links'>
                  <a
                    href='https://github.com/PadillaTom/MusicStore'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <AiFillGithub></AiFillGithub>
                  </a>
                  <a
                    href='https://music-store-geneva.netlify.app/'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <MdOpenInNew></MdOpenInNew>
                  </a>
                </div>
              </div>
            </div>
            {/* End Music Store */}

            {/* Nyus */}
            <div className='single-pp-container'>
              <div className='pp-img-container'>
                <img src={Nyus} className='pp-img' alt='projectimg' />
              </div>
              <div className='pp-info'>
                <div className='pp-name'>
                  <h2>Nyu's Mixology</h2>
                </div>
                <div className='pp-stack'>
                  <ul className='pp-stack-list'>
                    <li className='pp-stack-item'>React JS</li>
                    <li className='pp-stack-item'>Context API</li>
                    <li className='pp-stack-item'>Firebase</li>
                  </ul>
                </div>
                <div className='pp-desc'>
                  <p>
                    Website made for a Bartender's Company. Fully responsive.
                    Requesting Data stored in Firebase.
                  </p>
                </div>
                <div className='pp-links'>
                  <a
                    href='https://nyus.netlify.app/'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <MdOpenInNew></MdOpenInNew>
                  </a>
                </div>
              </div>
            </div>
            {/* End Nyus */}

            {/* Nasa API */}
            <div className='single-pp-container'>
              <div className='pp-img-container'>
                <img src={Nasa} className='pp-img' alt='projectimg' />
              </div>
              <div className='pp-info'>
                <div className='pp-name'>
                  <h2>NASA API</h2>
                </div>
                <div className='pp-stack'>
                  <ul className='pp-stack-list'>
                    <li className='pp-stack-item'>React JS</li>
                    <li className='pp-stack-item'>Nasa API</li>
                  </ul>
                </div>
                <div className='pp-desc'>
                  <p>
                    Website using the Nasa API to fetch APOD and MARS Rover
                    Photos.
                  </p>
                </div>
                <div className='pp-links'>
                  <a
                    href='https://github.com/PadillaTom/Nasa-Fun-React'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <AiFillGithub></AiFillGithub>
                  </a>
                  <a
                    href='https://nasa-fun-api.netlify.app/'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <MdOpenInNew></MdOpenInNew>
                  </a>
                </div>
              </div>
            </div>
            {/* End Nasa API */}

            {/* Flix Tribute */}
            <div className='single-pp-container'>
              <div className='pp-img-container'>
                <img src={Flix} className='pp-img' alt='projectimg' />
              </div>
              <div className='pp-info'>
                <div className='pp-name'>
                  <h2>Flix Tribute</h2>
                </div>
                <div className='pp-stack'>
                  <ul className='pp-stack-list'>
                    <li className='pp-stack-item'>React JS</li>
                    <li className='pp-stack-item'>TMDB API</li>
                  </ul>
                </div>
                <div className='pp-desc'>
                  <p>
                    Responsive Website requesting to The Movie Database API.
                    Accessing data and displaying as needed.
                  </p>
                </div>
                <div className='pp-links'>
                  <a
                    href='https://github.com/PadillaTom/FlixTribute'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <AiFillGithub></AiFillGithub>
                  </a>
                  <a
                    href='https://flix-tribute-react.netlify.app/'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <MdOpenInNew></MdOpenInNew>
                  </a>
                </div>
              </div>
            </div>
            {/* End Flix Tribute */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
