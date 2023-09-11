import React, { useState,useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faSearch } from '@fortawesome/free-solid-svg-icons';
import './circle.css';
import './grid.css';
import axios from 'axios';




const api = {
  key: "b03e6cbbd33e561d76ae81dce6c85afb",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const  Clear = 'https://res.cloudinary.com/dzmyfembe/image/upload/v1694186857/neqtzljywmnzln7uhf6z.png';
  const  Clouds = 'https://res.cloudinary.com/dzmyfembe/image/upload/v1694186857/ut5u7nlf31ztc3zhmtzk.png';
  const  Rain = 'https://res.cloudinary.com/dzmyfembe/image/upload/v1694186857/o8gkswpgzmmq4pvz4ull.jpg';
  const Drizzle = 'https://res.cloudinary.com/dzmyfembe/image/upload/v1694186857/o8gkswpgzmmq4pvz4ull.jpg';
  const  Snow = 'https://res.cloudinary.com/dzmyfembe/image/upload/v1694186857/cr5rjis3sn8hgwf9rnv3.jpg';
  const  Thunderstorm = 'https://res.cloudinary.com/dzmyfembe/image/upload/v1694186858/cjjlgqsgvrfzfbxubxmf.jpg';
  const  Mist = 'https://res.cloudinary.com/dzmyfembe/image/upload/v1694186857/ztstjn7edtblvhatl2mj.jpg';
  const Smoke = 'https://res.cloudinary.com/dzmyfembe/image/upload/v1694186857/tesplcjoqzhffxmcgvnb.png';
  const  Haze = 'https://res.cloudinary.com/dzmyfembe/image/upload/v1694186857/ztstjn7edtblvhatl2mj.jpg';
  const Dust = 'https://res.cloudinary.com/dzmyfembe/image/upload/v1694186857/xomqet6xzn83vywlehmr.jpg';
  const Fog = 'https://res.cloudinary.com/dzmyfembe/image/upload/v1694186857/ybow3dqwqw51janbrvvu.jpg';
  const Sand = 'https://res.cloudinary.com/dzmyfembe/image/upload/v1694186857/xomqet6xzn83vywlehmr.jpg';
  const Ash = 'https://res.cloudinary.com/dzmyfembe/image/upload/v1694186857/xomqet6xzn83vywlehmr.jpg';
  const  Squall = 'https://res.cloudinary.com/dzmyfembe/image/upload/v1694186857/ztstjn7edtblvhatl2mj.jpg';
  const Tornado = 'https://res.cloudinary.com/dzmyfembe/image/upload/v1694186857/q4fqy0t8lfv12q6wjuam.jpg';




  const [weather, setWeather] = useState({});
  const [but,setbut] = useState(1);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [searchcity,setsearchcity] = useState('');
const [error,seterror] = useState('');
const [currentTime, setCurrentTime] = useState('');
const [imgset,setimgset] = useState('');

const [city,setcity] = useState('');
const [country,setcountry] = useState('');
const [formattedDate, setFormattedDate] = useState('');
const [qual,setqual] = useState('');
const [wind,setwind] = useState(0);
const [pressure,setpressure]= useState(0);
const [humidity,sethumidity] = useState(0);
const [visiblity,setvisiblity] = useState(0);


//celcius and farenhiet different

const [temp,settemp] = useState('');
const [min,setmin]= useState('');
const [max,setmax] = useState('');



useEffect(() => {
  // Create a function to update the time
  const updateClock = () => {
    const indianTime = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      hour12: true,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    });
    setCurrentTime(indianTime);
  };

  // Update the time immediately
  updateClock();

  // Update the time every second
  const intervalId = setInterval(updateClock, 1000);

  // Clean up the interval when the component unmounts
  return () => clearInterval(intervalId);
},);






const image = 'https://res.cloudinary.com/dzmyfembe/image/upload/v1694018108/gj44oyjincf8h9zrczys.jpg';

