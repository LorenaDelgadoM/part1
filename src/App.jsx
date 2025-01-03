const Header = (course) => {
   return (
      <div>
        <h1>{course.title}</h1>
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
  console.log(parts.courses[0].name)
 
  return (
    <div>
      <Part part={parts.courses[0].name} exercise ={parts.courses[0].exercises}/>
      <Part part={parts.courses[1].name} exercise ={parts.courses[1].exercises}/>
      <Part part={parts.courses[2].name} exercise ={parts.courses[2].exercises}/>
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
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <>
      <Header title={course} />
      <Content courses ={parts}/>
      <Total total= {parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
    </>
  )
}

export default App