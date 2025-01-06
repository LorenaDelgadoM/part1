import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clickGoodButton = () => {

    setGood(good+1)
  }
  
  const clickNeutralButton = () =>{

    setNeutral(neutral+1)

  }

  const clickBadButton = () => {

    setBad(bad+1)

  }
  return (
    <div>
    <h1>Give Feedback</h1>
    <button onClick= {clickGoodButton}>Good</button>
    <button onClick= {clickNeutralButton}>Neutral</button>
    <button onClick= {clickBadButton}>Bad</button>
    <h2>Statistics</h2>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    </div>
  )
}

export default App