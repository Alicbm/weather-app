import React from 'react';
import { CiTempHigh } from 'react-icons/ci';
import { FiWind } from 'react-icons/fi'
import { FiSun } from 'react-icons/fi'
import { WiHumidity } from 'react-icons/wi'
// import clima from '../images/clima.png';
import { AppContext } from './AppContext';

import clear from '../icons/clear.png';
import cloud from '../icons/cloud.png';
import mist from '../icons/mist.png';
import rain from '../icons/rain.png';
import snow from '../icons/snow.png';
import thunderstorm from '../icons/thunderstorm.png';

import '../styles/MainContent.css';


export function MainContent() {
  const { infoCity, nameCity } = React.useContext(AppContext);
  const weather = infoCity?.weather[0]?.main;

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
    clime = mist
  }

  const day = new Date().toLocaleDateString('en-us', { day: 'numeric', weekday: 'long', month: 'short' });
  const description = infoCity?.weather[0]?.description;

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
      <p className="MainContent__description-weather">{weather}, {description}</p>
      <div className="MainContent__content">
        <div className="MainContent__image">
          <img className="MainContent__image-img" src={clime} alt='Weather' />
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