import React from 'react';

const Navigation = () => {
  return (
    <React.Fragment>
      {/* DESKTOP NAV */}
      <nav className='desktop-nav'>
        <ul className='desktop-links'>
          <li className='desktop-link'>
            <p>Projects</p>
          </li>
          <li className='desktop-link'>
            <p>About</p>
          </li>
          <li className='desktop-link'>
            <p>Contact</p>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navigation;
