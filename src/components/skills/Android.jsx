import React from 'react';

const Android = () => {
  return (
    <div className='skills__content'>
      <h3 className='skills__title'>Andriod Developer</h3>

      <div className='skills__box'>
        <div className='skills__group'>
          <div className='skills__data'>
            <i className='devicon devicon-java-plain'></i>

            <div>
              <h3 className='skills__name'>Java</h3>
              <span className='skills__level'>Advance</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className='devicon devicon-xml-plain'></i>

            <div>
              <h3 className='skills__name'>XML</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>
        </div>

        <div className='skills__group'>
          <div className='skills__data'>
            <i className='devicon devicon-mysql-plain'></i>

            <div>
              <h3 className='skills__name'>MySQL</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className="devicon devicon-firebase-plain"></i>

            <div>
              <h3 className='skills__name'>Firebase</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Android;
