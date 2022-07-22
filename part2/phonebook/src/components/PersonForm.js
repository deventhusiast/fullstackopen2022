import React from 'react'
const PersonForm = ({names, numbers, handleChangeName, handleChangeNumber, handleSubmit}) =>{
  return(
    <form>
    <div>
      name: <input
       value={names}
       onChange={handleChangeName}
      />
    </div>
    <div>
      number: <input
         value={numbers}
         onChange={handleChangeNumber}
       />
    </div>
    <div>
      <button type='submit' onClick={handleSubmit}>add</button>
    </div>
    </form>

  )
}
export default PersonForm
