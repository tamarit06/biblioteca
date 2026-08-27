import { useEffect, useState } from "react";
import type { Book, BookCreate } from "../interfaces/book";
import {
  getBooks,
  createBook,
  deleteBook,
  updateBook,
} from "../services/bookservices";


export function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [bookError, setBookError] = useState<string | null>(null);
  const[isLoading,setIsLoading]=useState(true);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    getBooks()
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => {
        console.error(error);
        setBookError("No se pudieron cargar los libros")
        
      })
      .finally(()=>{setIsLoading(false)})
      
  }, []);

 

const filteredBooks = books.filter((book) => {
    const matchSearch = book.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchFilter =
      filter === "all" ||
      (filter === "read" && book.is_read) ||
      (filter === "unread" && !book.is_read);

    return matchSearch && matchFilter;
  });

 const removeBook = async (id: number) => {
  try {
    await deleteBook(id);

    setBooks((currentBooks) =>
  currentBooks.filter((book) => book.id !== id)
);
  } catch (error) {
    console.error(error);
    setBookError("No se pudo eliminar el libro");
  }
};



const addBook = async (newBook: BookCreate) => {
  try {
    console.log("Libro enviado al backend:", newBook);

    const createdBook = await createBook(newBook);

    setBooks((currentBooks) => [...currentBooks, createdBook]);
    setIsAdding(false);

  } catch (error) {
    console.error(error);
  }
};

const editBook = async (id: number, updatedBook: BookCreate) => {
  try {
   const updated = await updateBook(id, updatedBook);

  setBooks((currentBooks) =>
  currentBooks.map((book) =>
    book.id === id ? updated : book
  )
);
  } catch (error) {
    console.error(error);
    setBookError("No se pudo editar el libro")
  }
};

const toggleReadBook = async (id: number) => {
  const book = books.find((book) => book.id === id);

  if (!book) {
    return;
  }

  await editBook(id, {
    ...book,
    is_read: !book.is_read,
  });
};

  const searchBooks = (searchTerm: string) => {
    setSearch(searchTerm);
  };

  const filterBooks = (filterTerm: string) => {
    setFilter(filterTerm);
  };

 
  const startEditing = (id: number) => {
    setEditingId(id);
  };

  const finishEditing = () => {
    setEditingId(null);
  };
  const startAdding = () => {
  setIsAdding(true);
};

const finishAdding = () => {
  setIsAdding(false);
};

  const editingBook =
    editingId !== null
      ? books.find((book) => book.id === editingId) ?? null
      : null;

   return {
    books: filteredBooks,
    editingId,
    editingBook,
    isAdding,

    bookError,
    isLoading,

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
  };
}
