const Header = (props) => {
    return (
    <div>
        <h1>{props.course}</h1>
    </div>
    ) 
}

const Part = (props) => {
    return (
    <div>
        <p>
        {props.part} {props.exercises}
        </p>
    </div>
    )
}

const Content = (props) => {
    return (
    <div>
        {props.parts.map((part) => (
        <Part key={part.id} part={part.name} exercises={part.exercises} />
        ))}
    </div>
    )
}

const Total = (props) => {
    // let total = 0;
    // props.parts.forEach(element => {
    //   total += element.exercises;
    // });
    const total = props.parts.reduce((prev, curr) => (prev + curr.exercises), 0)
    return (
    <div>
        <p>Number of exercises {total}</p>
    </div>
    )
}

const Course = ({ course }) => {
    return (
    <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
    </div>
    )
}

export { Course }  