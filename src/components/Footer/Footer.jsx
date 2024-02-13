import React from 'react';
import './Footer.css';
import RedCollarIcon from '../../img/icons/redcollar-logo.svg';
import { ReactComponent as RatingStar } from '../../img/icons/star.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <span className='footer__text'>nonameshop&copy;{`${new Date().getFullYear()}`}</span>
      <RatingStar className='footer__icon'/>
      <div className='footer__logo'>
        <img src={RedCollarIcon} alt="" />
        <span className='footer__text footer__logo-text'>made in red collar</span>
      </div>      
    </footer>
  );
}

export default Footer;
