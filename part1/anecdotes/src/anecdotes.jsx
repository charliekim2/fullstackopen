import { useState } from "react";

const Button = ({ onClick, content }) => {
  return <button onClick={onClick}>{content}</button>;
};

const Menu = ({ ctx }) => {
  const buttons = ctx.map((c) => (
    <Button onClick={c.handler} content={c.content} />
  ));

  return <div>{buttons}</div>;
};

const Random = ({ anecdote, votes }) => {
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </div>
  );
};

const Most = ({ anecdote, votes }) => {
  return (
    <div>
      <h2>Anecdote with most votes</h2>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </div>
  );
};
const Anecdotes = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [random, setRandom] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const most = votes.indexOf(Math.max(...votes));

  const handleVote = () => {
    const nv = [...votes];
    nv[random] += 1;
    setVotes(nv);
  };

  const handleNext = () => {
    const r = Math.floor(Math.random() * anecdotes.length);
    setRandom(r);
  };

  const buttons = [
    {
      content: "vote",
      handler: handleVote,
    },
    {
      content: "next anecdote",
      handler: handleNext,
    },
  ];

  return (
    <div>
      <Random anecdote={anecdotes[random]} votes={votes[random]} />
      <Menu ctx={buttons} />
      <Most anecdote={anecdotes[most]} votes={votes[most]} />
    </div>
  );
};

export default Anecdotes;
