# React Role-Based Access Control App

## Overview
This is a React.js application  styled using Tailwind CSS. The application implements role-based access control (RBAC) and integrates with an external API for authentication and user management. It supports different user roles:

- **Admin**: Can view and manage all users.
- **Cashier**: Can view their profile and access the dashboard.

The app is containerized using Docker and deployed with GitHub Actions, which builds and pushes a small-sized production-ready Docker image to Docker Hub.

## Features
- User authentication (Login, Logout, and Registering cashiers by Admin)
- Role-based access control (RBAC)
- Protected routes using React Router and context/state management
- User dashboard for authenticated users
- Admin panel for managing users
- Meaningful error messages and UI feedback

## Technologies Used
- React.js
- Tailwind CSS
- React Router
- JWT for authentication
- Docker for containerization
- GitHub Actions for CI/CD

## API Integration
- The app  uses an existing backend API.
- **Backend URL:** `REACT_APP_SERVER_URL = https://stock-management-be.vercel.app`

## Setup Instructions

### Prerequisites
- Node.js installed
- Docker installed (optional)
- Docker Hub account (if using Docker)

### Initial Admin Account
 An initial admin account is created automatically during the app's first run if it doesn't already exist in the database. The credentials for the admin account are:


### Admin
 Email: `user@example.com`

 Password: `string`
### Cashier
 Email: `johndoe@gmail.com`

 Password: `Password@123`

### Running Locally (React)
1. Clone the repository:
   ```bash
   git clone https://github.com/Patienceineza/aims-project
   cd aims-project
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
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Running with Docker
1. Build the Docker image:
   ```bash
   docker build -t patienceineza/react-rbac-app .
   ```
2. Run the container:
   ```bash
   docker run -p 3000:3000 patienceineza/react-rbac-app
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Try It Online  
If you don't want to install the app locally, you can access the hosted vercel version here:  
🔗 **[Live Demo](https://aims-project-virid.vercel.app/)**  

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


