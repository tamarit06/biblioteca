from fastapi import FastAPI
from app.routers.books import router as books_router

app = FastAPI(title="Book Library API")

app.include_router(books_router)
@app.get("/")
def root():
    return {"message": "Book Library API"}