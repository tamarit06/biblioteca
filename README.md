# 📚 Librario

A full-stack library management application for organizing and managing a personal book collection.

Librario allows users to add, edit, delete, search, and filter books while keeping their data stored in a PostgreSQL database through a REST API.

## 📸 Preview

### Library
<img width="2610" height="1206" alt="Screenshot 2026-08-29 at 22-03-03 biblioteca" src="https://github.com/user-attachments/assets/ba6b829b-ca5d-4ffc-a689-1eecab54d08f" />



### Add / Edit Book

<img width="2116" height="1380" alt="Screenshot 2026-08-29 at 22-03-18 biblioteca" src="https://github.com/user-attachments/assets/e8e366a9-92e2-4e6f-8866-9a7c130dfa66" />


## ✨ Features

- 📖 View all books in the library
- ➕ Add new books
- ✏️ Edit existing books
- 🗑️ Delete books
- 🔎 Search books
- 🏷️ Filter books by reading status
- ✅ Mark books as read or unread
- 🖼️ Add book cover images
- 💾 Persistent data storage with PostgreSQL
- 🔗 RESTful API built with FastAPI
- 📱 Clean and responsive user interface

## 🛠️ Technologies

### Frontend

- React
- TypeScript
- Vite
- CSS

### Backend

- Python
- FastAPI
- SQLAlchemy
- Pydantic
- Alembic

### Database

- PostgreSQL

## 🏗️ Project Architecture

The application follows a client-server architecture:

```text
┌─────────────────────┐
│      React          │
│    TypeScript       │
│      Frontend       │
└──────────┬──────────┘
           │
           │ HTTP / REST API
           ▼
┌─────────────────────┐
│      FastAPI        │
│      Backend        │
└──────────┬──────────┘
           │
           │ SQLAlchemy
           ▼
┌─────────────────────┐
│     PostgreSQL      │
│      Database       │
└─────────────────────┘
```

## 📁 Project Structure

```text
Librario/
│
├── backend/
│   ├── app/
│   │   ├── models/
│   │   │   └── book.py
│   │   ├── routes/
│   │   │   └── books.py
│   │   ├── schemas/
│   │   │   └── book.py
│   │   ├── services/
│   │   │   └── book_services.py
│   │   ├── database.py
│   │   └── main.py
│   │
│   ├── alembic/
│   ├── .env
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
├── screenshots/
│   ├── library.png
│   └── add-book.png
│
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/tamarit06/Librario.git
cd Librario
```

### 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv .venv
```

Activate the virtual environment.

#### Linux / macOS

```bash
source .venv/bin/activate
```

#### Windows

```bash
.venv\Scripts\activate
```

Install the dependencies:

```bash
pip install -r requirements.txt
```

### 3. Environment Variables

Create a `.env` file inside the `backend` directory:

```env
DATABASE_URL=your_postgresql_connection_string
```

### 4. Database Migrations

Run the database migrations using Alembic:

```bash
alembic upgrade head
```

### 5. Start the Backend

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

### 6. Start the Frontend

Open another terminal and navigate to the frontend directory:

```bash
cd frontend
```

Install the dependencies:

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

## 🔌 API Endpoints

The backend provides a REST API for managing books.

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/books/` | Get all books |
| GET | `/api/books/{id}` | Get a book by ID |
| POST | `/api/books/` | Create a new book |
| PUT | `/api/books/{id}` | Update a book |
| DELETE | `/api/books/{id}` | Delete a book |

## 📚 Book Model

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

## 🔄 How It Works

The frontend communicates with the FastAPI backend through HTTP requests.

When a user adds a book, the request follows this flow:

```text
User
  ↓
React Form
  ↓
POST /api/books/
  ↓
FastAPI
  ↓
SQLAlchemy
  ↓
PostgreSQL
  ↓
Book saved
  ↓
React updates the library
```

## 🚀 Future Improvements

- 🔐 User authentication and authorization
- 👤 Personal libraries for different users
- 📊 Reading statistics
- ⭐ Book ratings and reviews
- 📅 Reading goals
- 🔍 Advanced search and filtering
- 🌙 Dark mode
- 📱 Improved mobile experience
- ☁️ Production deployment

## 👩‍💻 Author

**Lianet Tamarit Tejas**

Computer Science student and aspiring Backend Developer.

Interested in building backend systems, REST APIs, and full-stack applications.

### GitHub

[@tamarit06](https://github.com/tamarit06)
