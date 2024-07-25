# MERN Stack Blog Website

This repository contains the source code for a blog website built using the MERN stack (MongoDB, Express.js, React.js, and Node.js).

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization
- Create, read, update, and delete (CRUD) blog posts
- Commenting system
- Responsive design
- Rich text editor for writing posts
- Search functionality
- Pagination for posts and comments

## Technologies

- **Frontend:**
  - React.js
  - Redux
  - Tailwind CSS
  - Axios

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - JWT for authentication

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/hamzabenarfa/blog-express.git
    cd blog-express
    ```

2. Install dependencies for both client and server:

    ```bash
    # Install server dependencies
    cd api
    npm install

    # Install client dependencies
    cd ../app
    npm install
    ```

3. Create a `.env` file in the `api` directory and add the following environment variables:

    ```env
    MONGO_URI=<your-mongodb-uri>
    JWT_SECRET=<your-jwt-secret>
    PORT=4000
    ```

## Usage

1. Start the backend server:

    ```bash
    cd api
    npm run dev
    ```

2. Start the frontend development server:

    ```bash
    cd ../api
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000`.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