const handlelocation =()=>{
  console.log('dfjksnf');
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      console.log(position.coords.latitude,position.coords.longitude);

      const apiKey = '3bc261fce6b2a5111a31243097acf59e';

      axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`
      )
      .then((response) => {
        console.log(response.data);
        setWeather(response.data);
        setWeather(response.data);
        setcity(response.data.name);
        setcountry(response.data.sys.country);
        setqual(response.data.weather[0].main);
       setpressure(response.data.main.pressure);
       sethumidity(response.data.main.humidity);
       setvisiblity(response.data.visibility);
       setwind(response.data.wind.speed);




       //image
if(response.data.weather[0].main === ' Tornado')
{
  setimgset( Tornado);
}
else if(response.data.weather[0].main === 'Clouds'){
  setimgset( Clouds);
}
else if(response.data.weather[0].main === 'Rain'){
  setimgset( Rain);
}
else if(response.data.weather[0].main === 'Drizzle'){
  setimgset( Drizzle);
}
else if(response.data.weather[0].main === 'Snow'){
  setimgset( Snow);
}
else if(response.data.weather[0].main === 'Thunderstorm'){
  setimgset( Thunderstorm);
}
else if(response.data.weather[0].main === 'Mist'){
  setimgset( Mist);
}
else if(response.data.weather[0].main === 'Smoke' ){
  setimgset( Smoke);
}
else if(response.data.weather[0].main === 'Haze'){
  setimgset( Haze);
}
else if(response.data.weather[0].main === 'Fog'){
  setimgset(  Fog);
}
else if(response.data.weather[0].main === 'Sand' ||response.data.weather[0].main === 'Dust'){
  setimgset( Sand);
}
else if(response.data.weather[0].main === 'Ash'){
  setimgset(  Ash);
}
else if(response.data.weather[0].main === 'Squall'){
  setimgset( Squall);
}
else{
  setimgset( Clear);
}



       if(but === 1)
       {
        let kelvincurrent = response.data.main.temp;
        let kelvinmin = response.data.main.temp_min;
        let kelvinmax = response.data.main.feels_like;
        let celciuscurrent = Math.round(kelvincurrent - 273.15)+ '°C';
        let celciusmin = Math.round(kelvinmin - 273.15)+ '°C';   
        let celciusmax = Math.round(kelvinmax- 273.15)+ '°C';
         settemp(celciuscurrent);
         setmin(celciusmin);
        setmax(celciusmax);
  
       }
  
       else if(but === 2){
       
        let kelvincurrent = response.data.main.temp;
        let kelvinmin = response.data.main.temp_min;
        let kelvinmax = response.data.main.feels_like;
        let fcurrent = Math.round((kelvincurrent - 273.15) * 9/5 + 32)+ '°F';
        let fmin = Math.round((kelvinmin - 273.15) * 9/5 + 32)+ '°F';   
        let fmax = Math.round((kelvinmax - 273.15) * 9/5 + 32)+ '°F';
         settemp(fcurrent);
         setmin(fmin);
        setmax(fmax);
  
       }

       setsearchcity('');
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });

    });
  } else {
    console.log("Geolocation is not available in this browser.");
  }
}


useEffect(() => {


if(searchcity ===''){


  const apiKey = '3bc261fce6b2a5111a31243097acf59e';
  const latitude1 = 26.8467;
  const longitude1 = 80.9462;

  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude1}&lon=${longitude1}&appid=${apiKey}`
    )
    .then((response) => {
      console.log(response.data);
      setWeather(response.data);
      setWeather(response.data);
      setcity(response.data.name);
      setcountry(response.data.sys.country);
      setqual(response.data.weather[0].main);
     setpressure(response.data.main.pressure);
     sethumidity(response.data.main.humidity);
     setvisiblity(response.data.visibility);
     setwind(response.data.wind.speed);
//image
    //image
    if(response.data.weather[0].main === ' Tornado')
    {
      setimgset( Tornado);
    }
    else if(response.data.weather[0].main === 'Clouds'){
      setimgset( Clouds);
    }
    else if(response.data.weather[0].main === 'Rain'){
      setimgset( Rain);
    }
    else if(response.data.weather[0].main === 'Drizzle'){
      setimgset( Drizzle);
    }
    else if(response.data.weather[0].main === 'Snow'){
      setimgset( Snow);
    }
    else if(response.data.weather[0].main === 'Thunderstorm'){
      setimgset( Thunderstorm);
    }
    else if(response.data.weather[0].main === 'Mist'){
      setimgset( Mist);
    }
    else if(response.data.weather[0].main === 'Smoke' ){
      setimgset( Smoke);
    }
    else if(response.data.weather[0].main === 'Haze'){
      setimgset( Haze);
    }
    else if(response.data.weather[0].main === 'Fog'){
      setimgset(  Fog);
    }
    else if(response.data.weather[0].main === 'Sand' ||response.data.weather[0].main === 'Dust'){
      setimgset( Sand);
    }
    else if(response.data.weather[0].main === 'Ash'){
      setimgset(  Ash);
    }
    else if(response.data.weather[0].main === 'Squall'){
      setimgset( Squall);
    }
    else{
      setimgset( Clear);
    }




     if(but === 1)
     {
      let kelvincurrent = response.data.main.temp;
      let kelvinmin = response.data.main.temp_min;
      let kelvinmax = response.data.main.feels_like;
      let celciuscurrent = Math.round(kelvincurrent - 273.15)+ '°C';
      let celciusmin = Math.round(kelvinmin - 273.15)+ '°C';   
      let celciusmax = Math.round(kelvinmax- 273.15)+ '°C';
       settemp(celciuscurrent);
       setmin(celciusmin);
      setmax(celciusmax);

     }

     else if(but === 2){
     
      let kelvincurrent = response.data.main.temp;
      let kelvinmin = response.data.main.temp_min;
      let kelvinmax = response.data.main.feels_like;
      let fcurrent = Math.round((kelvincurrent - 273.15) * 9/5 + 32)+ '°F';
      let fmin = Math.round((kelvinmin - 273.15) * 9/5 + 32)+ '°F';   
      let fmax = Math.round((kelvinmax - 273.15) * 9/5 + 32)+ '°F';
       settemp(fcurrent);
       setmin(fmin);
      setmax(fmax);

     }


    })
    .catch((error) => {
      console.error('Error fetching weather data:', error);
    });


    const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    const currentDateTime = new Date();
    const formatted = currentDateTime.toLocaleDateString('en-US', options);

    // Convert the day to a string with "th," "st," "nd," or "rd" suffix
    const day = currentDateTime.getDate();
    const daySuffix = getDaySuffix(day);
    const formattedDay = `${day}${daySuffix}`;

    // Update the formatted date
    setFormattedDate(formatted.replace(currentDateTime.getDate(), formattedDay));






}
else{

  const cityName = searchcity;
  const apiKey = '3bc261fce6b2a5111a31243097acf59e';
  axios
  .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
  .then((response) => {
    console.log(response.data,response.data.name,response.data.sys.country);
    setWeather(response.data);
    setWeather(response.data);
    setcity(response.data.name);
    setcountry(response.data.sys.country);
    setqual(response.data.weather[0].main);
   setpressure(response.data.main.pressure);
   sethumidity(response.data.main.humidity);
   setvisiblity(response.data.visibility);
   setwind(response.data.wind.speed);
//image


    //image
    if(response.data.weather[0].main === ' Tornado')
    {
      setimgset( Tornado);
    }
    else if(response.data.weather[0].main === 'Clouds'){
      setimgset( Clouds);
    }
    else if(response.data.weather[0].main === 'Rain'){
      setimgset( Rain);
    }
    else if(response.data.weather[0].main === 'Drizzle'){
      setimgset( Drizzle);
    }
    else if(response.data.weather[0].main === 'Snow'){
      setimgset( Snow);
    }
    else if(response.data.weather[0].main === 'Thunderstorm'){
      setimgset( Thunderstorm);
    }
    else if(response.data.weather[0].main === 'Mist'){
      setimgset( Mist);
    }
    else if(response.data.weather[0].main === 'Smoke' ){
      setimgset( Smoke);
    }
    else if(response.data.weather[0].main === 'Haze'){
      setimgset( Haze);
    }
    else if(response.data.weather[0].main === 'Fog'){
      setimgset(  Fog);
    }
    else if(response.data.weather[0].main === 'Sand' ||response.data.weather[0].main === 'Dust'){
      setimgset( Sand);
    }
    else if(response.data.weather[0].main === 'Ash'){
      setimgset(  Ash);
    }
    else if(response.data.weather[0].main === 'Squall'){
      setimgset( Squall);
    }
    else{
      setimgset( Clear);
    }



   if(but === 1)
   {
    let kelvincurrent = response.data.main.temp;
    let kelvinmin = response.data.main.temp_min;
    let kelvinmax = response.data.main.feels_like;
    let celciuscurrent = Math.round(kelvincurrent - 273.15)+ '°C';
    let celciusmin = Math.round(kelvinmin - 273.15)+ '°C';   
    let celciusmax = Math.round(kelvinmax- 273.15)+ '°C';
     settemp(celciuscurrent);
     setmin(celciusmin);
    setmax(celciusmax);

   }

   else if(but === 2){
   
    let kelvincurrent = response.data.main.temp;
    let kelvinmin = response.data.main.temp_min;
    let kelvinmax = response.data.main.feels_like;
    let fcurrent = Math.round((kelvincurrent - 273.15) * 9/5 + 32)+ '°F';
    let fmin = Math.round((kelvinmin - 273.15) * 9/5 + 32)+ '°F';   
    let fmax = Math.round((kelvinmax - 273.15) * 9/5 + 32)+ '°F';
     settemp(fcurrent);
     setmin(fmin);
    setmax(fmax);

   }







  })
  .catch((error) => {
    console.error('Error fetching weather data:', error);
    seterror('error');
    setTimeout(() => {
      seterror('');
    }, 2000);
  });

}
  







}, [but]);







