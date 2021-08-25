import React, { useState, useEffect } from 'react'
import { PersonForm } from './PersonForm'
import { Filter } from './Filter'
import personService from './services/PersonService'

const App = () => {

  const [ persons, setPersons ] = useState([]) 
  // const [ newPerson, setNewPerson ] = useState('')
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    personService.getAll().then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

  const Persons = () => {
    const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter))
    return (
        <div>
            {personsToShow.map((person) => (
                <p key={person.id}>{person.name} {person.number} <button onClick={() => deletePerson(person)}>delete</button></p>
            ))}
        </div>
    )
  }

  const deletePerson = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService.remove(person.id).then(
        setPersons(persons.filter(removedPerson => removedPerson.id !== person.id))
      )
    }
  }

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
