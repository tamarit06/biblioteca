from app.schemas.book import BookCreate
from app.models.book import Book


class BookService:

    def __init__(self):
        self.books = []

    def get_books(self,db):
        return db.query(Book).all()

    def get_book(self, book_id: int,db):
       return db.query(Book).filter(Book.id == book_id).first()

      

    def create_book(self, book: BookCreate,db):
        new_book=Book(**book.model_dump())
        db.add(new_book)
        db.commit()
        db.refresh(new_book)

        return new_book

    def update_book(self, book_id: int, book: BookCreate,db):
        existing_book=db.query(Book).filter(Book.id==book_id).first()
        if existing_book is None:
            return None

        data = book.model_dump()

        existing_book.title = data["title"]
        existing_book.author = data["author"]
        existing_book.genre = data["genre"]
        existing_book.is_read = data["is_read"]
        existing_book.year=data["year"]
        existing_book.image=data["image"]

        db.commit()
        db.refresh(existing_book)

        return existing_book
       

    def delete_book(self, book_id: int,db):
        book=db.query(Book).filter(Book.id==book_id).first()
        if book is None:
            return None
        db.delete(book)
        db.commit()
        return book
         
       


book_services = BookService()