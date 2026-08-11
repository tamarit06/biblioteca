import { useState ,useEffect} from "react";
import type { Book } from "../interfaces/book.ts"
import "./BookForm.css";

type Props = {
    onAddBook: (book: Book) => void;
    onEditBook: (index: number, updatedBook: Book) => void;
    editingIndex: number | null;
    editingBook:Book | null;
    onFinishEditing: () => void;
};

function BookForm({ onAddBook, onEditBook, editingIndex ,editingBook, onFinishEditing}: Props) {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState(0);
  const [image, setImage] = useState("");

useEffect(() => {
  if (editingBook) {
    setTitle(editingBook.title);
    setGenre(editingBook.genre);
    setAuthor(editingBook.author);
    setYear(editingBook.year);
    setImage(editingBook.image);
  }
}, [editingBook]);

  const agregarBook = () => {
    const nuevoLibro: Book = {
      title,
      genre,
      author,
      year,
      image,
      isRead: false,
    };

    onAddBook(nuevoLibro);

    setTitle("");
    setGenre("");
    setAuthor("");
    setYear(0);
    setImage("");
  };
const editarBook = (index: number) => {
  const updatedBook: Book = {
    title,
    genre,
    author,
    year,
    image,
    isRead: editingBook?.isRead ?? false,
  };

  onEditBook(index, updatedBook);
  onFinishEditing();
};
  return (
    <div className="book-form">
      <input
        className="book-input"
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="book-input"
        type="text"
        placeholder="Género"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />

      <input
        className="book-input"
        type="text"
        placeholder="Autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <input
        className="book-input"
        type="number"
        placeholder="Año"
        value={year}
        onChange={(e) => setYear(Number(e.target.value))}
      />

      <input
        className="book-input"
        type="text"
        placeholder="Imagen"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      {editingIndex === null ? (
  <button className="button-primary" onClick={agregarBook}>
    Agregar Libro
  </button>
) : (
  <>
    <button className="button-secondary" onClick={() => editarBook(editingIndex)}>
    Guardar cambios
  </button>
  <button className="button-danger" onClick={onFinishEditing}>
    Cancel

  </button>
  </>

   
)}
    </div>
  );
}

export default BookForm;