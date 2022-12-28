export function useInfoWeather(array){
  const day = new Date().toLocaleDateString('en-us', { day: 'numeric', weekday: 'long', month: 'short' });
  const description = array?.weather[0]?.description;

  // Of kelvin a celcius
  const temperature = parseInt((array?.main?.temp) - 273.15);
  const minTemperature = parseInt((array?.main?.temp_min) - 273.15);
  const maxTemperature = parseInt((array?.main?.temp_max) - 273.15);

  const humidity = array?.main?.humidity;
  const pressure = array?.main?.pressure;
  const wind = array?.wind?.speed;

  return {
    day,
    description,
    temperature,
    minTemperature,
    maxTemperature,
    humidity,
    pressure,
    wind,
  }
}