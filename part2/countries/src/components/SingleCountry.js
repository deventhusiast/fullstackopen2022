import React from 'react'
const SingleCountry =({name, capital, area, lang,flagImg,temp,icon,wind_speed}) =>{
  return(
    <div>
    <h2>{name}</h2>
    <p>capital {capital}</p>
    <p>area {area}</p>
    <h3>languges:</h3>
    <ul>
      {lang.map(language=><li key={language}>{language}</li>)}
    </ul>
    <img alt ='flag' src={flagImg}/>
    <p> Weather {temp} Celsius</p>
    <img alt='' src={icon}/>
    <p>wind {wind_speed} m/s</p>

    </div>
  )
}
export default SingleCountry
