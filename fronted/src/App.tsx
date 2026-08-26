import { useState, useEffect } from "react";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import type { Book, BookCreate } from "./interfaces/book.ts";
import SearchBar from "./components/SearchBar.tsx";
import BookFilter from "./components/BookFilter.tsx";
import "./App.css";
import { getBooks,
  createBook,
  deleteBook,
  updateBook
 } from "./services/bookservices.ts"

function App() {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("all");
  const [editingId, setEditingId] = useState<number | null>(null);

  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    getBooks()
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const filteredBooks = books.filter((book) => {
    const matchSearch = book.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchFilter =
      filter === "all" ||
      (filter === "read" && book.is_read) ||
      (filter === "unread" && !book.is_read);

    return matchSearch && matchFilter;
  });

 const onDeleteBook = async (id: number) => {
  try {
    await deleteBook(id);

    setBooks(books.filter((book) => book.id !== id));
  } catch (error) {
    console.error(error);
  }
};

  const agregarBook = async (newBook: BookCreate) => {
  try {
    const createdBook = await createBook(newBook);

    setBooks([...books, createdBook]);
  } catch (error) {
    console.error(error);
  }
};

const toggleReadBook = async (id: number) => {
  const book = books.find((book) => book.id === id);

  if (!book) {
    return;
  }

  try {
    const updatedBook = await updateBook(id, {
      title: book.title,
      genre: book.genre,
      author: book.author,
      year: book.year,
      image: book.image,
      is_read: !book.is_read,
    });

    setBooks(
      books.map((book) => {
        if (book.id === id) {
          return updatedBook;
        }

        return book;
      }),
    );
  } catch (error) {
    console.error(error);
  }
};

  const searchBooks = (searchTerm: string) => {
    setSearch(searchTerm);
  };

  const filterBooks = (filterTerm: string) => {
    setFilter(filterTerm);
  };

  const editBook = async (id: number, updatedBook: Book) => {
  try {
    const updated = await updateBook(id, {
      title: updatedBook.title,
      genre: updatedBook.genre,
      author: updatedBook.author,
      year: updatedBook.year,
      image: updatedBook.image,
      is_read: updatedBook.is_read,
    });

    setBooks(
      books.map((book) => {
        if (book.id === id) {
          return updated;
        }

        return book;
      }),
    );
  } catch (error) {
    console.error(error);
  }
};

  const startEditing = (id: number) => {
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
            editingId={editingId}
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
          editingId={editingId}
          editingBook={editingBook}
          onFinishEditing={finishEditing}
        />
      )}
    </div>
  );
}

export default App;