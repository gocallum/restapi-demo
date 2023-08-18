import express from 'express';
import bodyParser from 'body-parser';

interface Person {
  id: number;
  firstname: string;
  lastname: string;
  phoneNumber: string;
}

let people: Person[] = [];
let currentId = 1;

const app = express();
app.use(bodyParser.json());

app.get('/api/people', (req, res) => {
  res.json(people);
});

app.get('/api/people/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const person = people.find(p => p.id === id);

  if (!person) {
    res.status(404).json({ error: 'Person not found' });
    return;
  }

  res.json(person);
});

app.post('/api/people', (req, res) => {
  const { firstname, lastname, phoneNumber } = req.body;

  if (!firstname || !lastname || !phoneNumber) {
    res.status(400).json({ error: 'All fields are required' });
    return;
  }

  const newPerson: Person = {
    id: currentId++,
    firstname,
    lastname,
    phoneNumber,
  };

  people.push(newPerson);
  res.status(201).json(newPerson);
});

app.put('/api/people/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { firstname, lastname, phoneNumber } = req.body;

  const person = people.find(p => p.id === id);

  if (!person) {
    res.status(404).json({ error: 'Person not found' });
    return;
  }

  person.firstname = firstname;
  person.lastname = lastname;
  person.phoneNumber = phoneNumber;

  res.json(person);
});

app.delete('/api/people/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const personIndex = people.findIndex(p => p.id === id);

  if (personIndex === -1) {
    res.status(404).json({ error: 'Person not found' });
    return;
  }

  const deletedPerson = people.splice(personIndex, 1)[0];
  res.json(deletedPerson);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
