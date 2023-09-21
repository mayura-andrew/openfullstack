// import React from 'react';

// const Header = (props) => {
//   console.log(props);
//   return (
//     <h1>{props.course.name}</h1>
//   );
// };

// const Part = (props) => {
//   return (
//     <p>{props.part.name} {props.part.exercises}</p>
//   );
// };

// const Content = (props) => {
//   return (
//     <div>
//       {props.course.parts.map((part, index) => (
//         <Part key={index} part={part} />
//       ))}
//     </div>
//   );
// };

// const Total = (props) => {
//   const totalExercises = props.course.parts.reduce((acc, part) => acc + part.exercises, 0);

//   return (
//     <p>Number of exercises {totalExercises}</p>
//   );
// };

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }

//   return (
//     <div>
//       <Header course={course} />
//       <Content course={course} />
//       <Total course={course} />
//     </div>
//   );
// };

// export default App;

import { useState } from 'react'

const Header = ( {text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ( {text, handleClick} ) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text="give feedback" />
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />
      <Header text="statistics" />
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
};
export default App;

