import React from 'react'
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function WeatherApp() {

    const apiKey = "f56f24967aaf51182d1d4df628297c6d"
    const [data, setData] = useState({})
    const [city, setCity] = useState("")
  

    const weatherdata = (city) => {
        const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey
        axios.get(apiURL).then((res) => {
          console.log("response", res.data)
          setData(res.data)
        }).catch((err) => {
          console.log("err", err)
        })
           
      }
    
    const handlechange = () => {
      weatherdata(city)
    }

    
  return (
   
        <div className="App">
         <div className='WeatherParent'>
                 <div className='Weather_Name'>
                       Weather App
                 </div>

                 <div className='d-grid col-4 mt-4'>
                      <input type='text' className='form-control' onChange={(e) => {
                        setCity(e.target.value)
                      }}></input><br/>
                      <button type='button' className='btn btn-primary' onClick={handlechange}>Search</button>
                 </div>

                 
         </div>

  <div className='Weather_card'> 
  <div className='weather_info'>
   <img className='weather_info_icon' src='https://cdn.pixabay.com/photo/2017/07/19/21/38/cloud-2520449_1280.png'></img>
   <h5>
      {data.name}
    </h5>
    <h3>{((data?.main?.temp) - 273.15).toFixed(2)}°C</h3>
   </div>
</div> 

         
    </div>
   
  )
}
