const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  const parts = props.parts.map((part) => (
    <Part name={part.name} exercises={part.exercises} />
  ));
  return <div>{parts}</div>;
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

const Total = (props) => {
  const total = props.parts.reduce(
    (accumulator, curr) => accumulator + curr.exercises,
    0,
  );
  return (
    <p>
      <b>Number of exercises {total}</b>
    </p>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Courses = ({ courses }) => {
  const course = courses.map((course) => <Course course={course} />);
  return <div>{course}</div>;
};

export default Courses;
