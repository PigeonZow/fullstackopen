import { useState } from "react"
import personService from "./services/PersonService"

const PersonForm = (props) => {

    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }
    
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const addPersons = (e) => {
        e.preventDefault()

        let nameExists = false
        let existingIndex;
        for (let i = 0; i < props.persons.length; i++) {
            if (newName === props.persons[i].name) {
                nameExists = true
                existingIndex = i
                break
            }
        }
        if (!nameExists) {
            const personObject = {
                id: Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER)),
                name: newName,
                number: newNumber
            }

            personService.create(personObject).then(returnedPerson => {
                props.setPersons(props.persons.concat(returnedPerson))
                setNewName('')
                setNewNumber('')
            })

        } else {
            if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
                const previousPerson = props.persons[existingIndex]
                const personObject = {
                    id: previousPerson.id,
                    name: previousPerson.name,
                    number: newNumber
                }
                personService.update(previousPerson.id, personObject).then(returnedPerson => {
                    props.setPersons(props.persons.map(person => person.id !== previousPerson.id ? person : returnedPerson))
                })
            }
        }
    }

    return (
        <form onSubmit={addPersons}>
            <div>name: <input value={newName} onChange={handleNameChange}/></div>
            <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
            <div>
                <button type="submit">add</button>
            </div>
       </form>
    )
}
export { PersonForm }
