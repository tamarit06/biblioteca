import LibraryPage from "./components/layout/LibraryPage";
import { useBooks } from "./hooks/useBooks";



function App() {
  const {
    books,
    editingId,
    editingBook,
    bookError,
    isLoading,
    isAdding,
    addBook,
    editBook,
    removeBook,
    toggleReadBook,
    searchBooks,
    filterBooks,
    startEditing,
    finishEditing,
    startAdding,
    finishAdding
  } = useBooks();

  return (
    <LibraryPage
      books={books}
    isAdding={isAdding}
      editingId={editingId}
      editingBook={editingBook}
        bookError={bookError}
        isLoading={isLoading}
      onAddBook={addBook}
      onEditBook={editBook}
      onDeleteBook={removeBook}
      onToggleReadBook={toggleReadBook}
      onSearch={searchBooks}
      onFilterChange={filterBooks}
      onStartEditing={startEditing}
      onFinishEditing={finishEditing}
      onFinishAdding={finishAdding}
      onStartAdding={startAdding}
    />
  );
}

export default App;