import { useState } from "react";

const Button = ({ content, handleClick }) => {
  return <button onClick={handleClick}> {content}</button>;
};

const FeedbackMenu = ({ feedback }) => {
  const buttons = feedback.map((f) => <Button {...f} />);
  return (
    <div>
      <h2>give feedback</h2>
      <div>{buttons}</div>
    </div>
  );
};

const StatRow = ({ name, stat }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{stat}</td>
    </tr>
  );
};

const Statistics = ({ stats }) => {
  let newStats = [...stats];
  const all = stats.reduce((a, c) => a + c.stat, 0);

  if (all == 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>no stats to show</p>
      </div>
    );
  }

  const avg = stats.reduce((a, c) => a + c.stat * c.weight, 0) / all;
  const pos =
    stats.reduce((a, c) => {
      if (c.weight > 0) {
        return a + c.stat;
      }
      return a;
    }, 0) / all;

  newStats.push(
    {
      name: "all",
      stat: all,
      weight: 0,
    },
    {
      name: "average",
      stat: avg.toFixed(2),
      weight: 0,
    },
    {
      name: "positive",
      stat: (pos * 100).toFixed(2),
      weight: 0,
    },
  );

  const statRows = newStats.map((s) => <StatRow {...s} />);
  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>{statRows}</tbody>
      </table>
    </div>
  );
};

const Unicafe = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (stateModifier, state) => {
    return () => {
      stateModifier(state + 1);
    };
  };

  const feedback = [
    {
      content: "good",
      handleClick: handleFeedback(setGood, good),
    },
    {
      content: "neutral",
      handleClick: handleFeedback(setNeutral, neutral),
    },
    {
      content: "bad",
      handleClick: handleFeedback(setBad, bad),
    },
  ];

  const stats = [
    {
      name: "good",
      stat: good,
      weight: 1,
    },
    {
      name: "neutral",
      stat: neutral,
      weight: 0,
    },
    {
      name: "bad",
      stat: bad,
      weight: -1,
    },
  ];

  return (
    <>
      <FeedbackMenu feedback={feedback} />
      <Statistics stats={stats} />
    </>
  );
};

export default Unicafe;
