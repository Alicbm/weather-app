import React from 'react';
import '../styles/ListDays.css';
import { AppContext } from './AppContext';

export function ListDays (){
  const { setNameCache } = React.useContext(AppContext);

  const daySelect = (id, version) => {
    document.querySelector('.active').classList.remove('active');
    const day = document.getElementById(id);
    day.classList.add('active');
    }

  return(
    <div className="ListDays">
      <ul className="ListDays__list">
        <li 
        className='active'
        id='dayOne'
        onClick={() => daySelect('dayOne')}
        >
          Today
        </li>
        <li 
        id='dayTwo'
        onClick={() => daySelect('dayTwo')}
        >
          Tomorrow
        </li>
        <li 
        id='dayThree'
        onClick={() => daySelect('dayThree')}
        >
          Day 3
        </li>
        <li 
        id='dayFour'
        onClick={() => daySelect('dayFour')}
        >
          Day 4
        </li>
        <li 
        id='dayFive'
        onClick={() => daySelect('dayFive')}
        >
          Day 5
        </li>
      </ul>
    </div>
  );
}