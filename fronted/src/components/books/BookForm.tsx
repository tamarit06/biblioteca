import { useState } from "react";
import type { Book, BookCreate } from "../../interfaces/book";
import "./BookForm.css";

type Props = {
  onAddBook: (book: BookCreate) => void;
  onEditBook: (id: number, updatedBook: BookCreate) => void;
  editingId: number | null;
  editingBook: Book | null;
  onFinishEditing: () => void;
};

function BookForm({
  onAddBook,
  onEditBook,
  editingId,
  editingBook,
  onFinishEditing,
}: Props) {
  const initialFormData: BookCreate = editingBook
    ? {
        title: editingBook.title,
        genre: editingBook.genre,
        author: editingBook.author,
        year: editingBook.year,
        image: editingBook.image,
        is_read: editingBook.is_read,
      }
    : {
        title: "",
        genre: "",
        author: "",
        year: 0,
        image: "",
        is_read: false,
      };
  const [formData, setFormData] = useState<BookCreate>(initialFormData);

  const agregarBook = () => {
    if (formData.title.trim() === "" || formData.author.trim() === "") {
      alert("Por favor, complete tan solo el titulo y el autor del libro.");
      return;
    }

    onAddBook(formData);
    setFormData({
      title: "",
      genre: "",
      author: "",
      year: 0,
      image: "",
      is_read: false,
    });
  };
  const editarBook = (id: number) => {
    if (!editingBook) {
      return;
    }

    onEditBook(id, formData);
    onFinishEditing();
  };
 return (
  <div className="book-form">

    <div className="form-fields">

      <input
        className="book-input"
        type="text"
        placeholder="Título"
        value={formData.title}
        onChange={(e) =>
          setFormData({
            ...formData,
            title: e.target.value,
          })
        }
      />

      <input
        className="book-input"
        type="text"
        placeholder="Género"
        value={formData.genre}
        onChange={(e) =>
          setFormData({
            ...formData,
            genre: e.target.value,
          })
        }
      />

      <input
        className="book-input"
        type="text"
        placeholder="Autor"
        value={formData.author}
        onChange={(e) =>
          setFormData({
            ...formData,
            author: e.target.value,
          })
        }
      />

      <input
        className="book-input"
        type="number"
        placeholder="Año"
        value={formData.year}
        onChange={(e) =>
          setFormData({
            ...formData,
            year: Number(e.target.value),
          })
        }
      />

      <input
        className="book-input"
        type="text"
        placeholder="Imagen"
        value={formData.image}
        onChange={(e) =>
          setFormData({
            ...formData,
            image: e.target.value,
          })
        }
      />

    </div>

    <div className="form-actions">

      {editingId === null ? (
        <button className="button-save" onClick={agregarBook}>
          Guardar
        </button>
      ) : (
        <button
          className="button-save"
          onClick={() => editarBook(editingId)}
        >
          Guardar cambios
        </button>
      )}

      <button
        className="button-cancel"
        onClick={onFinishEditing}
      >
        Cancelar
      </button>

    </div>

  </div>
);
}

export default BookForm;
