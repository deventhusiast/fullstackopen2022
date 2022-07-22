import React from 'react'
const Button = ({changeShow,id}) =><button id={id} onClick={changeShow}>show</button>
const CountriesList = ({match_search,changeShow,showing}) =>{
  return(
      <div>
      <table>
        <tbody>
          {match_search.map(country=><tr key ={country.name.common}><td>{country.name.common} <Button id={country.name.common} changeShow={changeShow}/></td></tr>)}
      </tbody>
    </table>
    </div>
  )
}
export default CountriesList
