import React from 'react';
import { AppContext } from './AppContext';
import {SlArrowDown} from 'react-icons/sl'
import {WiHumidity} from 'react-icons/wi'
import clima from '../images/clima.png';
import '../styles/EachDay.css';

export function EachDay({ position }){
  const { setInfoDay, fiveDays } = React.useContext(AppContext);

  const date =  new Date(fiveDays?.list[position]?.dt_txt);

  const day = date.toLocaleDateString('en-us', { day:'numeric', weekday: 'short' });
  const maxTemperature = parseInt((fiveDays?.list[position]?.main?.temp_max) - 273.15);
  const minTemperature = parseInt((fiveDays?.list[position]?.main?.temp_min) - 273.15);
  const humidity = fiveDays?.list[position]?.main?.humidity;

  return(
    <div className="EachDay" onClick={() => setInfoDay(true)}>
      <p className="EachDay__day">{day}</p>
      <div className="EachDay__temp">
        <h5>{maxTemperature}°</h5>
        <p>/{minTemperature}°</p>
      </div>
      <img className="EachDay__image" src={clima} alt='weather' />
      <div className='EachDay__rain'>
        <WiHumidity className='EachDay__rain-icon'/>
        <p>{humidity}%</p>
      </div>
      <SlArrowDown className='EachDay__arrow'/>
    </div>
  )
}