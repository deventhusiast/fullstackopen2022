import React from 'react'

const DeleteBtn = ({id,handleDelete}) => <button id={id} onClick={handleDelete}>delete</button>

const Persons =({person,search,handleDelete,id}) =>{
  const filtered_search = person.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
  const match_search = filtered_search.map(p=><tr key={p.id}><td><p key={p.name}>{p.name} {p.number}</p></td><td><DeleteBtn id={p.name} handleDelete={handleDelete}/></td></tr>)
  const empty_search = person.map(p=><tr key={p.id}><td><p key={p.name}>{p.name} {p.number}</p></td><td><DeleteBtn id= {p.name} handleDelete={handleDelete}/></td></tr>)
  return(
    <>
    <table>
    <tbody>
    {search ? match_search : empty_search}
   </tbody>
 </table>
    </>
  )
}
export default Persons
