import React from 'react';

const Frontend = () => {
  return (
    <div className='skills__content'>
      <h3 className='skills__title'>Frontend Developer</h3>

      <div className='skills__box'>
        <div className='skills__group'>
          <div className='skills__data'>
            <i className='uil uil-html5'></i>

            <div>
              <h3 className='skills__name'>HTML</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className='uil uil-css3-simple'></i>

            <div>
              <h3 className='skills__name'>CSS</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className='uil uil-java-script'></i>

            <div>
              <h3 className='skills__name'>JavaScript</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>
        </div>

        <div className='skills__group'>
          {/* <div className='skills__data'>
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>Bootstrap</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div> */}

          <div className='skills__data'>
            <i className='uil uil-code-branch'></i>

            <div>
              <h3 className='skills__name'>Git</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className='uil uil-react'></i>

            <div>
              <h3 className='skills__name'>React</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
