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

// import { useState } from 'react'

// const Header = ( {text}) => {
//   return (
//     <h1>{text}</h1>
//   )
// }

// const Button = ( {text, handleClick} ) => {
//   return (
//     <button onClick={handleClick}>{text}</button>
//   )
// }

// const StatisticsLine = ( {text, value} ) => {
//   return (
//     <div>
//     <table>
//       <tbody>
//         <tr>
//           <td>{text}</td>
//           <td>{value}</td>
//         </tr>
//       </tbody>
//     </table>
//     </div>
//   )
// }
// const Statistics = ( {good, neutral, bad} ) => {
//   const total = good + neutral + bad;
//   const average = (good - neutral - bad) / total;
//   const positive = good / total * 100;
//   if (total === 0) {
//     return (
//       <div>
//         <p>No feedback given</p>
//       </div>
//     )
//   }
//   return (
//     <div>
//       <StatisticsLine text="good" value={good} />
//       <StatisticsLine text="neutral" value={neutral} />
//       <StatisticsLine text="bad" value={bad} />
//       <StatisticsLine text="total" value={total} />
//       <StatisticsLine text="average" value={average} />
//       <StatisticsLine text="positive" value={positive + " %"} />
//     </div>
//   )
// }
// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)
//   return (
//     <div>
//       <Header text="give feedback" />
//       <Button text="good" handleClick={() => setGood(good + 1)} />
//       <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
//       <Button text="bad" handleClick={() => setBad(bad + 1)} />
//       <Header text="statistics" />
//       <Statistics good={good} neutral={neutral} bad={bad} />
//     </div>
//   )
// };
// export default App;


// import { useState } from 'react'


// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}>
//     {text}
//   </button>
// );

// const App = () => {
//   const anecdotes = [
//     'If it hurts, do it more often.',
//     'Adding manpower to a late software project makes it later!',
//     'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//     'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//     'Premature optimization is the root of all evil.',
//     'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
//     'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
//     'The only way to go fast, is to go well.'
//   ]
   
//   const [selected, setSelected] = useState(0)
//   const [votes, setVotes] = useState(0)

//   return (
//     <div>
//       {anecdotes[selected]} has {votes} votes
//       <br />
//       <Button handleClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} text="next anecdote" />
//       <Button handleClick={() => setVotes(votes + 1)} text="vote" />
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast is to go well.'
  ];

  // Create an array to store the votes for each anecdote.
  const initialVotes = new Array(anecdotes.length).fill(0);
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(initialVotes);

  const handleNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  // Find the index of the anecdote with the most votes.
  const mostVotedIndex = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>
      <Button handleClick={handleVote} text="Vote" />
      <Button handleClick={handleNextAnecdote} text="Next Anecdote" />
      <h1>Anecdote with the Most Votes</h1>
      <p>{anecdotes[mostVotedIndex]}</p>
      <p>Has {votes[mostVotedIndex]} votes</p>
    </div>
  );
};

export default App;
