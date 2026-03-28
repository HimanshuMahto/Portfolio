import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const skills = [
  { icon: 'uil uil-html5', name: 'HTML', percentage: 88 },
  { icon: 'uil uil-css3-simple', name: 'CSS', percentage: 82 },
  { icon: 'uil uil-java-script', name: 'JavaScript', percentage: 75 },
  { icon: 'uil uil-code-branch', name: 'Git', percentage: 78 },
  { icon: 'uil uil-react', name: 'React', percentage: 72 },
];

const Frontend = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <div className='skills__content' ref={ref}>
      <h3 className='skills__title'>Frontend Developer</h3>

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

export default Frontend;
