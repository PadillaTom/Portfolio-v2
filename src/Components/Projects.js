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
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    gsap.utils.toArray('.single-project-container').forEach((item) => {
      gsap.from(item, {
        x: 1500,
        scrollTrigger: {
          trigger: item,
          start: 'top bottom',
          end: 'center top',
          toggleActions: 'play reverse play reset',
        },
      });
    });
  }, []);
  return (
    <React.Fragment>
      <section className='section proj-sect'>
        <div className='all-proj-container'>
          {/* Peruvian Chef */}
          <div className='single-project-container'>
            <div className='proj-img-container'>
              <div className='mobile-overlay'></div>
              <img src={Peru} alt='projimg' className='proj-img' />
            </div>
            <div className='proj-info'>
              <div className='proj-name'>
                <h2>Peruvian Chef</h2>
              </div>
              <div className='proj-stack'>
                <ul className='stack-list'>
                  <li className='stack-item'>HTML</li>
                  <li className='stack-item'>CSS</li>
                  <li className='stack-item'>JS</li>
                </ul>
              </div>
              <div className='proj-links'>
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
          <div className='single-project-container'>
            <div className='proj-img-container'>
              <div className='mobile-overlay'></div>
              <img src={Rts} alt='projimg' className='proj-img' />
            </div>
            <div className='proj-info'>
              <div className='proj-name'>
                <h2>RTS Tribute</h2>
              </div>
              <div className='proj-stack'>
                <ul className='stack-list'>
                  <li className='stack-item'>HTML</li>
                  <li className='stack-item'>CSS</li>
                  <li className='stack-item'>JS</li>
                </ul>
              </div>
              <div className='proj-links'>
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
          <div className='single-project-container'>
            <div className='proj-img-container'>
              <div className='mobile-overlay'></div>
              <img src={Music} alt='projimg' className='proj-img' />
            </div>
            <div className='proj-info'>
              <div className='proj-name'>
                <h2>Music Store</h2>
              </div>
              <div className='proj-stack'>
                <ul className='stack-list'>
                  <li className='stack-item'>React JS</li>
                  <li className='stack-item'>Context API</li>
                  <li className='stack-item'>Firebase</li>
                </ul>
              </div>
              <div className='proj-links'>
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

          {/* Nasa API */}
          <div className='single-project-container'>
            <div className='proj-img-container'>
              <div className='mobile-overlay'></div>
              <img src={Nasa} alt='projimg' className='proj-img' />
            </div>
            <div className='proj-info'>
              <div className='proj-name'>
                <h2>Nasa API</h2>
              </div>
              <div className='proj-stack'>
                <ul className='stack-list'>
                  <li className='stack-item'>React JS</li>
                  <li className='stack-item'>Nasa API</li>
                </ul>
              </div>
              <div className='proj-links'>
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

          {/* Nyus */}
          <div className='single-project-container'>
            <div className='proj-img-container'>
              <div className='mobile-overlay'></div>
              <img src={Nyus} alt='projimg' className='proj-img' />
            </div>
            <div className='proj-info'>
              <div className='proj-name'>
                <h2>Nyus Bartending</h2>
              </div>
              <div className='proj-stack'>
                <ul className='stack-list'>
                  <li className='stack-item'>React JS</li>
                  <li className='stack-item'>Context API</li>
                  <li className='stack-item'>Firebase</li>
                </ul>
              </div>
              <div className='proj-links'>
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

          {/* Flix Tribute */}
          <div className='single-project-container'>
            <div className='proj-img-container'>
              <div className='mobile-overlay'></div>
              <img src={Flix} alt='projimg' className='proj-img' />
            </div>
            <div className='proj-info'>
              <div className='proj-name'>
                <h2>Flix Tribute</h2>
              </div>
              <div className='proj-stack'>
                <ul className='stack-list'>
                  <li className='stack-item'>React JS</li>
                  <li className='stack-item'>Context API</li>
                  <li className='stack-item'>Firebase</li>
                  <li className='stack-item'>TMDB API</li>
                </ul>
              </div>
              <div className='proj-links'>
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
      </section>
    </React.Fragment>
  );
};

export default Projects;
