## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Components and Features](#components-and-features)
- [Setup](#setup)

## General info

The project is a frontend application aimed at authentication and task management. Users can register, log in, view, and manage tasks. The application ensures that only authenticated users can access certain features, and it provides feedback mechanisms for user interactions.

**Live Demo**: [https://main--comfy-kheer-da7047.netlify.app/](https://main--comfy-kheer-da7047.netlify.app/)

## Technologies

Project is created with:

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A predictable state container for JavaScript apps.
- **React Router**: Declarative routing for React.
- **CSS**: For styling components.

## Components and Features

### Components

- **AppBar**: (Assumed to be a top navigation bar, details not provided).
- **AuthNav**: Navigation components specific to authentication.
- **Button**: Reusable button component.
- **Layout**: Main layout wrapper for the application.
- **LoginForm**: Form for users to log in.
- **Navigation**: Main navigation component.
- **PrivateRoute**: A route that restricts access to authenticated users.
- **RegistrationForm**: Form for users to register.
- **RestrictedRoute**: A route that restricts access based on specific conditions (e.g., restricting logged-in users from accessing the login page).
- **Task**: Component to display individual tasks.
- **TaskCounter**: (Assumed to display the count of tasks, details not provided).
- **TaskForm**: Form to create or edit tasks.
- **TaskList**: List of tasks.
- **UserMenu**: Menu related to user operations.

### Features

- **User Authentication**: Users can register and log in.
- **Task Management**: Users can create, view, and manage tasks.
- **Routing**: Uses React Router for navigation between different parts of the application.

## Setup

1. Clone the repository.
2. Navigate to the project directory.
3. Install the required dependencies using `npm install`.
4. Run the application using `npm start`.
