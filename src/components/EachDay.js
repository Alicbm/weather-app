import React from 'react';
import { AppContext } from './AppContext';
import { useIconWeather } from '../hooks/useIconWeather';
import { useFiveDays } from '../hooks/useFiveDays';
import {SlArrowDown} from 'react-icons/sl'
import {WiHumidity} from 'react-icons/wi'
import '../styles/EachDay.css';

export function EachDay({ position, numberDay }){
  const { fiveDays } = React.useContext(AppContext);
  const weather = fiveDays?.list[position]?.weather[0]?.main;

  const { clime } = useIconWeather(weather);  
  console.log(fiveDays);
  const {
    day,
    minTemperature,
    maxTemperature,
    humidity,
  } = useFiveDays(fiveDays, position);

  return(
    <div className="EachDay">
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