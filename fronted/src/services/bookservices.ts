import type { Book,BookCreate } from "../interfaces/book";

const API_URL = `${import.meta.env.VITE_API_URL}/api/books`;

export async function getBooks(): Promise<Book[]> {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Error al obtener los libros");
    }

    return response.json();
}
export async function getBook(bookId: number): Promise<Book> {
    const response = await fetch(`${API_URL}/${bookId}`);

    if (!response.ok) {
        throw new Error("Error al obtener el libro");
    }

    return response.json();
}
export async function createBook(
    book:BookCreate
): Promise<Book> {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
    });

    if (!response.ok) {
        throw new Error("Error al crear el libro");
    }

    return response.json();
}
export async function updateBook(
    bookId: number,
    book: BookCreate
): Promise<Book> {
    const response = await fetch(`${API_URL}/${bookId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
    });

    if (!response.ok) {
        throw new Error("Error al actualizar el libro");
    }

    return response.json();
}
export async function deleteBook(bookId: number): Promise<Book> {
    const response = await fetch(`${API_URL}/${bookId}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error("Error al eliminar el libro");
    }

    return response.json();
}