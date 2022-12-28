import React from 'react';
import { AppContext } from './AppContext';
import '../styles/DarkModeButton.css';

export function DarkModeButton({ id }){
  const { darkMode, setDarkMode } = React.useContext(AppContext);

  return(
    <div className="DarkModeButton">
      <input type='checkbox' id={id}/>
      <label for={id} onClick={() => setDarkMode(!darkMode)} ></label>
    </div>
  )
}
