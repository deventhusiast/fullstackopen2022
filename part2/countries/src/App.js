import {useState, useEffect} from 'react';
import axios from 'axios'
import Search from './components/Search'
import Country from './components/Country'



const App = ()=> {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [show, setShow] = useState('')
  const match_search = countries.filter(country=> country.name.common.toLowerCase().includes(search.toLowerCase()))


  useEffect(()=>{
    axios
    .get("https://restcountries.com/v3.1/all")
    .then(response=>{
      setCountries(response.data)
    })
  },[])

  const handleSearch = (e) =>{
    setSearch(e.target.value)

  }
  const handleShow = (e) =>{
    e.preventDefault()
    setShow(e.target.id)
  }
  return (
    <div>
      {match_search.length >10 || search===''
        ?<><Search value={search} handleSearchChange={handleSearch}/>
            <p>Too many matches, specify another filter</p></>
         :<><Search value={search} handleSearchChange={handleSearch}/>
        <Country
            match_search={match_search}
             changeShow={handleShow}
             showing={show}
             search={search}/>
           </>}

    </div>
  );
}

export default App;
