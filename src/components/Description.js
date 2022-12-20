import React from 'react';
import { AppContext } from './AppContext';
import clima from '../images/clima.png';
import { SlArrowUp } from 'react-icons/sl'
import { GiRaining } from 'react-icons/gi'
import { FiWind } from 'react-icons/fi'
import { FiSun } from 'react-icons/fi'
import { WiHumidity } from 'react-icons/wi'
import { BsSunsetFill } from 'react-icons/bs'
import { BsFillSunriseFill } from 'react-icons/bs'
import '../styles/Description.css';

export function Description({ position }) {
  const { setInfoDay, fiveDays } = React.useContext(AppContext);

  const date = new Date(fiveDays?.list[position]?.dt_txt);

  const day = date.toLocaleDateString('en-us', { day: 'numeric', weekday: 'short' });
  const temperature = parseInt((fiveDays?.list[position]?.main?.temp) - 273.15);
  const maxTemperature = parseInt((fiveDays?.list[position]?.main?.temp_max) - 273.15);
  const humidity = fiveDays?.list[position]?.main?.humidity;
  const pressure = fiveDays?.list[position]?.main?.pressure;
  const description = fiveDays?.list[position]?.weather[0]?.description;
  const wind = fiveDays?.list[position]?.wind?.speed;
  const clouds = fiveDays?.list[position]?.clouds?.all;

  const sunriseTimestand = new Date(fiveDays?.city?.sunrise);
  const sunrise = `${sunriseTimestand.getHours()}:${sunriseTimestand.getMinutes()}`;
  const sunsetTimestand = new Date(fiveDays?.city?.sunset);
  const sunset = `${sunsetTimestand.getHours()}:${sunsetTimestand.getMinutes()}`;


  return (
    <div className="Description" onClick={() => setInfoDay(false)}>
        <SlArrowUp className='Description__arrow' />
      <div className="Description__content">
        <p className="Description__title">{day}</p>
        <div className="Description__img">
          <div className="Description__img-temp">
            <h5>{temperature}°</h5>
            <img src={clima} alt='Weather' />
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