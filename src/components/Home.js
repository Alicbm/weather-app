import React from "react";
import { AppContext } from "./AppContext";
import { AirPollution } from "./AirPollution";
import { ListDays } from "./ListDays";
import { LogoHead } from "./LogoHead";
import { MainContent } from "./MainContent";
import { Map } from "./Map";
import { Search } from "./Search";
import { Footer } from "./Footer";
import { FiveDays } from "./FiveDays";
import '../styles/Home.css';
import { FamousCity } from "./FamousCity";
import { LogoSearch } from "./LogoSearch";

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