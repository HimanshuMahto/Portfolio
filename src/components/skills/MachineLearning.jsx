import React from 'react';

const ML = () => {
  return (
    <div className='skills__content'>
      <h3 className='skills__title'>Machine Learning</h3>

      <div className='skills__box'>
        <div className='skills__group'>
          <div className='skills__data'>
            <i className='devicon devicon-python-plain'></i>

            <div>
              <h3 className='skills__name'>Python</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className='devicon devicon-tensorflow-original'></i>

            <div>
              <h3 className='skills__name'>TensorFlow</h3>
              <span className='skills__level'>Basic</span>
            </div>
          </div>
        </div>

        <div className='skills__group'>
          <div className='skills__data'>
            <i className='uil uil-channel'></i>

            <div>
              <h3 className='skills__name'>CNN</h3>
              <span className='skills__level'>Basic</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className='devicon devicon-scikitlearn-plain'></i>

            <div>
              <h3 className='skills__name'>Scikit-learn</h3>
              <span className='skills__level'>Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ML;
