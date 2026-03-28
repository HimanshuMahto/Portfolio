import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './github.css';

const Github = () => {
  const [ref, isVisible] = useScrollAnimation(0.15);

  return (
    <section className='github section' id='github'>
      <h2 className='section__title'>GitHub Stats</h2>
      <span className='section__subtitle'>My coding activity</span>

      <div
        className={`github__container container ${isVisible ? 'visible' : ''}`}
        ref={ref}
      >
        <img
          src='https://github-readme-stats.vercel.app/api?username=HimanshuMahto&show_icons=true&theme=dark&hide_border=true&bg_color=2d2d39&title_color=ffffff&text_color=d6d6f7&icon_color=ffffff'
          alt='GitHub Stats'
          className='github__card'
          loading='lazy'
        />
        <img
          src='https://github-readme-stats.vercel.app/api/top-langs/?username=HimanshuMahto&layout=compact&theme=dark&hide_border=true&bg_color=2d2d39&title_color=ffffff&text_color=d6d6f7'
          alt='Top Languages'
          className='github__card'
          loading='lazy'
        />
      </div>
    </section>
  );
};

export default Github;
