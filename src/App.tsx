import { useState } from "react";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import type { Book } from "./interfaces/book.ts";
import SearchBar from "./components/SearchBar.tsx";
import BookFilter from "./components/BookFilter.tsx";
import "./App.css";

function App() {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("all");
  const [editingId, setEditingId] = useState<string|number | null>(null);

  const [books, setBooks] = useState<Book[]>([
    {
      id: 1,
      title: "The Great Gatsby",
      genre: "Fiction",
      author: "F. Scott Fitzgerald",
      year: "1925",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg",
      isRead: true,
    },
  ]);
  const filteredBooks = books.filter((book) => {
    const matchSearch = book.title.toLowerCase().includes(search.toLowerCase());
    const matchFilter =
      filter === "all" ||
      (filter === "read" && book.isRead) ||
      (filter === "unread" && !book.isRead);
    return matchSearch && matchFilter;
  });

 
  const onDeleteBook = (id: string | number) => {
  const updatedBooks = books.filter((book) => book.id !== id);
  setBooks(updatedBooks);
};
  const agregarBook = (newBook: Book) => {
    setBooks([...books, newBook]);
  };
  const toggleReadBook = (index: number) => {
    setBooks(
      books.map((book) => {
        if (book.id === index) {
          return {
            ...book,
            isRead: !book.isRead,
          };
        }

        return book;
      }),
    );
  };
  const searchBooks = (searchTerm: string) => {
    setSearch(searchTerm);
  };
  const filterBooks = (filterTerm: string) => {
    setFilter(filterTerm);
  };
  const editBook = (index: number, updatedBook: Book) => {
    setBooks(
      books.map((book) => {
        if (book.id === index) {
          return updatedBook;
        }

        return book;
      }),
    );
  };
  const startEditing = (id: string | number) => {
    setEditingId(id);
  };
  const finishEditing = () => {
    setEditingId(null);
  };

 const editingBook =
  editingId !== null
    ? books.find((book) => book.id === editingId) ?? null
    : null;

  return (
    <div className="app">
      <h1>Biblioteca</h1>
      <div className="library-container">
        <SearchBar onSearch={searchBooks} />
        <BookFilter onFilterChange={filterBooks} />
      </div>

      {editingId === null ? (
        <>
          <BookForm
            onAddBook={agregarBook}
            onEditBook={editBook}
            editingIndex={editingId}
            editingBook={editingBook}
            onFinishEditing={finishEditing}
          />

          <BookList
            books={filteredBooks}
            onDeleteBook={onDeleteBook}
            onToggleReadBook={toggleReadBook}
            onEditBook={startEditing}
          />
        </>
      ) : (
        <BookForm
          onAddBook={agregarBook}
          onEditBook={editBook}
          editingIndex={editingId}
          editingBook={editingBook}
          onFinishEditing={finishEditing}
        />
      )}
    </div>
  );
}

export default App;
