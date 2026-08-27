import LibraryPage from "./components/layout/LibraryPage";
import { useBooks } from "./hooks/useBooks";

import "./App.css";

function App() {
  const {
    books,
    editingId,
    editingBook,
    addBook,
    editBook,
    removeBook,
    toggleReadBook,
    searchBooks,
    filterBooks,
    startEditing,
    finishEditing,
  } = useBooks();

  return (
    <LibraryPage
      books={books}
      editingId={editingId}
      editingBook={editingBook}
      onAddBook={addBook}
      onEditBook={editBook}
      onDeleteBook={removeBook}
      onToggleReadBook={toggleReadBook}
      onSearch={searchBooks}
      onFilterChange={filterBooks}
      onStartEditing={startEditing}
      onFinishEditing={finishEditing}
    />
  );
}

export default App;