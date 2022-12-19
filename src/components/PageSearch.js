import React from "react";
import { AppContext } from "./AppContext";
import { AirPollution } from "./AirPollution";
import { ListDays } from "./ListDays";
import { MainContent } from "./MainContent";
import { Map } from "./Map";
import { Footer } from "./Footer";
import { Description } from "./Description";
import { EachDay } from "./EachDay";
import { DarkModeButton } from "./DarkModeButton";
import {FaArrowLeft} from 'react-icons/fa'
import '../styles/PageSearch.css';

export function PageSearch(){
  const { infoDay } = React.useContext(AppContext);

  return(
    <div className="PageSearch">
      <div className="PageSearch__head">
        <FaArrowLeft className="PageSearch__head-icon"/>
        <DarkModeButton />
      </div>
      <h1 className="PageSearch__title">Medellín, Colombia</h1>
      <ListDays />
      <MainContent />
      <AirPollution />
      <Map />
      {infoDay ? <Description /> : <EachDay />}
      <Footer />
    </div>
  );
}