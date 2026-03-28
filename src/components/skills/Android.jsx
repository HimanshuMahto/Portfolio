import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const skills = [
  { icon: 'devicon devicon-java-plain', name: 'Java', percentage: 85 },
  { icon: 'devicon devicon-xml-plain', name: 'XML', percentage: 78 },
  { icon: 'devicon devicon-mysql-plain', name: 'MySQL', percentage: 72 },
  { icon: 'devicon devicon-firebase-plain', name: 'Firebase', percentage: 70 },
];

const Android = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <div className='skills__content' ref={ref}>
      <h3 className='skills__title'>Android Developer</h3>

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

export default Android;
