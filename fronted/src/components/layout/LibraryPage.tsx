import type { Book, BookCreate } from "../../interfaces/book";
import BookList from "../books/BookList";
import BookForm from "../books/BookForm";
import SearchBar from "../search/SearchBar";
import BookFilter from "../search/BookFilter";
import "./LibraryPage.css";

type Props = {
  books: Book[];
  editingId: number | null;
  editingBook: Book | null;
  bookError: string | null;
  isLoading: boolean;
  isAdding:boolean;

  onAddBook: (book: BookCreate) => void;
  onEditBook: (id: number, updatedBook: BookCreate) => void;
  onDeleteBook: (id: number) => void;
  onToggleReadBook: (id: number) => void;

  onSearch: (searchTerm: string) => void;
  onFilterChange: (filterTerm: string) => void;

  onStartEditing: (id: number) => void;
  onFinishEditing: () => void;
  onStartAdding:()=>void;
  onFinishAdding: () => void;
};

function LibraryPage({
  books,
  editingId,
  editingBook,
  bookError,
  isLoading,
  isAdding,
  onAddBook,
  onEditBook,
  onDeleteBook,
  onToggleReadBook,
  onSearch,
  onFilterChange,
  onStartEditing,
  onFinishEditing,
  onStartAdding,
  onFinishAdding
  
}: Props) {
  return (
    <div className="app">
      <h1>Librario</h1>

      <div className="library-container">
        {bookError && <p>{bookError}</p>}

        <SearchBar onSearch={onSearch} />

        <BookFilter onFilterChange={onFilterChange} />
        <button className="button-primary" onClick={onStartAdding}>
          + Agregar libro
        </button>
      </div>

     {isAdding ? (
  <BookForm
    key="add"
    onAddBook={onAddBook}
    onEditBook={onEditBook}
    editingId={null}
    editingBook={null}
    onFinishEditing={onFinishAdding}
  />
) : editingId !== null ? (
  <BookForm
    key={editingId}
    onAddBook={onAddBook}
    onEditBook={onEditBook}
    editingId={editingId}
    editingBook={editingBook}
    onFinishEditing={onFinishEditing}
  />
) : (
  <>
    {!isLoading && (
      <BookList
        books={books}
        onDeleteBook={onDeleteBook}
        onToggleReadBook={onToggleReadBook}
        onEditBook={onStartEditing}
      />
    )}
  </>
)}
    </div>
  );
}

export default LibraryPage;
