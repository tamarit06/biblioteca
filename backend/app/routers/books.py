from fastapi import APIRouter, Depends, HTTPException
from app.schemas.book import BookCreate, BookResponse
from app.services.book_services import book_services
from app.database import get_db


router = APIRouter(
    prefix="/api/books",
    tags=["Books"]
)


@router.get("/", response_model=list[BookResponse])
def get_books(db=Depends(get_db)):
    return book_services.get_books(db)


@router.get("/{book_id}",response_model=BookResponse)
def get_book(book_id: int,db=Depends(get_db)):
    book = book_services.get_book(book_id,db)

    if book is None:
        raise HTTPException(
            status_code=404,
            detail="Book not found"
        )

    return book


@router.post("/", status_code=201,response_model=BookResponse)
def create_book(book: BookCreate,db=Depends(get_db)):
    return book_services.create_book(book,db)


@router.put("/{book_id}",response_model=BookResponse)
def update_book(book_id: int, book: BookCreate,db=Depends(get_db)):
    updated_book = book_services.update_book(book_id, book,db)

    if updated_book is None:
        raise HTTPException(
            status_code=404,
            detail="Book not found"
        )

    return updated_book


@router.delete("/{book_id}",response_model=BookResponse)
def delete_book(book_id: int,db=Depends(get_db)):
    deleted_book = book_services.delete_book(book_id,db)
    
    if deleted_book is None:
        raise HTTPException(
            status_code=404,
            detail="Book not found"
        )

    return deleted_book