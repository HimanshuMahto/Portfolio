import React from 'react';
import './work.css';
import Works from './Works';

const Work = () => {
  return (
    <section className='work section' id='portfolio'>
      <h2 className='section__title'>Portfolio</h2>
      <span className='section__subtitle'>Most recent works</span>

      <Works />
      <div className='work__filters'>
        <a 
          className='work__button'
          href='https://www.github.com/himanshumahto'
          target='_blank'
          style={{
            fontSize:"var(--h2-font-size)",
            color:"var(--main-color)",
            marginTop:"40px",
            padding:"5px 15px 5px 15px",
            borderRadius: "1rem",
          }}
        >
          More<i className='bx bx-right-arrow-alt work__button-icon' style={{fontSize:"var(--h3-font-size)"}}></i>
        </a>
      </div>
    </section>
  );
};

export default Work;
