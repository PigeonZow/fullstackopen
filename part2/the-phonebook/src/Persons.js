const Persons = (props) => {
    const personsToShow = props.persons.filter(person => person.name.toLowerCase().includes(props.filter))
    return (
        <div>
            {personsToShow.map((person) => (
                <p key={person.id}>{person.name} {person.number}</p>
            ))}
        </div>
    )
}
export { Persons }
