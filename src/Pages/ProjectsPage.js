import React from 'react';
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

const ProjectsPage = () => {
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
                <img src={Peru} className='pp-img' alt='project1' />
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
                <div className='pp-links'>
                  <AiFillGithub></AiFillGithub>
                  <MdOpenInNew></MdOpenInNew>
                </div>
              </div>
            </div>
            {/* End Peruvian Chef */}
            {/* Peruvian Chef */}
            <div className='single-pp-container'>
              <div className='pp-img-container'>
                <img src={Peru} className='pp-img' alt='project1' />
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
                <div className='pp-links'>
                  <AiFillGithub></AiFillGithub>
                  <MdOpenInNew></MdOpenInNew>
                </div>
              </div>
            </div>
            {/* End Peruvian Chef */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
