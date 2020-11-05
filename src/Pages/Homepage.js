import React, { useEffect } from 'react';
import gsap from 'gsap';

const Homepage = () => {
  useEffect(() => {
    //   Preventing Default "Flash":
    gsap.to('body', 0, { css: { visibility: 'visible' } });
    // Animations:
  }, []);

  return (
    <React.Fragment>
      <div className='section'>
        <h1>HomePage</h1>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
