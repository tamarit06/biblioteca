from fastapi import APIRouter,Depends
from app.schemas.book import BookCreate
from app.services.book_services import book_services
from app.database import get_db


router = APIRouter(
    prefix="/api/books",
    tags=["Books"]
)


@router.get("/")
def get_books(db=Depends(get_db)):
    return book_services.get_books(db)


@router.get("/{book_id}")
def get_book(book_id: int):
    book = book_services.get_book(book_id)

    if book is None:
        return {"error": "Book not found"}

    return book


@router.post("/")
def create_book(book: BookCreate):
    return book_services.create_book(book)


@router.put("/{book_id}")
def update_book(book_id: int, book: BookCreate):
    updated_book = book_services.update_book(book_id, book)

    if updated_book is None:
        return {"error": "Book not found"}

    return updated_book


@router.delete("/{book_id}")
def delete_book(book_id: int):
    deleted_book = book_services.delete_book(book_id)

    if deleted_book is None:
        return {"error": "Book not found"}

    return deleted_book