import {useState, useEffect} from 'react'
import axios from 'axios'
import SingleCountry from './SingleCountry'
import CountriesList from './CountriesList';

const Country =({match_search,changeShow,showing})=>{
  let single_country = match_search.length ===1 ? match_search[0] : match_search.find(country => country.name.common === showing)
  const[weather, setWeather] = useState([])
  const[temp,setTemp] =useState(0)
  const[icon,setIcon] = useState('')
  const[wind_speed, setWindSpeed] = useState(0)
  const api_key = process.env.REACT_APP_API_KEY

  useEffect(()=>{
    if(single_country !== undefined){
    axios
    .get('https://api.openweathermap.org/data/2.5/weather?q='+single_country.capital+'&units=metric'+'&appid='+api_key)
    .then(response =>{
      setWeather(response.data)
      setTemp(response.data.main.temp)
      setIcon("https://openweathermap.org/img/wn/" + response.data.weather[0].icon+'.png')
      setWindSpeed(response.data.wind.speed)
  })
}
},[single_country])
  return(
    <div>
    { single_country !== undefined
    ?  <SingleCountry
      name={single_country.name.common}
       capital={single_country.capital}
       area={single_country.area}
       lang={Object.values(single_country.languages)}
       flagImg={single_country.flags.png}
       temp={temp}
       icon={icon}
       wind_speed={wind_speed}
       />
     : <CountriesList
          match_search={match_search}
           changeShow={changeShow}
            showing={showing}/>  }


    </div>
)
}
export default Country
