import {useState, useEffect} from 'react';
import axios from 'axios'
import personService from './services/persons'
import './index.css'
import FilterPeople from './components/FilterPeople'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'


const App =()=> {
  const [person, setPerson] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [newSearch, setSearch] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(()=>{
    personService
    .getAll()
    .then(initialPerson =>{
      setPerson(initialPerson)
    })
  },[])
  const handleDelete =(event) =>{
    event.preventDefault()
    const toBeDeleted = person.find(p => p.name === event.target.id)
    if(window.confirm(`Do you want to delete ${toBeDeleted.name}`)){
      personService
      .dlt(toBeDeleted.id)
      .then(() =>setPerson(person.filter(p=>p.id !== toBeDeleted.id)))
      .catch(message=>{
        setMessage(`Information of '${toBeDeleted.name} ' has already been removed from server.`)
        setTimeout(()=>{setMessage(null)},5000)
        setPerson(person.filter(p=>p.id !== toBeDeleted.id))
      })
    }
  }
  const handleNames =(event) =>{
    setNewName(event.target.value)
  }
  const handleNumber = (event) =>{
    setNumber(event.target.value)
  }
  const handleSearch =(event) =>{
    setSearch(event.target.value)
  }
  const handleUpdate =(needsUpdate,newPerson) =>{
    const changedNumber = {...needsUpdate,number:newPerson.number}
    const rest = person.filter(p=>p.name !== needsUpdate.name)
    if(window.confirm(`${needsUpdate.name} is already added in phonebook, replace the old number with new one? `)){
      return personService
      .update(needsUpdate.id, changedNumber)
      .then(returnedPerson=>{
        setMessage(`Successfully changed the number of ${changedNumber.name}`)
        setTimeout(()=>{setMessage(null)},5000)
        setPerson(rest.concat(returnedPerson))
      })
      .catch(message=>{
         setMessage(
          `Information of ${changedNumber.name}  has already been removed from server.`
        )
        setTimeout(()=>{
          setMessage(null)
        },5000)
        setPerson(rest.concat(changedNumber))
      })
    }
  }
  const addNewPerson = (event) =>{
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }

    let find_match = person.find(p=>p.name === newPerson.name)
    find_match
      ? find_match.number === newPerson.number
        ? alert(`${find_match.name} is already added in phonebook`)
        : handleUpdate(find_match,newPerson)
      : personService
        .create(newPerson)
        .then(returnedPerson=>{
          setMessage(`Added ${newPerson.name}`)
          setTimeout(()=>{setMessage(null)},5000)
          setPerson(person.concat(returnedPerson))})
    setNewName('')
    setNumber('')

  }
  return (
    <div>
    <h2>Phonebook</h2>
    <Notification message={message}/>
    <FilterPeople value={newSearch} handleChange={handleSearch}/>
    <h3>add new</h3>
    <PersonForm
    names ={newName}
    numbers = {newNumber}
    handleChangeName={handleNames}
    handleChangeNumber={handleNumber}
    handleSubmit= {addNewPerson}
    />
    <h2>Numbers</h2>
    <Persons search={newSearch} person={person} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
