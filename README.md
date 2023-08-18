# restapi-demo

# Express REST API with TypeScript and Swagger Documentation

This is a simple Express-based REST API built using TypeScript. It provides endpoints to manage a list of people with their personal information. The API documentation is powered by Swagger.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Swagger Documentation](#swagger-documentation)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Make sure you have Node.js and npm installed on your machine.
2. Clone this repository to your local machine:

   ```bash
   git clone -b master https://github.com/gocallum/restapi-demo.git
   ```

3. Navigate to the project directory:

   ```bash
   cd restapi-demo
   ```

4. Install the project dependencies:

   ```bash
   npm install
   ```

## Usage

1. After installing the dependencies, start the server:

   ```bash
   npx ts-node src/index.ts
   ```

   The server will run on port 3000 by default. You can modify the `PORT` variable in the code to change the port number.

2. Access Swagger Documentation:

   Open your web browser and navigate to `http://localhost:3000/api-docs` to access the Swagger UI for interactive API documentation. This UI provides detailed information about the API endpoints, request/response examples, and more.

3. Interact with the API:

   You can use API client tools like `curl` or API testing tools like Postman to interact with the API.

## Swagger Documentation

This project integrates Swagger for API documentation. The Swagger UI provides an interactive way to explore and test the available endpoints. The API documentation is automatically generated based on the code annotations. To access the Swagger UI:

- Start the server using `npx ts-node src/index.ts`.
- Open your web browser and go to `http://localhost:3000/api-docs`.

## Endpoints

The API provides the following endpoints:

- **GET /api/people**: Get a list of all people.
- **GET /api/people/:id**: Get details of a person by their ID.
- **POST /api/people**: Create a new person.
- **PUT /api/people/:id**: Update the details of a person by their ID.
- **DELETE /api/people/:id**: Delete a person by their ID.

## Contributing

Contributions are welcome! If you find any bugs or want to add features, please feel free to open issues and pull requests in this repository.

To contribute code changes:

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Create a pull request on GitHub.

## License

This project is licensed under the [MIT License](LICENSE).