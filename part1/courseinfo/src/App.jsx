import {nanoid} from 'nanoid'

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
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part => 
        <Part part={part} key={nanoid()} />
      )}
    </div>
  )
}

const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Total = ({parts}) => {
  const total = parts.reduce(
    (accumulator, part) => accumulator + part.exercises,
    0,
  )
  return (
    <p>Number of exercises {total}</p>
  )
}

export default App