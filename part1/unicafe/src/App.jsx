import { useState } from 'react';

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = () => {
    if (total === 0) {
      return 0
    }
    return Math.round(( good * 1 + bad * ( -1 ) ) * 100 / total) / 100; 
  };
  const positive = () => {
    if (good === 0) {
      return 0;
    } else if (total === 0) {
      return 100
    }
    return Math.round(good / total * 10000) / 100; 
  };

  if (total === 0) {
    return (
      <>
        <h1>Statistics</h1>
        <h4>No feedback given</h4>
      </>
    );
  }

  return (
    <>
      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {total}</p>
      <p>Average {average()}</p>
      <p>Positive {positive()}%</p>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const voteGood = () => setGood(good + 1);
  const voteNeutral = () => setNeutral(neutral + 1);
  const voteBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={voteGood}>Good</button>
      <button onClick={voteNeutral}>Neutral</button>
      <button onClick={voteBad}>Bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App