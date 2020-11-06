import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Icons:
import { AiFillGithub } from 'react-icons/ai';
import { MdOpenInNew } from 'react-icons/md';
// Image:
import Pimg1 from '../Assets/Projects/NasaAPI.jpg';

const Projects = () => {
  return (
    <React.Fragment>
      <section className='section proj-sect'>
        {/* Single Project */}
        <div className='single-project-container'>
          <div className='proj-img-container'>
            <img src={Pimg1} alt='projimg' className='proj-img' />
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
              <AiFillGithub></AiFillGithub>
              <MdOpenInNew></MdOpenInNew>
            </div>
          </div>
        </div>
        {/* End Single Project */}
        {/* Single Project */}
        <div className='single-project-container p2'>
          <div className='proj-img-container p2'>
            <img src={Pimg1} alt='projimg' className='proj-img p2' />
          </div>
          <div className='proj-info p2'>
            <div className='proj-name p2'>
              <h2>Nasa API</h2>
            </div>
            <div className='proj-stack'>
              <ul className='stack-list'>
                <li className='stack-item'>React JS</li>
                <li className='stack-item'>Nasa API</li>
              </ul>
            </div>
            <div className='proj-links'>
              <AiFillGithub></AiFillGithub>
              <MdOpenInNew></MdOpenInNew>
            </div>
          </div>
        </div>
        {/* End Single Project */}
      </section>
    </React.Fragment>
  );
};

export default Projects;
