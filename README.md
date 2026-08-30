# 📚 Librario

A full-stack library management application for organizing and managing a personal book collection.

Librario allows users to add, edit, delete, search, and filter books while keeping their data stored in a PostgreSQL database through a REST API.

## 📸 Preview

### Library

![Librario Library](./screenshots/library.png)

### Add / Edit Book

![Add Book](./screenshots/add-book.png)

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
- 📱 Responsive and clean user interface

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
