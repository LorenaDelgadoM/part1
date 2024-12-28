const Header = () => {
   const course = 'Half Stack application development'
    return (
      <div>
        <h1>{course}</h1>
      </div>

    )

}

const Part = (parts) => {
    
  return (
    <div>
      <p>
      
      {parts.part} {parts.exercise}
      </p>
      
    </div>
   ) 



}

const Content = (parts) => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Part part={part1} exercise ={exercises1}/>
      <Part part={part2} exercise ={exercises2}/>
      <Part part={part3} exercise ={exercises3}/>
    </div>
  )
 
}

const Total = (sum) => {

  return (
    <div>
        <p>Number of exercises {sum.total}</p>
    </div>
  )


}

const App = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  return (
    <>
      <Header/>
      <Content/>
      <Total total={exercises1+exercises2+exercises3}/>
    </>
  )
}

export default App