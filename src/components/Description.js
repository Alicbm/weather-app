import React from 'react';
import { AppContext } from './AppContext';
import { useIconWeather } from '../hooks/useIconWeather';
import { useFiveDays } from '../hooks/useFiveDays';
import { SlArrowUp } from 'react-icons/sl'
import { GiRaining } from 'react-icons/gi'
import { FiWind } from 'react-icons/fi'
import { FiSun } from 'react-icons/fi'
import { WiHumidity } from 'react-icons/wi'
import { BsSunsetFill } from 'react-icons/bs'
import { BsFillSunriseFill } from 'react-icons/bs'
import '../styles/Description.css';

export function Description({ position, numberDay }) {
  const { fiveDays } = React.useContext(AppContext);

  const weather = fiveDays?.list[position]?.weather[0]?.main;
  const { clime } = useIconWeather(weather);

  const {
    day,
    temperature,
    maxTemperature,
    humidity,
    pressure,
    description,
    wind,
    clouds,
    sunrise,
    sunset,
  } = useFiveDays(fiveDays, position);


  return (
    <div className="Description" >
        <SlArrowUp className='Description__arrow' />
      <div className="Description__content">
        <p className="Description__title">{day}</p>
        <div className="Description__img">
          <div className="Description__img-temp">
            <h5>{temperature}°</h5>
            <img src={clime} alt='Weather' />
          </div>
          <div className="Description__img-wind">
            <div><GiRaining className='Description-icon' />{clouds}%</div>
            <div><FiWind className='Description-icon' />{wind} m/s</div>
          </div>
        </div>
        <div className="Description__description">
          <p>{description}. maximun de {maxTemperature}°. Winds of {wind} m/s</p>
        </div>
        <div className="Description__grid">
          <div className="Description__grid-one">
            <div className="Description__grid-one-humidity">
              <WiHumidity className='Description-icon' />
              <div>
                <p>Humidity</p>
                <h5>{humidity}%</h5>
              </div>
            </div>
            <div className="Description__grid-one-uvIndex">
              <FiSun className='Description-icon' />
              <div>
                <p>Pressure</p>
                <h5>{pressure}</h5>
              </div>
            </div>
          </div>
          <div className="Description__grid-two">
            <div className="Description__grid-two-sunrise">
              <BsFillSunriseFill className='Description-icon' />
              <div>
                <p>Sunrise</p>
                <h5>{sunrise} am</h5>
              </div>
            </div>
            <div className="Description__grid-two-sunset">
              <BsSunsetFill className='Description-icon' />
              <div>
                <p>Sunset</p>
                <h5>{sunset} pm</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}