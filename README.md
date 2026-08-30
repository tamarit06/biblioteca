# 📚 Librario

A full-stack library management application for organizing and managing a personal book collection.

Librario allows users to add, edit, delete, search, and filter books while keeping their data persistently stored in a PostgreSQL database through a RESTful API.

The project was built to practice and demonstrate modern full-stack development using **React, TypeScript, FastAPI, SQLAlchemy, PostgreSQL, and Alembic**.

## 🌐 Live Demo

### Frontend

**Librario Web Application**

https://biblioteca-fronted.onrender.com/

### Backend API

**FastAPI Backend**

https://biblioteca-u4h0.onrender.com/

### API Documentation

Interactive Swagger documentation:

https://biblioteca-u4h0.onrender.com/docs

---

## 📸 Preview

### Library

<img width="2610" height="1206" alt="Screenshot 2026-08-29 at 22-03-03 biblioteca" src="https://github.com/user-attachments/assets/ba6b829b-ca5d-4ffc-a689-1eecab54d08f" />

### Add / Edit Book

<img width="2116" height="1380" alt="Screenshot 2026-08-29 at 22-03-18 biblioteca" src="https://github.com/user-attachments/assets/e8e366a9-92e2-4e6f-8866-9a7c130dfa66" />

---

## ✨ Features

* 📖 View all books in the library
* ➕ Add new books
* ✏️ Edit existing books
* 🗑️ Delete books
* 🔎 Search books by title or author
* 🏷️ Filter books by reading status
* ✅ Mark books as read or unread
* 🖼️ Add book cover images
* 💾 Persistent data storage with PostgreSQL
* 🔗 RESTful API built with FastAPI
* 🧩 Modular backend architecture
* 🗃️ Database migrations with Alembic
* 📱 Responsive user interface
* ☁️ Production deployment

---

## 🛠️ Technologies

### Frontend

* React
* TypeScript
* Vite
* CSS

### Backend

* Python
* FastAPI
* SQLAlchemy
* Pydantic
* Alembic
* Uvicorn

### Database

* PostgreSQL

### Deployment

* Render

---

## 🏗️ Project Architecture

Librario follows a **client-server architecture** where the React frontend communicates with a FastAPI REST API.

```text
┌─────────────────────────┐
│        React            │
│       TypeScript        │
│        Frontend         │
└────────────┬────────────┘
             │
             │ HTTP / REST API
             ▼
┌─────────────────────────┐
│        FastAPI          │
│        Backend          │
├─────────────────────────┤
│      Routers            │
│      Services           │
│      Schemas            │
│      SQLAlchemy         │
└────────────┬────────────┘
             │
             │ SQLAlchemy
             ▼
┌─────────────────────────┐
│       PostgreSQL        │
│        Database         │
└─────────────────────────┘
```

---

## 📁 Project Structure

```text
Librario/
│
├── backend/
│   ├── app/
│   │   ├── models/
│   │   │   └── book.py
│   │   │
│   │   ├── routers/
│   │   │   └── books.py
│   │   │
│   │   ├── schemas/
│   │   │   └── book.py
│   │   │
│   │   ├── services/
│   │   │   └── book_services.py
│   │   │
│   │   ├── database.py
│   │   └── main.py
│   │
│   ├── alembic/
│   │   ├── versions/
│   │   └── env.py
│   │
│   ├── .env
│   ├── alembic.ini
│   ├── requirements.txt
│   └── ...
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── interfaces/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.tsx
│   │
│   ├── package.json
│   └── ...
│
└── README.md
```

---

# ⚙️ Installation

## 1. Clone the repository

```bash
git clone https://github.com/tamarit06/Librario.git
cd Librario
```

---

