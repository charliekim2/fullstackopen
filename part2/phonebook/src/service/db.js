import axios from "axios";
const personsUrl = (id) => `http://localhost:3001/api/persons/${id}`;

const create = (person) => {
  return axios.post(personsUrl(""), person);
};

const readAll = () => {
  return axios.get(personsUrl(""));
};

const update = (person) => {
  return axios.put(personsUrl(person.id), person);
};

const remove = (id) => {
  return axios.delete(personsUrl(id));
};

export default { create, readAll, update, remove };
