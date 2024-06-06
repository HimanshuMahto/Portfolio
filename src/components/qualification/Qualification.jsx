import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  // const [clickedItem, setClickedItem] = useState(null);

  // const handleItemClick = (item) => {
  //   setClickedItem(item);
  // };

  // const getItemStyle = (item) => ({
  //   fontSize: clickedItem === item ? 'var(--h1-font-size)' : 'var(--small-font-size)',
  //   transition: 'background-color 0.3s ease, color 0.3s ease, font-size 0.3s ease',
  // });

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i 
              className="uil uil-graduation-cap qualification__icon" 
              // style={getItemStyle('experience')}
              // onClick={() => handleItemClick('education')}
              ></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i 
              className="uil uil-briefcase-alt qualification__icon" 
              // style={getItemStyle('experience')}
              // onClick={() => handleItemClick('experience')}
              ></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Bachelor's of Technology</h3>
                <span className="qualification__subtitle">
                  Jaypee University of Engineering and Technology
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Senior Secondary</h3>
                <span className="qualification__subtitle">
                  ICSE - School
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2020
                </div>
              </div>
            </div> */}

            {/* <div className="qualification__data">
              <div>
                <h3 className="qualification__title"></h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div> */}

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
              </div>

              <div>
                <h3 className="qualification__title">Senior Secondary</h3>
                <span className="qualification__subtitle">
                  ICSE - Board
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2020
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Tech Intern</h3>
                <span className="qualification__subtitle">
                  Facets.cloud - Bangalore, India
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> May 2024 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Web Designer</h3>
                <span className="qualification__subtitle">
                  HungryMind - Pune, India
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> June - July 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Research Intern</h3>
                <span className="qualification__subtitle">Orision - Pune, India</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> May - July 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
