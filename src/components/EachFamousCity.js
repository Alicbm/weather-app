import React from 'react';
import { AppContext } from './AppContext';
import { FiWind } from 'react-icons/fi'
import { FiSun } from 'react-icons/fi'
import { WiHumidity } from 'react-icons/wi'
import { useIconWeather } from '../hooks/useIconWeather';
import { useInfoWeather } from '../hooks/useInfoWeather';
import '../styles/EachFamousCity.css'

export function EachFamousCity({ lat, lon, name }) {

  const { mainUrl, apiKey } = React.useContext(AppContext);
  const [info, setInfo] = React.useState();
  
  const weather = info?.weather[0]?.main;
  const { clime } = useIconWeather(weather);

  React.useEffect(() => {
    const infoCity = async () => {
      const res = await fetch(`${mainUrl}/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
      const json = await res.json();

      setInfo(json);
    }
    infoCity();
  }, [apiKey, lat, lon, mainUrl])

  const {
    temperature,
    humidity,
    pressure,
    wind,
  } = useInfoWeather(info);

  return (
    <div className="EachFamousCity">
      <div className="EachFamousCity__image">
        <div className="EachFamousCity__image-temp">
          <h2>{name}</h2>
          <p>{temperature}°</p>
        </div>
        <img className="EachFamousCity__image-img" src={clime} alt='Weather' />
      </div>
      <div className="EachFamousCity__description">
        <div className="EachFamousCity__description-content">
          <span><FiWind /></span>
          <h3>{wind} m/s</h3>
          <p>Wind</p>
        </div>
        <div className="EachFamousCity__description-content">
          <span><WiHumidity /></span>
          <h3>{humidity}%</h3>
          <p>Humidity</p>
        </div>
        <div className="EachFamousCity__description-content">
          <span><FiSun /></span>
          <h3>{pressure} hPa</h3>
          <p>Pressure</p>
        </div>
      </div>

    </div>
  )
}