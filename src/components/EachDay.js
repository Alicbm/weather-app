import React from 'react';
import { AppContext } from './AppContext';
import {SlArrowDown} from 'react-icons/sl'
import {WiHumidity} from 'react-icons/wi'
// import clima from '../images/clima.png';

import clear from '../icons/clear.png';
import cloud from '../icons/cloud.png';
import mist from '../icons/mist.png';
import rain from '../icons/rain.png';
import snow from '../icons/snow.png';
import thunderstorm from '../icons/thunderstorm.png';

import '../styles/EachDay.css';

export function EachDay({ position, numberDay }){
  const { setInfoDay, fiveDays } = React.useContext(AppContext);

  const date =  new Date(fiveDays?.list[position]?.dt_txt);
  const weather = fiveDays?.list[position]?.weather[0]?.main;

  const day = date.toLocaleDateString('en-us', { day:'numeric', weekday: 'short' });
  const maxTemperature = parseInt((fiveDays?.list[position]?.main?.temp_max) - 273.15);
  const minTemperature = parseInt((fiveDays?.list[position]?.main?.temp_min) - 273.15);
  const humidity = fiveDays?.list[position]?.main?.humidity;

  let clime;
  if (weather === 'Clouds') {
    clime = cloud;
  } else if (weather === 'Thunderstorm') {
    clime = thunderstorm;
  } else if (weather === 'Drizzle' || weather === 'Rain') {
    clime = rain;
  } else if (weather === 'Snow') {
    clime = snow;
  } else if (weather === 'Clear') {
    clime = clear;
  } else {
    clime = mist;
  }

  return(
    <div className="EachDay" onClick={() => setInfoDay(numberDay)}>
      <p className="EachDay__day">{day}</p>
      <div className="EachDay__temp">
        <h5>{maxTemperature}°</h5>
        <p>/{minTemperature}°</p>
      </div>
      <img className="EachDay__image" src={clime} alt='weather' />
      <div className='EachDay__rain'>
        <WiHumidity className='EachDay__rain-icon'/>
        <p>{humidity}%</p>
      </div>
      <SlArrowDown className='EachDay__arrow'/>
    </div>
  )
}