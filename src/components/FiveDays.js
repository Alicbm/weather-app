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
        {infoDay ? <Description position={5} /> : <EachDay position={5} />}
      </div>
      <div className="FiveDays__content">
        {infoDay ? <Description position={13} /> : <EachDay position={13} />}
      </div>
      <div className="FiveDays__content">
        {infoDay ? <Description position={21} /> : <EachDay position={21} />}
      </div>
      <div className="FiveDays__content">
        {infoDay ? <Description position={29} /> : <EachDay position={29} />}
      </div>
      <div className="FiveDays__content">
        {infoDay ? <Description position={37} /> : <EachDay position={37} />}
      </div>
    </div>
  )
}

//de 8 a 8