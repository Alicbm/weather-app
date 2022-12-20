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

export function Home(){

  return(
    <div className="Home">
      <LogoHead />
      <Search />
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