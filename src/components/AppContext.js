import React from "react";

export const AppContext = React.createContext();

export function ContainerApp({ children }) {
  const apiKey = process.env.REACT_APP_KEY;
  const mainUrl = process.env.REACT_APP_MAIN_URL;
  const locationName = process.env.REACT_APP_LOCATION_NAME;

  const [darkMode, setDarkMode] = React.useState(false);
  const [infoDay, setInfoDay] = React.useState(false);
  const [citySearch, setCitySearch] = React.useState('londres');
  const [latitude, setLatitude] = React.useState(51.5073219);
  const [longitude, setLlongitude] = React.useState(-0.1276474);
  const [nameCity, setNameCity] = React.useState();
  const [infoCity, setInfoCity] = React.useState();
  const [fiveDays, setFiveDays] = React.useState();
  const [sunrise, setSunrise] = React.useState(1671350518);
  const [sunset, setSunset] = React.useState(1671378729);
  const [airPollution, setAirPollution] = React.useState();
  
  React.useEffect(() => {
    const handleCoordinates = async () => {
      const res = await fetch(`${locationName}${citySearch}&appid=${apiKey}`);
      const json = await res.json();
  
      setLatitude(json[0].lat);
      setLlongitude(json[0].lon);
      setNameCity(`${json[0].name}, ${json[0].state}`);
    }
  
    const handleInfo = async () => {
      const res = await fetch(`${mainUrl}/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`);
      const json = await res.json();
      
      setInfoCity(json);
    }
  
    const handleFiveDays = async () => {
      const res = await fetch(`${mainUrl}/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`);
      const json = await res.json();
  
      setFiveDays(json);
      setSunrise(json?.city?.sunrise);
      setSunset(json?.city?.sunset);
      console.log(json);
    }

    const handleAir = async () => {
      const res = await fetch(`${mainUrl}/air_pollution/history?lat=${latitude}&lon=${longitude}&start=${sunrise}&end=${sunset}&appid=${apiKey}`);
      const json = await res.json();
    
      setAirPollution(json);
      console.log(json?.list[0]?.components?.co);
    }

    handleCoordinates();
    handleInfo();
    handleFiveDays();
    handleAir();
  }, [apiKey, citySearch, fiveDays?.city?.sunrise, fiveDays?.city?.sunset, latitude, locationName, longitude, mainUrl, sunrise, sunset]);
  
  if(darkMode){
    document.querySelector('body').classList.add('DarkMode');
  }else{
    document.querySelector('body').classList.remove('DarkMode');
  }

  return (
    <AppContext.Provider value={{
      darkMode,
      setDarkMode,
      
      infoDay,
      setInfoDay,

      latitude,
      longitude,

      nameCity,
      infoCity,

      fiveDays,
      airPollution,

      citySearch,
      setCitySearch,
    }}>
      {children}
    </AppContext.Provider>
  )
}