const handlecity =()=>{
  console.log('clicked');

  const cityName = searchcity;
  const apiKey = '3bc261fce6b2a5111a31243097acf59e';
  axios
  .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
  .then((response) => {
    console.log(response.data,response.data.name,response.data.sys.country);
    setWeather(response.data);
    setWeather(response.data);
    setcity(response.data.name);
    setcountry(response.data.sys.country);
    setqual(response.data.weather[0].main);
   setpressure(response.data.main.pressure);
   sethumidity(response.data.main.humidity);
   setvisiblity(response.data.visibility);
   setwind(response.data.wind.speed);
//image


    //image
    if(response.data.weather[0].main === ' Tornado')
    {
      setimgset( Tornado);
    }
    else if(response.data.weather[0].main === 'Clouds'){
      setimgset( Clouds);
    }
    else if(response.data.weather[0].main === 'Rain'){
      setimgset( Rain);
    }
    else if(response.data.weather[0].main === 'Drizzle'){
      setimgset( Drizzle);
    }
    else if(response.data.weather[0].main === 'Snow'){
      setimgset( Snow);
    }
    else if(response.data.weather[0].main === 'Thunderstorm'){
      setimgset( Thunderstorm);
    }
    else if(response.data.weather[0].main === 'Mist'){
      setimgset( Mist);
    }
    else if(response.data.weather[0].main === 'Smoke' ){
      setimgset( Smoke);
    }
    else if(response.data.weather[0].main === 'Haze'){
      setimgset( Haze);
    }
    else if(response.data.weather[0].main === 'Fog'){
      setimgset(  Fog);
    }
    else if(response.data.weather[0].main === 'Sand' ||response.data.weather[0].main === 'Dust'){
      setimgset( Sand);
    }
    else if(response.data.weather[0].main === 'Ash'){
      setimgset(  Ash);
    }
    else if(response.data.weather[0].main === 'Squall'){
      setimgset( Squall);
    }
    else{
      setimgset( Clear);
    }



   if(but === 1)
   {
    let kelvincurrent = response.data.main.temp;
    let kelvinmin = response.data.main.temp_min;
    let kelvinmax = response.data.main.feels_like;
    let celciuscurrent = Math.round(kelvincurrent - 273.15)+ '°C';
    let celciusmin = Math.round(kelvinmin - 273.15)+ '°C';   
    let celciusmax = Math.round(kelvinmax- 273.15)+ '°C';
     settemp(celciuscurrent);
     setmin(celciusmin);
    setmax(celciusmax);

   }

   else if(but === 2){
   
    let kelvincurrent = response.data.main.temp;
    let kelvinmin = response.data.main.temp_min;
    let kelvinmax = response.data.main.feels_like;
    let fcurrent = Math.round((kelvincurrent - 273.15) * 9/5 + 32)+ '°F';
    let fmin = Math.round((kelvinmin - 273.15) * 9/5 + 32)+ '°F';   
    let fmax = Math.round((kelvinmax - 273.15) * 9/5 + 32)+ '°F';
     settemp(fcurrent);
     setmin(fmin);
    setmax(fmax);

   }







  })
  .catch((error) => {
    console.error('Error fetching weather data:', error);
    seterror('error');
    setTimeout(() => {
      seterror('');
    }, 2000);
  });

}



