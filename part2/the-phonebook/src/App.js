import React, { useState, useEffect } from 'react'
import { PersonForm } from './PersonForm'
import { Filter } from './Filter'
import { Persons } from './Persons'
import axios from 'axios'

const App = () => {

  const [ persons, setPersons ] = useState([]) 
  // const [ newPerson, setNewPerson ] = useState('')
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(response => {
      console.log("Data received")
      setPersons(response.data)
    })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setFilter={setFilter} filter={filter} />
      <h2>add a new</h2>
      <PersonForm setPersons={setPersons} persons={persons} />
      <h2>Numbers</h2>
      <Persons filter={filter} persons={persons} />
    </div>
  )
}
export default App
