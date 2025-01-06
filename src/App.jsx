import { use } from 'react'
import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] =useState(0)
  const [avg, setAvg] = useState(0)
  const [porc, setPorc] = useState(0)

  const clickGoodButton = () => {
    const updateGood = good+1;
    setGood(updateGood)
    setAll(updateGood+neutral+bad)
    setAvg ((good - bad) /(updateGood+neutral+bad))
    setPorc ( (good * 100) /(updateGood+neutral+bad))
  }
  
  const clickNeutralButton = () =>{
    const updateNeutral = neutral+1;
    setNeutral(updateNeutral)
    setAll(good+updateNeutral+bad)
    setAvg ((good - bad )/(good+updateNeutral+bad))
    setPorc ( (good * 100) /(good+updateNeutral+bad))
  }

  const clickBadButton = () => {
    const updateBad = bad+1;
    setBad(updateBad)
    setAll(good+neutral+updateBad)
    setAvg ((good - bad) / (good+neutral+updateBad))
    setPorc ( (good * 100) / (good+neutral+updateBad))
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
    <p>All: {all}</p>
    <p>Average: {avg}</p>
    <p>Positive: {porc}%</p>
    </div>
  )
}

export default App