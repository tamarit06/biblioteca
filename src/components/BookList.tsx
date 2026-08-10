import type { Book } from '../interfaces/book.ts';
import BookComponent from './BookComponent.tsx';



type Props = {
    books: Book[];
    onDeleteBook: (index: number) => void;
    onToggleReadBook: (index: number) => void;
    onEditBook: (index: number) => void;
}
function BookList({books, onDeleteBook, onToggleReadBook, onEditBook}: Props) {
    return (
        <div className="book-list">
            {books.map((book, index) => (
                <BookComponent key={index} book={book} onDelete={() => onDeleteBook(index)} onToggleRead={() => onToggleReadBook(index)} onEdit={() => onEditBook(index)} />
            
            ))}
        </div>
    )
}
export default BookList;