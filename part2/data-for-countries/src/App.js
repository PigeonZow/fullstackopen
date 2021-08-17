import { useEffect, useState } from 'react';
import { Country } from './Country'
import axios from 'axios';

const App = () => {

  const [ countries, setCountries ] = useState([])
  const [ filter, setFilter ] = useState([]) 

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      setCountries(response.data)
    })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const countriesToShow = countries.filter(country => 
    country.name.toLowerCase().includes(filter.toString().toLowerCase())
  )

  const showCountry = (name) => {
    console.log(name)
    setFilter(name)
  }

  return (
    <div>
      <p>find countries <input type="text" onChange={handleFilterChange}/></p>
      {
        (countriesToShow.length <= 10) ? 

          (countriesToShow.length === 1) ?
            <Country country={countriesToShow[0]}/>
            :
            countriesToShow.map(country => (
              <div>
                <p>{country.name} <button onClick={() => showCountry(country.name)}>show</button></p>
              </div>
            ))
          :   
          <p>Too many matches, specify another filter</p>
      }
    </div>
  );
}

export default App;
