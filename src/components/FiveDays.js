import React from "react";
import { AppContext } from "./AppContext";
import { Description } from "./Description";
import { EachDay } from "./EachDay";
import '../styles/FiveDays.css'

export function FiveDays() {
  const { infoDay } = React.useContext(AppContext);

  return (
    <div className="FiveDays">
      <h2 className="FiveDays__title">Week Forecast</h2>
      <div className="FiveDays__content">
        {infoDay === 'day1' 
          ? <Description position={5} numberDay='day1'/> 
          : <EachDay position={5} numberDay='day1'/>}
      </div>
      <div className="FiveDays__content">
        {infoDay === 'day2' 
          ? <Description position={13} numberDay='day2' /> 
          : <EachDay position={13} numberDay='day2' />}
      </div>
      <div className="FiveDays__content">
        {infoDay === 'day3' 
          ? <Description position={21} numberDay='day3' /> 
          : <EachDay position={21} numberDay='day3' />}
      </div>
      <div className="FiveDays__content">
        {infoDay === 'day4' 
          ? <Description position={29} numberDay='day4' /> 
          : <EachDay position={29} numberDay='day4' />}
      </div>
      <div className="FiveDays__content">
        {infoDay === 'day5' 
          ? <Description position={37} numberDay='day5' /> 
          : <EachDay position={37} numberDay='day5' />}
      </div>
    </div>
  )
}

//de 8 a 8