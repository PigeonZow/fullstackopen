import React, { useState } from 'react'
import { PersonForm } from './PersonForm'
import { Filter } from './Filter'
import { Persons } from './Persons'

const App = () => {

  const [ persons, setPersons ] = useState([
    { id: 1, name: 'Arto Hellas', number: '040-123456' },
    { id: 2, name: 'Ada Lovelace', number: '39-44-5323523' },
    { id: 3, name: 'Dan Abramov', number: '12-43-234345' },
    { id: 4, name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 

  const [ filter, setFilter ] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setFilter={setFilter} filter={filter}/>
      <h2>add a new</h2>
      <PersonForm setPersons={setPersons} persons={persons}/>
      <h2>Numbers</h2>
      <Persons filter={filter} persons={persons} />
    </div>
  )
}
export default App
