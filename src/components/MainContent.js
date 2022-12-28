import React from 'react';
import { AppContext } from './AppContext';
import { CiTempHigh } from 'react-icons/ci';
import { FiWind } from 'react-icons/fi'
import { FiSun } from 'react-icons/fi'
import { WiHumidity } from 'react-icons/wi'
import { useIconWeather } from '../hooks/useIconWeather';
import '../styles/MainContent.css';
import { useInfoWeather } from '../hooks/useInfoWeather';


export function MainContent() {
  const { infoCity, nameCity } = React.useContext(AppContext);
  const weather = infoCity?.weather[0]?.main;

  const { clime } = useIconWeather(weather);

  const {
    day,
    description,
    temperature,
    minTemperature,
    maxTemperature,
    humidity,
    pressure,
    wind,
  } = useInfoWeather(infoCity);

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