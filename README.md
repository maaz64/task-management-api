# Task Management System

## Introduction

This project is a RESTful API for a Task Management System. It provides functionality for user registration, authentication, task management (CRUD operations), task assignment, and filtering/searching tasks,pagination for task lists.

## Features

- **User Registration and Authentication**: Users can register and log in to receive a JWT token for authenticated requests.
- **CRUD Operations for Tasks**: Users can create, read, update, and delete tasks.
- **Task Assignment**: Tasks can be assigned to specific users.
- **Filtering and Searching**: Users can filter tasks by status, priority, and due date, and search by title or description.
- **Pagination**: Task lists are paginated for better performance and usability.

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for Node.js.
- **MySQL**: Relational database.
- **Sequelize**: ORM for database management.
- **JWT**: JSON Web Token for authentication.
- **Docker**: Containerization of the application.
- **GitHub Actions**: CI/CD pipeline for testing and deployment.
- **Jest**: Testing framework for unit and integration tests.

## Project Structure

```plaintext
├── config/
│   └── config.js        # Database configuration
├── controllers/
│   └── authController.js  # Handles user authentication
│   └── taskController.js  # Handles task management
├── middleware/
│   └── authMiddleware.js  # Authentication middleware
├── models/
│   └── user.js           # User model
│   └── task.js           # Task model
├── routes/
│   └── authRoutes.js     # Authentication routes
│   └── taskRoutes.js     # Task management routes
├── .env                  # Environment variables
├── index.js              # Main Express application
├── package.json          # Node.js dependencies and scripts 
└── README.md             # Project documentation
```

## Setup Instructions

### Prerequisites
- Node.js (v14+)
- MySQL (v8+)

### Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/maaz64/task-management-api.git
   ```
2. **Navigate to root folder**
   ```bash
   cd task-management-api
   ```
3. **create .env  file to root folder with following environment variables**
   ```bash
   JWT_SECRET= your jwt secret
   DB_USERNAME= database username
   DB_PASSWORD= database password
   DB_NAME= your database name
   DB_HOST= host
   ```
4. **Create a schema connect to MySQL**
   ```bash
   CREATE DATABASE your_database_name;
   ```
4. **Install package dependencies**
   ```bash
   npm install
   ```
5. **Run the development server**
   ```bash
   npm start
   ```

## API Documentation

The API documentation is available via Swagger UI. You can access it at:
`http://localhost:8000/api-docs`


## Brief Write-up on Approach

### Architecture
The application follows a typical MVC (Model-View-Controller) architecture:

- Models: Sequelize models for Users and Tasks.
- Controllers: Handle the business logic for authentication and task management.
- Routes: Expose API endpoints to interact with the system.


### Security
- Password Hashing: User passwords are securely hashed using bcrypt.
- JWT Authentication: JSON Web Tokens (JWT) are used for stateless authentication of API requests.

### Pagination and Filtering
- Pagination is implemented to ensure efficient data retrieval and improved performance.
- Filtering and searching allow users to filter tasks by status, priority, and due date or search by title/description.

