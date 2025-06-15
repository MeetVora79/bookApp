# 📚 MERN Bookstore App

A full-stack Bookstore application built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**.  
It provides users with a simple interface to manage a collection of books through full **CRUD operations**.

---

## ✨ Features

- ✅ Add a new book with title, author, description, price, and year
- 📃 List all books in the database
- 🔍 View details of a specific book by ID
- ✏️ Update book information
- ❌ Delete a book from the collection
- 🌐 RESTful API integration
- ⚛️ Responsive frontend using React and Tailwind CSS

---

## 🧱 Tech Stack

| Layer       | Technology           |
|-------------|----------------------|
| Frontend    | React.js, Tailwind CSS |
| Backend     | Node.js, Express.js  |
| Database    | MongoDB (via Mongoose) |
| Tools       | Postman, MongoDB Compass |

---

## 📂 Project Structure

bookstore-app/
├── backend/
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ └── server.js
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ └── App.jsx
└── README.md

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/mern-bookstore.git
cd mern-bookstore

### 2. Start the Backend
cd backend
npm install
npm start
Ensure MongoDB is running locally at: mongodb://localhost:27017/BookApp

### 3. Start the Frontend
cd ../frontend
npm install
npm start

## API Endpoints
| Method | Endpoint     | Description    |
| ------ | ------------ | -------------- |
| GET    | `/books`     | Get all books  |
| GET    | `/books/:id` | Get book by ID |
| POST   | `/books`     | Add a new book |
| PUT    | `/books/:id` | Update a book  |
| DELETE | `/books/:id` | Delete a book  |

