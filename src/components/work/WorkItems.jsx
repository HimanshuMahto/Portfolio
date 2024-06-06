import React from 'react';

const WorkItems = ({ item }) => {
  return (
    <div className='work__card' key={item.id}>
      <img src={item.image} alt={item.title} className='work__img' />
      <h3 className='work__title'>{item.title}</h3>
      <a href={item.link} target='_blank' rel='noopener noreferrer' className='work__button'>
        Links <i className='bx bx-right-arrow-alt work__button-icon'></i>
      </a>
    </div>
  );
};

export default WorkItems;
