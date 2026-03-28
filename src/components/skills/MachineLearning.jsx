import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const skills = [
  { icon: 'devicon devicon-python-plain', name: 'Python', percentage: 75 },
  { icon: 'devicon devicon-tensorflow-original', name: 'TensorFlow', percentage: 60 },
  { icon: 'uil uil-channel', name: 'CNN', percentage: 58 },
  { icon: 'devicon devicon-scikitlearn-plain', name: 'Scikit-learn', percentage: 62 },
];

const ML = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <div className='skills__content' ref={ref}>
      <h3 className='skills__title'>Machine Learning</h3>

      <div className='skills__list'>
        {skills.map((skill) => (
          <div className='skills__data' key={skill.name}>
            <div className='skills__data-header'>
              <i className={skill.icon}></i>
              <span className='skills__name'>{skill.name}</span>
              <span className='skills__percentage'>{skill.percentage}%</span>
            </div>
            <div className='skills__bar-bg'>
              <div
                className='skills__bar'
                style={{ width: isVisible ? `${skill.percentage}%` : '0%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ML;
