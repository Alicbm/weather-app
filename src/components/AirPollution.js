import React from 'react';
import { AppContext } from './AppContext';
import '../styles/AirPollution.css';

export function AirPollution(){
  const { airPollution } = React.useContext(AppContext);

  const carbonMonoxide = airPollution?.list[0]?.components?.co;
  const nitrogenMonoxide = airPollution?.list[0]?.components?.no;
  const nitrogenDioxide = airPollution?.list[0]?.components?.no2;
  const ozone = airPollution?.list[0]?.components?.o3;
  const sulphurDioxide = airPollution?.list[0]?.components?.so2;
  const ammonia = airPollution?.list[0]?.components?.nh3;

  return(
    <div className="AirPollution">
      <h2 className="AirPollution__title">Air Pollution</h2>
      <div className='AirPollution__content contrast'>
        <h5>Carbon Monoxide</h5>
        <p>{carbonMonoxide} μg/m3</p>
      </div>
      <div className='AirPollution__content'>
        <h5>Nitrogen Monoxide</h5>
        <p>{nitrogenMonoxide} μg/m3</p>
      </div>
      <div className='AirPollution__content contrast'>
        <h5>Nitrogen Dioxide</h5>
        <p>{nitrogenDioxide} μg/m3</p>
      </div>
      <div className='AirPollution__content'>
        <h5>Ozone</h5>
        <p>{ozone} μg/m3</p>
      </div>
      <div className='AirPollution__content contrast'>
        <h5>Sulphur Dioxide</h5>
        <p>{sulphurDioxide} μg/m3</p>
      </div>
      <div className='AirPollution__content'>
        <h5>Ammonia</h5>
        <p>{ammonia} μg/m3</p>
      </div>

    </div>
  )
}