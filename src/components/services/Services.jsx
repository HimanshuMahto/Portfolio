import React from 'react';
import './services.css';

const areas = [
  {
    id: 'frontend',
    icon: 'uil uil-react',
    title: 'Frontend Development',
    description: 'Building fast, accessible, and visually polished web applications.',
    points: [
      'Responsive layouts with React & Vite',
      'Component-driven architecture',
      'Performance & accessibility optimization',
      'UI animations and micro-interactions',
      'Cross-browser compatibility',
    ],
    tech: ['React', 'JavaScript', 'CSS', 'HTML', 'Git'],
  },
  {
    id: 'android',
    icon: 'uil uil-android',
    title: 'Android Development',
    description: 'Crafting native Android apps focused on smooth UX and reliable performance.',
    points: [
      'Native Android apps with Java',
      'MVVM architecture patterns',
      'Firebase integration & real-time data',
      'Local storage with SQLite / Room',
      'Material Design implementation',
    ],
    tech: ['Java', 'Android SDK', 'Firebase', 'XML', 'MySQL'],
  },
  {
    id: 'ml',
    icon: 'uil uil-brain',
    title: 'Machine Learning',
    description: 'Designing and training models to extract insights from real-world data.',
    points: [
      'Image classification with CNNs',
      'Data preprocessing & feature engineering',
      'Model evaluation and tuning',
      'Scikit-learn pipelines',
      'TensorFlow / Keras model training',
    ],
    tech: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'CNN'],
  },
];

const Services = () => {
  return (
    <section className='services section' id='services'>
      <h2 className='section__title'>Expertise</h2>
      <span className='section__subtitle'>Areas I specialize in</span>

      <div className='services__container container'>
        {areas.map((area) => (
          <div className='services__card' key={area.id}>
            <div className='services__card-top'>
              <div className='services__icon-wrap'>
                <i className={area.icon}></i>
              </div>
              <h3 className='services__title'>{area.title}</h3>
              <p className='services__desc'>{area.description}</p>
            </div>

            <ul className='services__points'>
              {area.points.map((point) => (
                <li key={point}>
                  <i className='uil uil-check'></i>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className='services__tech'>
              {area.tech.map((t) => (
                <span className='services__tech-tag' key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
