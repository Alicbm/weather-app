import React from "react";
import { AppContext } from "./AppContext";
import { Description } from "./Description";
import { EachDay } from "./EachDay";
import '../styles/FiveDays.css'

export function FiveDays() {
  const {
    day1,
    setDay1,
    day2,
    setDay2,
    day3,
    setDay3,
    day4,
    setDay4,
    day5,
    setDay5,
    daySelect,
  } = React.useContext(AppContext);

  return (
    <div className="FiveDays">
      <h2 className="FiveDays__title">Week Forecast</h2>
      <div className="FiveDays__content" onClick={() => daySelect('dayOne', !day1, setDay1)}>
        {day1   
          ? <Description position={5} /> 
          : <EachDay position={5} />}
      </div>
      <div className="FiveDays__content" onClick={() => daySelect('dayTwo', day2, setDay2)}>
        {day2   
          ? <Description position={13} /> 
          : <EachDay position={13} />}
      </div>
      <div className="FiveDays__content" onClick={() => daySelect('dayThree', day3, setDay3)}>
        {day3   
          ? <Description position={21} /> 
          : <EachDay position={21} />}
      </div>
      <div className="FiveDays__content" onClick={() => daySelect('dayFour', day4, setDay4)}>
        {day4   
          ? <Description position={29} /> 
          : <EachDay position={29} />}
      </div>
      <div className="FiveDays__content" onClick={() => daySelect('dayFive', day5, setDay5)}>
        {day5   
          ? <Description position={37} /> 
          : <EachDay position={37} />}
      </div>
    </div>
  )
}

//de 8 a 8