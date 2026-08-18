from pydantic import BaseModel


class BookCreate(BaseModel):
    title: str
    author: str
    genre: str
    year: int
    is_read: bool