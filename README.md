# MERN Real Estate App

A full-stack **Real Estate Web Application** built using the **MERN Stack (MongoDB, Express, React, Node.js)**.

This platform allows users to **browse available properties, manage their own listings, and explore rental or sale properties** in different locations.

Whether you're a **buyer, renter, or property owner**, the application provides a smooth and simple experience.

---

## Features

### Browse Public Listings
- Explore a variety of **properties available for rent or sale**
- Filter properties based on **location and preferences**

### User-Friendly Sign Up
- Create an account quickly using **email and password**

### Sign Up with Google
- Supports **Google Authentication using Firebase**

### Listing Management
Once logged in, users can:
- Create new property listings
- Update existing listings
- Delete listings that are no longer relevant

### View Your Listings
- Access and manage **all your created listings in one place**

---

## Tech Stack

### Frontend
- React
- TypeScript
- Redux Toolkit
- RTK Query
- Material UI
- Formik

### Backend
- Node.js
- Express.js

### Database
- MongoDB



## Environment Variables

To run this project locally, create a `.env` file and add the following variables.

### Backend


NODE_ENV=development
PORT=5000
DATABASE=your_mongodb_connection_string


### Frontend


REACT_APP_API_URL=http://127.0.0.1:5000/api/v1/

REACT_APP_FIREBASE_API_KEY=your_firebase_api_key


---

## API Reference

### Base API URL


http://127.0.0.1:5000/api/v1/


---

## User API

### Signup
POST `/users/signup`

### Login
POST `/users/login`

### Get User
GET `/users/:id`

### Update User
PUT `/users/update/:id`

### Delete User
DELETE `/users/delete/:id`

### Google Authentication
POST `/users/google`

---

## Listing API

### Get All Listings
GET `/listings/get`

### Get Single Listing
GET `/listings/listing/:id`

### Create Listing
POST `/listings/`

### Get User Listings
GET `/listings/:id`

### Delete Listing
DELETE `/listings/:id`

### Update Listing
PUT `/listings/:id`

---

## Author

<div align="center">

Made with ❤️ by Rizwan

</div>
