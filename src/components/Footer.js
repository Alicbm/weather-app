import React from 'react';
import { BsPersonCircle } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import darkLogo from '../images/dark-blue.png';
import whiteLogo from '../images/white.png';
import '../styles/Footer.css';
import { AppContext } from './AppContext';

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
          <p><a href="#"><BsLinkedin className='Footer__list-icon' />Linkedin</a></p>
        </li>
        <li>
          <p><a href="#"><BsGithub className='Footer__list-icon' />GitHub</a></p>
        </li>
      </ul>
      <div className="Footer__logo">
        <img src={!darkMode ? darkLogo : whiteLogo} alt="My logo" />
      </div>
    </div>
  )
}