## 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv .venv
```

Activate the virtual environment.

### Linux / macOS

```bash
source .venv/bin/activate
```

### Windows

```bash
.venv\Scripts\activate
```

Install the dependencies:

```bash
pip install -r requirements.txt
```

---

## 3. Environment Variables

Create a `.env` file inside the `backend` directory.

```env
DATABASE_URL=your_postgresql_connection_string
```

The `.env` file should **not be committed to the repository**.

For production, environment variables are configured directly in the hosting platform.

---

## 4. Database Migrations

Librario uses **Alembic** to manage database schema changes.

Apply the latest migrations with:

```bash
alembic upgrade head
```

This ensures that the PostgreSQL database contains the required schema.

The `books` table contains:

```text
id
title
author
genre
year
is_read
image
```

---

## 5. Start the Backend

Run:

```bash
uvicorn app.main:app --reload
```

The API will be available at:

```text
http://127.0.0.1:8000
```

Interactive API documentation:

```text
http://127.0.0.1:8000/docs
```

---

## 6. Start the Frontend

Open another terminal and navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

# 🔌 API Endpoints

The backend provides a RESTful API for managing books.

| Method | Endpoint          | Description       |
| ------ | ----------------- | ----------------- |
| GET    | `/api/books/`     | Get all books     |
| GET    | `/api/books/{id}` | Get a book by ID  |
| POST   | `/api/books/`     | Create a new book |
| PUT    | `/api/books/{id}` | Update a book     |
| DELETE | `/api/books/{id}` | Delete a book     |

---

# 📚 Book Model

Each book contains the following information:

```text
id
title
author
genre
year
image
is_read
```

Example:

```json
{
  "title": "Pride and Prejudice",
  "author": "Jane Austen",
  "genre": "Novel",
  "year": 1813,
  "image": "https://example.com/book-cover.jpg",
  "is_read": true
}
```

---

# 🔄 How It Works

The frontend communicates with the FastAPI backend through HTTP requests.

For example, when a user creates a new book:

```text
User
  │
  ▼
React Form
  │
  │ POST /api/books/
  ▼
FastAPI Router
  │
  ▼
Pydantic Schema
  │
  ▼
Book Service
  │
  ▼
SQLAlchemy
  │
  ▼
PostgreSQL
  │
  ▼
Book Stored
  │
  ▼
API Response
  │
  ▼
React Updates UI
```

This separation keeps the frontend, business logic, API layer, and database responsibilities organized.

---

# 🗃️ Database & Migrations

The project uses **PostgreSQL** as its relational database.

SQLAlchemy is responsible for communicating with PostgreSQL, while Alembic manages database schema migrations.

The production deployment automatically runs:

```bash
alembic upgrade head
```

before starting the FastAPI server.

The production server is started with:

```bash
uvicorn app.main:app --host 0.0.0.0 --port $PORT
```

This ensures that database migrations are applied before the application starts.

---

# ☁️ Deployment

The application is deployed using **Render**.

The project consists of:

```text
React Frontend
       │
       ▼
Render Web Service
       │
       │ HTTP
       ▼
FastAPI Backend
       │
       ▼
Render PostgreSQL
```

### Backend deployment

The backend runs the following command in production:

```bash
alembic upgrade head && uvicorn app.main:app --host 0.0.0.0 --port $PORT
```

### Frontend deployment

The React application is built using:

```bash
npm run build
```

and deployed as a production web application.

### Production Environment

Sensitive configuration such as the PostgreSQL connection string is stored as an environment variable rather than being committed to Git.

---

# 🔐 Environment Variables

### Backend

```env
DATABASE_URL=your_postgresql_connection_string
```

### Frontend

The production frontend uses the deployed backend API URL rather than the local development server.

Development:

```text
http://127.0.0.1:8000
```

Production:

```text
https://biblioteca-u4h0.onrender.com
```

---

# 🧪 Testing the API

You can test the API using the interactive Swagger documentation:

```text
https://biblioteca-u4h0.onrender.com/docs
```

From there, you can execute requests such as:

```text
GET     /api/books/
GET     /api/books/{id}
POST    /api/books/
PUT     /api/books/{id}
DELETE  /api/books/{id}
```

---

# 🚀 Future Improvements

Possible future improvements include:

* 🔐 User authentication and authorization
* 👤 Personal libraries for different users
* 📊 Reading statistics and dashboards
* ⭐ Book ratings and reviews
* 📅 Reading goals
* 🔍 Advanced search and filtering
* 🌙 Dark mode
* 📱 Further mobile optimization
* 🧪 Automated tests
* 🔄 CI/CD pipeline
* 📝 Improved API documentation

---

# 👩‍💻 Author

**Lianet Tamarit Tejas**

Computer Science student and aspiring Backend Developer.

Interested in building backend systems, REST APIs, databases, and full-stack applications.

### GitHub

[@tamarit06](https://github.com/tamarit06)

---

## ⭐ If you like this project

Feel free to explore the repository, try the live application, or use the project as a reference for learning full-stack development.
