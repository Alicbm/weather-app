import React from 'react';
import '../styles/DarkModeButton.css';
import { AppContext } from './AppContext';

export function DarkModeButton(){
  const { darkMode, setDarkMode } = React.useContext(AppContext);

  return(
    <div className="DarkModeButton">
      <input type='checkbox' id='toggle'/>
      <label for='toggle' onClick={() => setDarkMode(!darkMode)} ></label>
    </div>
  )
}
