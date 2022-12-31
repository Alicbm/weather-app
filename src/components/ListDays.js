import React from 'react';
import { AppContext } from "./AppContext";
import '../styles/ListDays.css';

export function ListDays (){
  
  const {
    day1,
    setDay1,
    day2,
    setDay2,
    day3,
    setDay3,
    day4,
    setDay4,
    day5,
    setDay5,
    daySelect
  } = React.useContext(AppContext);

  return(
    <div className="ListDays">
      <ul className="ListDays__list">
        <li className='active'id='dayOne'onClick={() => daySelect('dayOne', day1, setDay1)}>
          <a href='#one'>
            Today
          </a>
        </li>
        <li id='dayTwo'onClick={() => daySelect('dayTwo', day2, setDay2)}>
          <a href='#two'>
            Tomorrow
          </a>
        </li>
        <li id='dayThree'onClick={() => daySelect('dayThree', day3, setDay3)}>
          <a href='#three'>
            Day 3
          </a>
        </li>
        <li id='dayFour'onClick={() => daySelect('dayFour', day4, setDay4)}>
          <a href='#four'>
            Day 4
          </a>
        </li>
        <li id='dayFive'onClick={() => daySelect('dayFive', day5, setDay5)}>
          <a href='#five'>
            Day 5
          </a>
        </li>
      </ul>
    </div>
  );
}