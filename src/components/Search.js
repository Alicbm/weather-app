import React from 'react';
import { AppContext } from './AppContext';
import '../styles/Search.css';

export function Search(){
  const { setCitySearch } = React.useContext(AppContext);
  const [place, setPlace] = React.useState('');

  return(
    <div className="Search">
      <input 
        className="Search__input" 
        type='text' 
        placeholder='Search a city...'
        onChange={(e) => setPlace(e.target.value)}
      />
      <button 
        className="Search__button"
        onClick={() => setCitySearch(place)}
      >
        Search
      </button>
    </div>
  )
}