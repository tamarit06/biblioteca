import type { Book } from "../../interfaces/book.ts"; 
import BookComponent from "./BookComponent.tsx";

type Props = {
  books: Book[];
  onDeleteBook: (index: number) => void;
  onToggleReadBook: (index: number) => void;
  onEditBook: (index: number) => void;
};
function BookList({
  books,
  onDeleteBook,
  onToggleReadBook,
  onEditBook,
}: Props) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookComponent
          key={book.id}
          book={book}
          onDelete={() => onDeleteBook(Number(book.id))}
          onToggleRead={() => onToggleReadBook(Number(book.id))}
          onEdit={() => onEditBook(Number(book.id)  )}
        />
      ))}
    </div>
  );
}
export default BookList;
