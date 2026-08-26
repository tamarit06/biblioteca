import { useState ,useEffect} from "react";
import type { Book,BookCreate } from "../interfaces/book.ts"
import "./BookForm.css";

type Props = {
    onAddBook: (book: BookCreate) => void;
    onEditBook: (index: number, updatedBook: Book) => void;
    editingId:number | null;
    editingBook:Book | null;
    onFinishEditing: () => void;
};

function BookForm({ onAddBook, onEditBook, editingId ,editingBook, onFinishEditing}: Props) {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState<number>(0);
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
    if(title.trim() === "" || author.trim() === "" ) {
      alert("Por favor, complete tan solo el titulo y el autor del libro.");
      return;
    }
    const nuevoLibro: BookCreate= {
      title,
      genre,
      author,
      year,
      image,
      is_read: false,
    };

    onAddBook(nuevoLibro);

    setTitle("");
    setGenre("");
    setAuthor("");
    setYear(0);
    setImage("");
  };
const editarBook = (index: number) => {
   if (!editingBook || year === undefined) {
    return;
  }
  const updatedBook: Book = {
    id: editingBook.id,
    title,
    genre,
    author,
    year,
    image,
    is_read: editingBook?.is_read ?? false,
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
        value={year?? ""}
        onChange={(e) => setYear(Number(e.target.value))}
      />

      <input
        className="book-input"
        type="text"
        placeholder="Imagen"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      {editingId === null ? (
  <button className="button-primary" onClick={agregarBook}>
    Agregar Libro
  </button>
) : (
  <>
    <button className="button-secondary" onClick={() => editarBook(editingId)}>
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