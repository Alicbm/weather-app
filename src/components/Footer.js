import React from 'react';
import { AppContext } from './AppContext';
import { BsPersonCircle } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import darkLogo from '../images/dark-blue.png';
import whiteLogo from '../images/white.png';
import '../styles/Footer.css';

export function Footer() {
  const { darkMode } = React.useContext(AppContext);

  return (
    <div className='Footer'>
      <ul className="Footer__list">
        <li>
          <span><BsPersonCircle className='Footer__list-icon' /></span>
          <p><a href="#">Who am I?</a></p>
        </li>
        <li>
          <p><a href="https://linkedin.com/in/alic-barandica" target='__blank'><BsLinkedin className='Footer__list-icon' />Linkedin</a></p>
        </li>
        <li>
          <p><a href="https://github.com/Alicbm/weather-app" target='__blank'><BsGithub className='Footer__list-icon' />GitHub</a></p>
        </li>
      </ul>
      <div className="Footer__logo">
        <img src={!darkMode ? darkLogo : whiteLogo} alt="My logo" />
      </div>
    </div>
  )
}