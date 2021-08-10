import { useState } from "react"

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
        for (let i = 0; i < props.persons.length; i++) {
            if (newName === props.persons[i].name) {
            nameExists = true
            break
            }
        }
        if (!nameExists) {
            const personObject = {
                id: props.persons.length + 1,
                name: newName,
                number: newNumber
            }
            props.setPersons(props.persons.concat(personObject))
            setNewName('')
            setNewNumber('')
        } else {
            window.alert(`${newName} already exists in the phonebook.`)
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