function getDaySuffix(day) {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}


const handleEnterKeyPress = (e) => {
  if (e.key === 'Enter') {
    console.log('clicked');

    const cityName = searchcity;
    const apiKey = '3bc261fce6b2a5111a31243097acf59e';
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
    .then((response) => {
      console.log(response.data,response.data.name,response.data.sys.country);
      setWeather(response.data);
      setWeather(response.data);
      setcity(response.data.name);
      setcountry(response.data.sys.country);
      setqual(response.data.weather[0].main);
     setpressure(response.data.main.pressure);
     sethumidity(response.data.main.humidity);
     setvisiblity(response.data.visibility);
     setwind(response.data.wind.speed);
  //image
      //image
if(response.data.weather[0].main === ' Tornado')
{
  setimgset( Tornado);
}
else if(response.data.weather[0].main === 'Clouds'){
  setimgset( Clouds);
}
else if(response.data.weather[0].main === 'Rain'){
  setimgset( Rain);
}
else if(response.data.weather[0].main === 'Drizzle'){
  setimgset( Drizzle);
}
else if(response.data.weather[0].main === 'Snow'){
  setimgset( Snow);
}
else if(response.data.weather[0].main === 'Thunderstorm'){
  setimgset( Thunderstorm);
}
else if(response.data.weather[0].main === 'Mist'){
  setimgset( Mist);
}
else if(response.data.weather[0].main === 'Smoke' ){
  setimgset( Smoke);
}
else if(response.data.weather[0].main === 'Haze'){
  setimgset( Haze);
}
else if(response.data.weather[0].main === 'Fog'){
  setimgset(  Fog);
}
else if(response.data.weather[0].main === 'Sand' ||response.data.weather[0].main === 'Dust'){
  setimgset( Sand);
}
else if(response.data.weather[0].main === 'Ash'){
  setimgset(  Ash);
}
else if(response.data.weather[0].main === 'Squall'){
  setimgset( Squall);
}
else{
  setimgset( Clear);
}



     if(but === 1)
     {
      let kelvincurrent = response.data.main.temp;
      let kelvinmin = response.data.main.temp_min;
      let kelvinmax = response.data.main.feels_like;
      let celciuscurrent = Math.round(kelvincurrent - 273.15)+ '°C';
      let celciusmin = Math.round(kelvinmin - 273.15)+ '°C';   
      let celciusmax = Math.round(kelvinmax- 273.15)+ '°C';
       settemp(celciuscurrent);
       setmin(celciusmin);
      setmax(celciusmax);
  
     }
  
     else if(but === 2){
     
      let kelvincurrent = response.data.main.temp;
      let kelvinmin = response.data.main.temp_min;
      let kelvinmax = response.data.main.feels_like;
      let fcurrent = Math.round((kelvincurrent - 273.15) * 9/5 + 32)+ '°F';
      let fmin = Math.round((kelvinmin - 273.15) * 9/5 + 32)+ '°F';   
      let fmax = Math.round((kelvinmax - 273.15) * 9/5 + 32)+ '°F';
       settemp(fcurrent);
       setmin(fmin);
      setmax(fmax);
  
     }
  
  
  
  
  
  
  
    })
    .catch((error) => {
      console.error('Error fetching weather data:', error);
      seterror('error');
      setTimeout(() => {
        seterror('');
      }, 2000);
    });
  }
};





  return (
<>
<div className='bodyapp'>


<div className="search-container">
      <div className="icon-target" onClick={handlelocation}>
        <FontAwesomeIcon icon={faBullseye} />
      </div>
      <input type="text" className="search-input" placeholder="Search..." style={{'width':'50%'}} onChange={(e)=>{setsearchcity(e.target.value)}} onKeyDown={handleEnterKeyPress}/>
      <div className="icon-search" onClick={handlecity}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
<div className='error-message'>
  {error && <p>PLease enter a Valid city name</p>}
</div>




<h1>{formattedDate}</h1>

    <h1>{city}, {country}
    </h1>

    <h2>{qual}
    </h2>

    <div className="temperature-image-container">
      <div className="circular-image">
        <img src={imgset} alt="Weather" />
      </div>
      <p>Temperature: {temp}</p>
    </div>
    <div style={{'margin':'0 auto'}}><p>Min: {min}      Max: {max}</p>   </div>

    <div className="grid-container">
      {/* First Grid Item */}
      <div className="grid-item">
        <h2 className="grid-heading">Wind Speed</h2>
        <p className="grid-content">{wind} m/s</p>
      </div>

      {/* Second Grid Item */}
      <div className="grid-item">
        <h2 className="grid-heading">Humidity</h2>
        <p className="grid-content">{humidity} %</p>
      </div>

      {/* Third Grid Item */}
      <div className="grid-item">
        <h2 className="grid-heading">Visiblity</h2>
        <p className="grid-content">{visiblity}</p>
      </div>

      {/* Fourth Grid Item */}
      <div className="grid-item">
        <h2 className="grid-heading">Air pressure</h2>
        <p className="grid-content">{pressure} mph</p>
      </div>
    </div>


    <ul>
        <li>
        <div className="clock-container">
      <div className='timeh' >Current Time in India (IST):</div>
      <p className="clock-time">{currentTime}</p>
    </div>
        </li>
    </ul>



    <button  style={{ backgroundColor: but=== 1 ? '#1a1dd6' : '#1a64d6' }} onClick={()=>{setbut(1)}}>
    °C
    </button>
    <button style={{ backgroundColor: but=== 2 ? '#1a1dd6' : '#1a64d6' }} onClick={()=>{setbut(2)}}>
    °F
    </button>
    <p>
        Coded by Diwyanshu Prasad
    </p>



    </div>

</>
  );
}

export default App;
