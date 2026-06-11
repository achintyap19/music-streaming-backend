# Music Streaming Backend API

A backend application built with Node.js, Express.js, and MongoDB that supports authentication, role-based authorization, music uploads, and album management.

## Features

### Authentication
- User Registration
- User Login
- User Logout
- JWT Authentication

### Authorization
- Role-Based Access Control (RBAC)
- Artist-only protected routes

### Music Management
- Upload Music
- Create Albums
- Get All Music
- Get Albums

### Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Multer

## Project Structure

```text
src/
├── controllers/
├── db/
├── middlewares/
├── models/
├── routes/
├── services/
└── app.js
```

## API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
```

### Music

```http
GET /api/music
POST /api/music/upload
POST /api/music/album
```

## Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## Installation

```bash
git clone https://github.com/achintyap19/music-streaming-backend.git
cd music-streaming-backend
npm install
npm start
```

## Future Improvements

- Music streaming endpoint
- Search and filtering
- Pagination
- Cloud storage integration (AWS S3 / Cloudinary)
- Swagger API documentation
- Unit and integration testing

## Learning Outcomes

This project helped me gain practical experience with:
- REST API development
- JWT Authentication
- Role-Based Authorization
- MongoDB and Mongoose
- Express Middleware
- File Upload Handling with Multer
