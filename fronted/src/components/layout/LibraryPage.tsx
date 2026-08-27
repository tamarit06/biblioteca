import type { Book, BookCreate } from "../../interfaces/book";
import BookList from "../BookList";
import BookForm from "../BookForm";
import SearchBar from "../SearchBar";
import BookFilter from "../BookFilter";


type Props = {
  books: Book[];
  editingId: number | null;
  editingBook: Book | null;

  onAddBook: (book: BookCreate) => void;
  onEditBook: (id: number, updatedBook: Book) => void;
  onDeleteBook: (id: number) => void;
  onToggleReadBook: (id: number) => void;

  onSearch: (searchTerm: string) => void;
  onFilterChange: (filterTerm: string) => void;

  onStartEditing: (id: number) => void;
  onFinishEditing: () => void;
};

function LibraryPage({
  books,
  editingId,
  editingBook,
  onAddBook,
  onEditBook,
  onDeleteBook,
  onToggleReadBook,
  onSearch,
  onFilterChange,
  onStartEditing,
  onFinishEditing,
}: Props) {
  return (
    <div className="app">
      <h1>Biblioteca</h1>

      <div className="library-container">
        <SearchBar onSearch={onSearch} />

        <BookFilter onFilterChange={onFilterChange} />
      </div>

      {editingId === null ? (
        <>
          <BookForm
            onAddBook={onAddBook}
            onEditBook={onEditBook}
            editingId={editingId}
            editingBook={editingBook}
            onFinishEditing={onFinishEditing}
          />

          <BookList
            books={books}
            onDeleteBook={onDeleteBook}
            onToggleReadBook={onToggleReadBook}
            onEditBook={onStartEditing}
          />
        </>
      ) : (
        <BookForm
          onAddBook={onAddBook}
          onEditBook={onEditBook}
          editingId={editingId}
          editingBook={editingBook}
          onFinishEditing={onFinishEditing}
        />
      )}
    </div>
  );
}

export default LibraryPage;