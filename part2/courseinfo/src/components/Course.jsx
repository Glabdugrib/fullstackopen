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

const Total = ({total}) => <p><strong>Number of exercises {total}</strong></p>

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

export default Course;