import React  ,{ useState } from 'react'
import  clear_icon  from "../assets/clear.png";
import  cloud_icon  from "../assets/cloud.png";
import  drizzle_icon  from "../assets/drizzle.png";
import  humidity_icon  from "../assets/humidity.png";
import  rain_icon  from "../assets/rain.png";
import  search_icon  from "../assets/search.png";
import  snow_icon  from "../assets/snow.png";
import  wind_icon  from "../assets/wind.png";
import "./weatherapp.css"


function Weatherapp() {
  let api_key = "7324d31465bbb4477916c38ea766e0c7";

  const [wicon ,Setwicon] = useState(cloud_icon)

  const search = async () =>{
    let city = document.getElementsByClassName("cityInput");
    if(city[0].value===""){
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city[0].value}&units=Metric&appid=${api_key}`
    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temp =  document.getElementsByClassName("weather-temp"); 
    const location = document.getElementsByClassName("weather-location"); 

    humidity[0].innerHTML = data.main.humidity + "%";
    wind[0].innerHTML = data.wind.speed + "km/h";
    temp[0].innerHTML = data.main.temp + "°C";
    location[0].innerHTML = data.name;


    if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
      Setwicon(clear_icon);
    }else if (data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
      Setwicon(cloud_icon);
    }else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
      Setwicon(drizzle_icon);
    }else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
      Setwicon(drizzle_icon);
    }else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
      Setwicon(rain_icon);
    }else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
      Setwicon(rain_icon);
    }else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
      Setwicon(snow_icon);
    }else{
      Setwicon(clear_icon);
    }


  }






  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" />
        <div onClick = {()=>{search()}} className="search-icon">
          <img src={search_icon} alt="" />
        </div>
      </div>

      <div className="weather-image">
        <img src={wicon} alt="weather" />
      </div>

      <div className="weather-location">
        London
      </div>
      <div className="weather-temp">
        24°C
      </div>

      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="humidityicon" />
          <div className="data">
            <div className="humidity-percent">67%
          </div>
          <div className="text">Humidity</div>
          </div>
        </div>

        <div className="element">
          <img src={wind_icon} alt="wind-icon" />
          <div className="data">
            <div className="wind-rate">18km/h
          </div>
          <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weatherapp;