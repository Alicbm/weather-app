import clear from '../icons/clear.png';
import cloud from '../icons/cloud.png';
import mist from '../icons/mist.png';
import rain from '../icons/rain.png';
import snow from '../icons/snow.png';
import thunderstorm from '../icons/thunderstorm.png';

export function useIconWeather (item){
  let clime;
  if (item === 'Clouds') {
    clime = cloud;
  } else if (item === 'Thunderstorm') {
    clime = thunderstorm;
  } else if (item === 'Drizzle' || item === 'Rain') {
    clime = rain;
  } else if (item === 'Snow') {
    clime = snow;
  } else if (item === 'Clear') {
    clime = clear;
  } else {
    clime = mist
  }

  return{ clime }
}