# React Role-Based Access Control App

## Overview
This is a React.js application built with Vite and styled using Tailwind CSS. The application implements role-based access control (RBAC) and integrates with an external API for authentication and user management. It supports different user roles:

- **Admin**: Can view and manage all users.
- **Cashier**: Can view their profile and access the dashboard.

The app is containerized using Docker and deployed with GitHub Actions, which builds and pushes a small-sized production-ready Docker image to Docker Hub.

## Features
- User authentication (Login, Logout, and Registring cashiers by Admin)
- Role-based access control (RBAC)
- Protected routes using React Router and context/state management
- User dashboard for authenticated users
- Admin panel for managing users
- Meaningful error messages and UI feedback

## Technologies Used
- React.js with Vite
- Tailwind CSS
- React Router
- JWT for authentication
- Docker for containerization
- GitHub Actions for CI/CD

## API Integration
- The app integrates with the public API [Reqres.in](https://reqres.in/) for authentication.
- Alternatively, it can use an existing backend API.
- **Backend URL:** `REACT_APP_SERVER_URL = https://stock-management-be.vercel.app`

## Setup Instructions
### Prerequisites
- Node.js installed
- Docker installed
- Docker Hub account

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Patienceineza/aims-project
   cd your-repo
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add:
   ```env
   REACT_APP_SERVER_URL=https://stock-management-be.vercel.app
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Running with Docker
1. Build the Docker image:
   ```bash
   docker build -t patienceineza/react-rbac-app .
   ```
2. Run the container:
   ```bash
   docker run -p 3000:3000 inezapatience/react-rbac-app
   ```

## Deployment & CI/CD
### GitHub Actions Workflow
A GitHub Actions workflow is configured to:
1. Build the production app.
2. Create a small-sized Docker image.
3. Push the image to Docker Hub.

### Deployment Steps
1. Push code to GitHub.
2. GitHub Actions will automatically build and push the Docker image.
3. Deploy the Docker image from Docker Hub to your server or cloud provider.

## License
This project is open-source and available under the MIT License.

---
For any issues, contributions, or feature requests, feel free to open a GitHub issue.

