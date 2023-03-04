import { useEffect, useState } from 'react';
import './Weather.css';
import axios from 'axios';

function Weather() {
  const [temperature, setTemperature] = useState(0);
  const [windspeed, setWindspeed] = useState(0);
  useEffect(() => {
    // DOWNLOAD PLACE
    axios(
      'https://api.open-meteo.com/v1/forecast?latitude=48.63&longitude=35.23&current_weather=true&timezone=Europe%2FMoscow'
    ).then((data) => {
      setTemperature(
        data.data.current_weather.temperature,
        setWindspeed(data.data.current_weather.windspeed)
      );
    });
  }, []);

  return (
    <div className="weatherContainer">
      <span>
        Сьогодні до {temperature} {'\u2103'} та швидкість повітря {windspeed}{' '}
        км/г. Приємних покупок)
      </span>
    </div>
  );
}

export default Weather;
