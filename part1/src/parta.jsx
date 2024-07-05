const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  const parts = props.parts.map((part) => (
    <Part name={part.name} exercise={part.exercise} />
  ));
  return <div>{parts}</div>;
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercise}
    </p>
  );
};

const Total = (props) => {
  const total = props.parts.reduce(
    (accumulator, curr) => accumulator + curr.exercise,
    0,
  );
  return <p>Number of exercises {total}</p>;
};

const A = () => {
  const course = "Half stack development";
  const parts = [
    {
      name: "React fundamentals",
      exercise: 10,
    },
    {
      name: "Using props to pass data",
      exercise: 7,
    },
    {
      name: "State of a component",
      exercise: 14,
    },
  ];
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default A;
