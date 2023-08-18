# restapi-demo

# Express REST API with TypeScript

This is a simple Express-based REST API built using TypeScript. It provides endpoints to manage a list of people with their personal information.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Make sure you have Node.js and npm installed on your machine.
2. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

3. Navigate to the project directory:

   ```bash
   cd your-repo-name
   ```

4. Install the project dependencies:

   ```bash
   npm install
   ```

## Usage

1. After installing the dependencies, start the server:

   ```bash
   npm start
   ```

   The server will run on port 3000 by default. You can modify the `PORT` variable in the code to change the port number.

2. You can use API client tools like `curl` or API testing tools like Postman to interact with the API.

## Endpoints

The API provides the following endpoints:

- **GET /api/people**: Get a list of all people.
- **GET /api/people/:id**: Get details of a person by their ID.
- **POST /api/people**: Create a new person.
- **PUT /api/people/:id**: Update the details of a person by their ID.
- **DELETE /api/people/:id**: Delete a person by their ID.

## Contributing

Contributions are welcome! If you find any bugs or want to add features, please feel free to open issues and pull requests in this repository.

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

