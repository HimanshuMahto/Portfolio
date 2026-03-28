import React from 'react';

const WorkItems = ({ item }) => {
  return (
    <div className='work__card'>
      <div className='work__img-wrap'>
        <img src={item.image} alt={item.title} className='work__img' />
        <div className='work__overlay'>
          <p className='work__overlay-desc'>{item.description}</p>
          <div className='work__overlay-buttons'>
            {item.demoLink && (
              <a
                href={item.demoLink}
                target='_blank'
                rel='noopener noreferrer'
                className='work__overlay-btn work__overlay-btn--demo'
              >
                <i className='bx bx-link-external'></i> Demo
              </a>
            )}
            <a
              href={item.link}
              target='_blank'
              rel='noopener noreferrer'
              className='work__overlay-btn'
            >
              <i className='bx bxl-github'></i> GitHub
            </a>
          </div>
        </div>
      </div>

      <div className='work__info'>
        <div className='work__info-top'>
          <h3 className='work__title'>{item.title}</h3>
          <span className='work__category'>{item.category}</span>
        </div>
        <div className='work__tech'>
          {item.techStack.map((tech) => (
            <span className='work__tech-tag' key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkItems;
