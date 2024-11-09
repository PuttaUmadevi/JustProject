import React from 'react';

const BookItem = ({ book }) => {
  return (
    <div className="book-item">
      <img src={book.imageUrl} alt={book.title} />
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p className="rating">Rating: {book.rating}</p>
    </div>
  );
};

export default BookItem;