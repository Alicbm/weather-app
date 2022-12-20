import React from 'react';
import { FiWind } from 'react-icons/fi'
import { FiSun } from 'react-icons/fi'
import { WiHumidity } from 'react-icons/wi'
import clima from '../images/clima.png';
import { AppContext } from './AppContext';
import '../styles/EachFamousCity.css'

export function EachFamousCity({ lat, lon, name }) {

  const { mainUrl, apiKey } = React.useContext(AppContext);
  const [info, setInfo] = React.useState();


  React.useEffect(() => {
    const infoCity = async () => {
      const res = await fetch(`${mainUrl}/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
      const json = await res.json();

      setInfo(json);
    }
    infoCity();
  }, [apiKey, lat, lon, mainUrl])

  // Of kelvin a celcius
  const temperature = parseInt((info?.main?.temp) - 273.15);

  const humidity = info?.main?.humidity;
  const pressure = info?.main?.pressure;
  const wind = info?.wind?.speed;

  return (
    <div className="EachFamousCity">
      <div className="EachFamousCity__image">
        <div className="EachFamousCity__image-temp">
          <h2>{name}°</h2>
          <p>{temperature}</p>
        </div>
        <img className="EachFamousCity__image-img" src={clima} alt='Weather' />
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