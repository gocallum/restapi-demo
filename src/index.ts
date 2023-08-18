import express from 'express';
import bodyParser from 'body-parser';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

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

// Swagger options
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Person API',
      version: '1.0.0',
    },
  },
  apis: ['./src/index.ts'], // Path to this file
};

// Initialize swagger-jsdoc
const specs = swaggerJsdoc(swaggerOptions);

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

/**
 * @swagger
 * /api/people:
 *   get:
 *     summary: Get a list of people
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 firstname: John
 *                 lastname: Doe
 *                 phoneNumber: 123-456-7890
 */
app.get('/api/people', (req, res) => {
  res.json(people);
});

/**
 * @swagger
 * /api/people/{id}:
 *   get:
 *     summary: Get details of a person by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the person
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               firstname: John
 *               lastname: Doe
 *               phoneNumber: 123-456-7890
 *       404:
 *         description: Person not found
 */
app.get('/api/people/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const person = people.find(p => p.id === id);

  if (!person) {
    res.status(404).json({ error: 'Person not found' });
    return;
  }

  res.json(person);
});

// Add Swagger annotations to other routes (POST, PUT, DELETE) in a similar manner

/**
 * @swagger
 * /api/people:
 *   post:
 *     summary: Create a new person
 *     requestBody:
 *       description: Information about the person to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PersonInput'
 *     responses:
 *       201:
 *         description: Person created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Person'
 *             example:
 *               id: 2
 *               firstname: Jane
 *               lastname: Smith
 *               phoneNumber: 987-654-3210
 *       400:
 *         description: Bad request
 */
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

/**
 * @swagger
 * /api/people/{id}:
 *   put:
 *     summary: Update a person by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the person to be updated
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: New information for the person
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PersonInput'
 *     responses:
 *       200:
 *         description: Person updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Person'
 *       404:
 *         description: Person not found
 */
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


/**
 * @swagger
 * /api/people/{id}:
 *   delete:
 *     summary: Delete a person by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the person to be deleted
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Person deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Person'
 *       404:
 *         description: Person not found
 */
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
