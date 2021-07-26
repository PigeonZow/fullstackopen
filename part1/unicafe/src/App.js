import React, { useState } from 'react'

// const Stat = (props) => {
//   return (
//     <div>
//       <p>{props.name} {props.value}</p>
//     </div>
//   )
// }

const Stat = ({name, value}) => (
  <div>
    <p>{name} {value}</p>
  </div>
)

const Statistics = (props) => {
  return (
    <div>
      {props.categories.map((category) => (
        <Stat key={category.name} name={category.name} value={category.value} />
      ))}
      <p>average {(props.good - props.bad) / (props.good + props.neutral + props.bad)}</p>
      <p>positive {(props.good) / (props.good + props.neutral + props.bad)}%</p>
    </div>
  )
}

// const VoteButton = (props) => {
//   return (
//     <button onClick={props.handleClick}>
//       {props.text}
//     </button>
//   )
// }
const VoteButton = ({ handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => setGood(good + 1)
  const addNeutral = () => setNeutral(neutral + 1)
  const addBad = () => setBad(bad + 1)

  const votes = [
    {
      name: "good",
      value: good
    },
    {
      name: "neutral",
      value: neutral
    },
    {
      name: "bad",
      value: bad
    }
  ]

  return (
    <div>
      <h1>give feedback</h1>
      <VoteButton text={"good"} handleClick={addGood} />
      <VoteButton text={"neutral"} handleClick={addNeutral} />
      <VoteButton text={"bad"} handleClick={addBad} />
      <h1>statistics</h1>
      {(good || bad || neutral) ? <Statistics categories={votes} good={good} neutral={neutral} bad={bad}/> : <p>No feedback given</p>}
      
    </div>
  )
}

export default App
