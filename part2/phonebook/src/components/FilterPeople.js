import React from 'react'
import axios from 'axios'
const FilterPeople = ({value,handleChange}) =>{
  return(
    <div>
     filter shown with <input
       value={value}
       onChange={handleChange}
      />
    </div>
  )
}

export default FilterPeople
