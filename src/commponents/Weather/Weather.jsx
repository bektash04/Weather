import React from 'react'
import './Weather.css'

const Weather = ({weather}) => {
    const timeFormater = (sec) => {
        const time = new Date(sec * 1000)
        const hours  = time.getHours()
        const minutes= time.getMinutes()
        return `${hours} : ${minutes}` 
    
    }


    const MonthHaddler = (time) => {
        const options = { day: 'numeric', month: 'long' };
       const formattedDate = time.toLocaleDateString('ru-RU', options);
       return `${formattedDate}`;
    }
    


    const kelvinToCelsius = (kelvin) => {
        return kelvin - 273.15; 
      };
    

  return (

    
    <>
    {
        weather && weather.cod !== '200' ?

        <div className='weather'>
         <h1 className='h1-w1'>{weather.name}, {weather.sys.country}</h1>
         
         <p className='pop-w1'>{timeFormater(weather.dt)} {MonthHaddler(new Date(weather.dt * 1000))}</p>
         <img className='img-w3' src={'http://openweathermap.org/img/w/' + weather.weather[0].icon + '.png'} />
         <h2 className='h2-w4'>{kelvinToCelsius(weather.main.temp).toFixed(0)}°C</h2>
         {/* <p>{weather.weather[0].description}</p> */}
        <div className='sys-set-rise'>
        <p className='po-w6'>Sunrise <i class="fa-solid fa-sun"></i><h3 className='git-e9'>{ timeFormater(weather.sys.sunrise)}</h3></p>
        <p className='po-w7'>Sunset <i class="fa-solid fa-mountain-sun"></i><h3>{ timeFormater(weather.sys.sunset)}</h3></p>
        </div>
        <hr className='hr-w10'/>
        <div className='sys-Wind-Like'>
        <p className='po-w6-e'>Wind <i class="fa-solid fa-wind" ></i><h3> {weather.wind.speed}m/s</h3></p>
         <p className='po-w7-e'>FEELS LIKE <i class="fa-solid fa-temperature-three-quarters" ></i> <h3 className='h3-w13-e'>{kelvinToCelsius(weather.main.feels_like).toFixed(0)}°C</h3></p>
         </div>
         <hr className='hr-w10'/>
         <div className='main-hum-all'>
         <p className='pip-w14'>Humidity <h3><i class="fa-solid fa-droplet-percent"></i>{weather.main.humidity}%</h3></p>
         <p className='pip-w15'>Сloudy <i class="fa-solid fa-cloud-sun"></i><h3> {weather.clouds.all}%</h3></p>
         </div>
         

      </div>
      :
      <></>
    }
    </>
 
  )
}

// {Object.keys(weather).length > 0 ? (
//     <div>
//         <h1>{weather.name}, {weather.sys.country}</h1>
//       <p>lon: {weather.coord.lon},</p>
//       <p>lat:{weather.coord.lat}</p>
//       <p>{weather.weather[0].description}</p>
//       <p>Температура: {weather.main.temp -273 .toFixed(0)}</p>
//       <p>По ощущениям: {weather.main.feels_like}K</p>
//       <p>Давление: {weather.main.pressure}</p>
//       <p>Влажность: {weather.main.humidity}%</p>
//       <p>Скорость ветра: {weather.wind.speed}m/s</p>
//       <p>Облачность: {weather.clouds.all}%</p>
//      <p>Восход: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()} </p>
//       <p>Закать: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>
//     </div>
//   ) : null}

export default Weather


// const options = { day: 'numeric', month: 'long' };
// const formattedDate = time.toLocaleDateString('ru-RU', options);
// const hours = time.getHours();
// const minutes = time.getMinutes();
// return `${formattedDate} в ${hours}:${minutes}`;
// };