
const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <p>{props.part1} {props.exercises1}</p>
      <p>
      {props.part2} {props.exercises2}
      </p>
      <p>
      {props.part3} {props.exercises3}
      </p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.exercises}</p>
    </>
  )
}

// Part 1.2
const Content2 = ({ content }) => {
  return (
    <div>
      <p>
        {content.part} {content.exercise}
      </p>
    </div>
  );
};


const App = () => {

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  //part 1.2
  const contents = [
    { part: "Fundamentals of React", exercise: 10 },
    { part: "Using props to pass data", exercise: 7 },
    { part: "State of a component", exercise: 14 }
  ];

  return (
    <div className="App">
      <Header course={course}/>
      <Content part1={part1} exercises1={exercises1}
      part2={part2} exercises2={exercises2}
      part3={part3} exercises3={exercises3}
      />
      <Total exercises={exercises1 + exercises2 + exercises3}/>

      //part 1.2
      {contents.map((content) => (
        <Content2 content={content} />
      ))}
    </div>
  );
}

export default App;
