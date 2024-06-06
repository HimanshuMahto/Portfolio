import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <h1 className='footer__title'>Himanshu Kumar Mahto</h1>

        <ul className='footer__list'>
          <li>
            <a href='#about' className='footer__link'>
              About
            </a>
          </li>

          <li>
            <a href='#portfolio' className='footer__link'>
              Projects
            </a>
          </li>

          <li>
            <a href='#testimonials' className='footer__link'>
              Testimonials
            </a>
          </li>
        </ul>

        <div className='footer__social'>
          <a href='https://www.t.me/Himanshu_0101' className='footer__social-link' target='_blank'>
            <i className='bx bxl-telegram'></i>
          </a>

          <a href='https://www.instagram.com/_shoyo_.10' className='footer__social-link' target='_blank'>
            <i className='bx bxl-instagram'></i>
          </a>

          <a href='https://twitter.com/HimanshuMahto_' className='footer__social-link' target='_blank'>
            <i className='bx bxl-twitter'></i>
          </a>
        </div>

        <div className='footer__copy'>
          &#169; Shoyo. All rigths reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
