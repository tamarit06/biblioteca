import type { Book } from "../../interfaces/book"; 
import "./BookComponent.css";
type Props = {
  book: Book;
  onDelete: () => void;
  onToggleRead: () => void;
  onEdit: () => void;
};

function BookComponent({ book, onDelete, onToggleRead, onEdit }: Props) {
  const { title, genre, author, year, image, is_read } = book;
  return (
    <div className="book">
      <img
    src={image}
    alt={`Cover of ${title}`}
    className="book-image"
  />
      <div className="book-info">
        <h2>{title}</h2>
        <p>Genre: {genre}</p>
        <p>Author: {author}</p>
        <p>Year: {year}</p>
        <div className="book-status">
          <p>Status: {is_read ? "Read" : "Not Read"}</p>
          <input type="checkbox" checked={is_read} onChange={onToggleRead} />
        </div>
    
        <div className="book-buttons">
          <button className="button button-primary" onClick={onEdit}>
            Edit
          </button>

          <button className="button button-danger" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default BookComponent;
