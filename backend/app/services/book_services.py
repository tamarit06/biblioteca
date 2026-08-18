from app.schemas.book import BookCreate
from app.models.book import Book


class BookService:

    def __init__(self):
        self.books = []

    def get_books(self,db):
        return db.query(Book).all()

    def get_book(self, book_id: int):
        for book in self.books:
            if book["id"] == book_id:
                return book

        return None

    def create_book(self, book: BookCreate):
        new_book = {
            "id": len(self.books) + 1,
            **book.model_dump()
        }

        self.books.append(new_book)

        return new_book

    def update_book(self, book_id: int, book: BookCreate):
        for index, existing_book in enumerate(self.books):
            if existing_book["id"] == book_id:
                updated_book = {
                    "id": book_id,
                    **book.model_dump()
                }

                self.books[index] = updated_book

                return updated_book

        return None

    def delete_book(self, book_id: int):
        for index, book in enumerate(self.books):
            if book["id"] == book_id:
                return self.books.pop(index)

        return None


book_services = BookService()