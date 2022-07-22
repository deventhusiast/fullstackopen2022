import React from 'react'
const Search =(props)=>{
  return(
    <div>
    find country:
    <input
    value ={props.value}
    onChange={props.handleSearchChange}
    />
</div>
  )
}
export default Search
