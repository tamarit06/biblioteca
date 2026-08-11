import { useState } from "react";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import type { Book } from "./interfaces/book.ts";
import SearchBar from "./components/SearchBar.tsx";
import BookFilter from "./components/BookFilter.tsx";
import "./App.css";


function App() {
  const[search,setSearch] = useState<string>("");
  const[filter,setFilter] = useState<string>("all");
 const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const [books, setBooks] = useState<Book[]>([
    {
      title: "The Great Gatsby",
      genre: "Fiction",
      author: "F. Scott Fitzgerald",
      year: 1925,
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg",
      isRead: true,
    },
  ]);
  const filteredBooks = books.filter((book) => {
  
const matchSearch= book.title.toLowerCase().includes(search.toLowerCase());
const matchFilter = filter === "all" || (filter === "read" && book.isRead) || (filter === "unread" && !book.isRead);
return matchSearch && matchFilter;

});

 
   const onDeleteBook = (index: number) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  }
  const agregarBook = (newBook: Book) => {
    setBooks([...books, newBook]);
  };
  const toggleReadBook = (index: number) => {
  setBooks(
    books.map((book, i) => {
      if (i === index) {
        return {
          ...book,
          isRead: !book.isRead
        };
      }

      return book;
    })
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
        books.map((book, i) => {
            if (i === index) {
                return updatedBook;
            }

            return book;
        })
    );
};
    const startEditing = (index: number) => {
    setEditingIndex(index);
};
const finishEditing = () => {
    setEditingIndex(null);
};

const editingBook =
    editingIndex !== null ? books[editingIndex] : null;

  return (
    <div className="app">
      <h1>Biblioteca</h1>
      <div className="library-container">

      <SearchBar onSearch={searchBooks} />
      <BookFilter onFilterChange={filterBooks} />
      </div>
      
      {editingIndex === null ? (
  <>
    <BookForm
      onAddBook={agregarBook}
      onEditBook={editBook}
      editingIndex={editingIndex}
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
    editingIndex={editingIndex}
    editingBook={editingBook}
    onFinishEditing={finishEditing}
  />
)}
      
    
    </div>
  );
}

export default App;