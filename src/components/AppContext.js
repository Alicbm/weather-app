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

  const [nameCity, setNameCity] = React.useState(citySearch);
  const [infoCity, setInfoCity] = React.useState();
  const [fiveDays, setFiveDays] = React.useState();

  const [sunrise, setSunrise] = React.useState(1671350518);
  const [sunset, setSunset] = React.useState(1671378729);

  const [airPollution, setAirPollution] = React.useState();

  const [day1, setDay1] = React.useState(true);
  const [day2, setDay2] = React.useState(false);
  const [day3, setDay3] = React.useState(false);
  const [day4, setDay4] = React.useState(false);
  const [day5, setDay5] = React.useState(false);


  React.useEffect(() => {
    const handleCoordinates = async () => {
      const res = await fetch(`${locationName}${citySearch}&appid=${apiKey}`);
      const json = await res.json();

      setLatitude(json[0].lat);
      setLlongitude(json[0].lon);
      setNameCity(json[0].name);
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
    }

    const handleAir = async () => {
      const res = await fetch(`${mainUrl}/air_pollution/history?lat=${latitude}&lon=${longitude}&start=${sunrise}&end=${sunset}&appid=${apiKey}`);
      const json = await res.json();

      setAirPollution(json);
    }

    handleCoordinates();
    handleInfo();
    handleFiveDays();
    handleAir();
  }, [apiKey,
    citySearch,
    fiveDays?.city?.sunrise,
    fiveDays?.city?.sunset,
    latitude,
    locationName,
    longitude,
    mainUrl,
    sunrise,
    sunset]
  );

  const daySelect = (id, state, setState) => {
    const day = document.getElementById(id);
    day.classList.value === 'active' && day.id !== 'dayOne'
      ? day.classList.remove('active') : day.classList.add('active');

    setState(!state)
  }

  if (darkMode) {
    document.querySelector('body').classList.add('DarkMode');
  } else {
    document.querySelector('body').classList.remove('DarkMode');
  }

  return (
    <AppContext.Provider value={{
      apiKey,
      mainUrl,

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
    }}>
      {children}
    </AppContext.Provider>
  )
}
