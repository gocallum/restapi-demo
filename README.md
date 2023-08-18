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

To submit your latest code changes back to GitHub, follow these steps:

1. **Check for Changes:**
   Make sure you are in your project directory on your local machine and check for any changes in your code:

   ```sh
   git status
   ```

   This will show you a list of modified files.

2. **Add Changes to Staging:**
   Add the modified files to the staging area for commit:

   ```sh
   git add .
   ```

   The `.` adds all changed files. If you want to add specific files, replace `.` with the file names.

3. **Commit Changes:**
   Commit the staged changes with a meaningful message:

   ```sh
   git commit -m "Updated code with new changes"
   ```

   Replace the message with a concise description of the changes you made.

4. **Push to GitHub:**
   Push the committed changes to your GitHub repository:

   ```sh
   git push origin master
   ```

   This assumes you're pushing to the `master` branch. If you're using a different branch, replace `master` with the appropriate branch name.

5. **Provide GitHub Credentials:**
   If you haven't previously set up your GitHub credentials, Git might prompt you for your username and password. Alternatively, if you're using SSH keys, you won't need to enter credentials.

6. **Verify on GitHub:**
   Once the push is successful, visit your GitHub repository in a web browser to verify that the changes have been updated.

If you encounter any issues during this process, double-check your internet connection, repository permissions, and credentials to ensure a smooth push.

## License

This project is licensed under the [MIT License](LICENSE).

