from pydantic import BaseModel,ConfigDict,Field


class BookCreate(BaseModel):
    title: str = Field(min_length=1, max_length=200)
    author: str = Field(min_length=1, max_length=200)
    genre: str = Field(min_length=1, max_length=100)
    year: int
    is_read: bool
    image:str
    
class BookResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    title: str
    author: str
    genre: str
    year: int
    is_read: bool
    image:str