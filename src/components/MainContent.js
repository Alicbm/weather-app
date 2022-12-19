import React from 'react';
import { CiTempHigh } from 'react-icons/ci';
import { FiWind } from 'react-icons/fi'
import { FiSun } from 'react-icons/fi'
import { WiHumidity } from 'react-icons/wi'
import clima from '../images/clima.png';
import '../styles/MainContent.css';
import { AppContext } from './AppContext';

export function MainContent() {
  const { infoCity, nameCity } = React.useContext(AppContext);

  const day = new Date().toLocaleDateString('en-us', { day: 'numeric', weekday: 'long', month: 'short' });

  // Of kelvin a celcius
  const temperature = parseInt((infoCity?.main?.temp) - 273.15);
  const minTemperature = parseInt((infoCity?.main?.temp_min) - 273.15);
  const maxTemperature = parseInt((infoCity?.main?.temp_max) - 273.15);

  const humidity = infoCity?.main?.humidity;
  const pressure = infoCity?.main?.pressure;
  const wind = infoCity?.wind?.speed;

  return (
    <div className="MainContent">
      <h1 className="MainContent__title">{nameCity}</h1>
      <div className="MainContent__content">
        <div className="MainContent__image">
          <img className="MainContent__image-img" src={clima} alt='Weather' />
          <div className="MainContent__image-temp">
            <p>{day}</p>
            <h2>{temperature}°</h2>
            <p>Min {minTemperature}° | Max {maxTemperature}°</p>
          </div>
        </div>
        <div className="MainContent__description">
          <div className="MainContent__description-content">
            <span><CiTempHigh /></span>
            <h3>{temperature}°</h3>
            <p>Temperature</p>
          </div>
          <div className="MainContent__description-content">
            <span><FiWind /></span>
            <h3>{wind} m/s</h3>
            <p>Wind</p>
          </div>
          <div className="MainContent__description-content">
            <span><WiHumidity /></span>
            <h3>{humidity}%</h3>
            <p>Humidity</p>
          </div>
          <div className="MainContent__description-content">
            <span><FiSun /></span>
            <h3>{pressure} hPa</h3>
            <p>Pressure</p>
          </div>
        </div>

      </div>
    </div>
  )
}