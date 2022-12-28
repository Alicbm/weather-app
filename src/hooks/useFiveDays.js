export function useFiveDays(array, position){
  const date = new Date(array?.list[position]?.dt_txt);
  const day = date.toLocaleDateString('en-us', { day: 'numeric', weekday: 'short' });
  const temperature = parseInt((array?.list[position]?.main?.temp) - 273.15);
  const minTemperature = parseInt((array?.list[position]?.main?.temp_min) - 273.15);
  const maxTemperature = parseInt((array?.list[position]?.main?.temp_max) - 273.15);
  const humidity = array?.list[position]?.main?.humidity;
  const pressure = array?.list[position]?.main?.pressure;
  const description = array?.list[position]?.weather[0]?.description;
  const wind = array?.list[position]?.wind?.speed;
  const clouds = array?.list[position]?.clouds?.all;

  const sunriseTimestand = new Date(array?.city?.sunrise);
  const sunrise = `${sunriseTimestand.getHours()}:${sunriseTimestand.getMinutes()}`;
  const sunsetTimestand = new Date(array?.city?.sunset);
  const sunset = `${sunsetTimestand.getHours()}:${sunsetTimestand.getMinutes()}`;

  return {
    date,
    day,
    temperature,
    minTemperature,
    maxTemperature,
    humidity,
    pressure,
    description,
    wind,
    clouds,
    sunrise,
    sunset,
  }
}