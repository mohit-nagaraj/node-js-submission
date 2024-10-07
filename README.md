# node-js-submission

This is a Node.js project that provides a RESTful API for managing events. The project uses Express.js for the server, Mongoose for MongoDB interactions, and Winston for logging.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Logging](#logging)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/node-js-submission.git
    cd node-js-submission
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file based on the `.env.example`:
    ```sh
    cp .env.example .env
    ```

4. Update the `.env` file with your MongoDB URI and desired port.

## Configuration

The project uses environment variables for configuration. The following variables need to be set in the `.env` file:

- `MONGODB_URI`: The URI for your MongoDB database.
- `PORT`: The port on which the server will run.

Example `.env` file:
```env
MONGODB_URI=mongodb://localhost:27017/your-database-name
PORT=3000
```

## Usage
To start the server, run:
```js
    node index.js
```
The server will be running at `http://localhost:<PORT>`

## API Endpoints

The following endpoints are available:

- `GET /events`: Get all events.
- `GET /events/:id`: Get an event by ID.
- `POST /events`: Create a new event.
- `PUT /events/:id`: Update an event by ID.
- `DELETE /events/:id`: Delete an event by ID.

For more details refer to postman collection here: [Postman Collection](https://www.postman.com/spacecraft-astronomer-56970938/workspace/my-proj/collection/29989847-b0683cc5-1c3d-4ee5-932e-39c5f3f2afa2?action=share&source=copy-link&creator=29989847)