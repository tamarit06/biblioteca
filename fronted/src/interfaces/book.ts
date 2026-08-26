export interface BookCreate {
    title: string;
    genre: string;
    author: string;
    year: number;
    image: string;
    is_read: boolean;
}

export interface Book {
    id: number;
    title: string;
    genre: string;
    author: string;
    year: number;
    image: string;
    is_read: boolean;
}