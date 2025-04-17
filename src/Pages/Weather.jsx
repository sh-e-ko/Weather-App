import React, { useEffect, useState } from 'react'
import Data from './Components/Data/Data'
import Form from './Components/Form/Form'
import Load from './Components/Loading/Load';
import style from './Weather.module.css'

const API_KEY = "b376f0c8af463fabb47ba5c13004fae4";

export default function Weather()
{
  const [weather, setWeather] = useState();

  useEffect(() =>
  {
    document.body.style.background = "linear-gradient(135deg, #2980b9, #6dd5fa)";      
  }, []);


  const getData = (values) =>
  {
    console.log(values.city)
    console.log(values.country)
    const city = values.city
    const country = values.country


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
      .then((res) => res.json())
      .then((data) =>
      {
        console.log("Weather Data:", data);
        const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        const weatherType = data.weather[0].main.toLowerCase();
        let bgColor;
        switch (weatherType)
        {
          case "clear":
            bgColor = "linear-gradient(135deg, #fceabb, #f8b500)"; // sunny
            break;
          case "clouds":
            bgColor = "linear-gradient(135deg, #bdc3c7, #2c3e50)"; // cloudy
            break;
          case "rain":
            bgColor = "linear-gradient(135deg, #4e54c8, #8f94fb)"; // rainy
            break;
          case "snow":
            bgColor = "linear-gradient(135deg, #e0eafc, #cfdef3)"; // snowy
            break;
          default:
            bgColor = "linear-gradient(135deg, #2980b9, #6dd5fa)"; // default blue
        }
        document.body.style.background = bgColor;
        document.body.style.transition = "background 1s ease";
        // console.log(bgColor)

        setWeather({
          humidity: data.main.humidity,
          temp: data.main.temp,
          tempmax: data.main.temp_max,
          tempmin: data.main.temp_min,
          icon: icon,
          description: data.weather[0].description,
          name: data.name
        })
      })
      .catch((err) =>
      {
        console.error("Failed to fetch weather data", err);
        alert("this country or city not found")
      });


  }



  return (
    <div className={style.container}>
      <Form getData={getData} />
      <Data weather={weather} />
    </div>
  )
}
