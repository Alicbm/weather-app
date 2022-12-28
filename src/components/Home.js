import React from "react";
import { LogoHead } from "./LogoHead";
import { Search } from "./Search";
import { LogoSearch } from './LogoSearch';
import { ListDays } from "./ListDays";
import { MainContent } from "./MainContent";
import { AirPollution } from "./AirPollution";
import { Map } from "./Map";
import { FiveDays } from "./FiveDays";
import { FamousCity } from "./FamousCity";
import { Footer } from "./Footer";
import '../styles/Home.css';

export function Home(){

  return(
    <div className="Home">
      <div className="Home__smart">
        <LogoHead />
        <Search />
      </div>
      <div className="Home__long">
        <LogoSearch />
      </div>
      <ListDays />
      <MainContent />
      <AirPollution />
      <Map />
      <FiveDays />
      <FamousCity />
      <Footer />
    </div>
  );
}