const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

morgan.token("body", (req, res) => {
  return JSON.stringify(req.body);
});
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body"),
);
app.use(express.json());
app.use(cors());

let persons = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/info", (req, res) => {
  const date = new Date();
  res.send(
    `<p>Phonebook has info for ${persons.length} people</p><p>${date}</p>`,
  );
});

app.get("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  const person = persons.find((person) => person.id === id);
  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

app.delete("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  persons = persons.filter((person) => person.id !== id);
  res.status(204).end();
});

app.post("/api/persons", (req, res) => {
  const body = req.body;
  const person = persons.find((person) => person.name === body.name);
  if (person) {
    return res.status(400).json({
      error: "person already exists in the phonebook",
    });
  }
  if (!body.name || !body.number) {
    return res.status(400).json({
      error: "name or number is missing",
    });
  }
  const newPerson = {
    id: Math.floor(Math.random() * 1000).toString(),
    name: body.name,
    number: body.number,
  };
  persons = persons.concat(newPerson);
  console.log(persons);
  res.json(newPerson);
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
