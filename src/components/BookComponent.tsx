import type { Book } from "../interfaces/book.ts"
type Props = {
    book:Book,
    onDelete: () => void,
    onToggleRead: () => void,
    onEdit: () => void}

function BookComponent({book, onDelete, onToggleRead, onEdit}: Props) {
    const {title, genre, author, year, image, isRead} = book;
  return (
    <div className="book">
        <img src={image} alt={title} />
        <div className="book-info">
            <h2>{title}</h2>
            <p>Genre: {genre}</p>
            <p>Author: {author}</p>
            <p>Year: {year}</p>
            <p>Status: {isRead ? "Read" : "Not Read"}</p>
            <input type="checkbox" checked={isRead} onChange={onToggleRead} />
            <button onClick={onEdit}>Edit</button>
            <button onClick={onDelete}>Delete</button>

        </div>
    </div>)

}
export default BookComponent;