const Header = ({name}) => <h1>{name}</h1>

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part => 
        <Part part={part} key={part.id}/>
      )}
    </div>
  )
}

const Part = ({part}) => <p>{part.name} {part.exercises}</p>

const Total = ({total}) => <p>Number of exercises {total}</p>

const Course = ({course}) => {
  
  const total = course.parts.reduce(
    (accumulator, part) => accumulator + part.exercises,
    0,
  )

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App