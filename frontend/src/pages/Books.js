import React, { useState } from 'react';
import BookItem from './BookItem';
import '../Allstyles/books.css';

const Books = () => {
  const [books] = useState([
    {   //book 1
        title: "The Haunting Hill House",
        author: "Shirley Jackson",   
        rating: "4/5",    
        imageUrl:   '/books/1.jpg'
    },
  
    { //book 2
        title: "Pet Sematary",
        author: "Stephen King",   
        rating: "4.7/5",    
        imageUrl: "/books/2.jpg"
    },
  
    { //book 3
        title: "Frankenstein",
        author: "Mary Shelley",
        rating: "4.2/5",  
        imageUrl:"/books/3.jpg"
    },
  
    { //book 4
        title: "The Shining",
        author: "Stephen King",
        rating: "4.1/5",
        imageUrl: "/books/4.webp"
    },
  
    { //bbok 5
        title: "The Exorcist",
        author: "William Peter Blatty",
        rating: "5/5",
        imageUrl: "/books/5.webp"
    },
  
    { //book 6
      title: "House of leaves",
      author: "Mark Z. Danielewski",
      rating: "5/5",
      imageUrl: "/books/6.jpg"
  },
  
  { //book 7
    title: "Devil house",
    author: "John Darnielle",
    rating: "5/5",
    imageUrl: "/books/7.jpg"
  },
  
  { // book 8
    title: "The Amityville horror",
    author: "Jay Anson",
    rating: "5/5",
    imageUrl: "/books/8.jpg"
  },
  {
    // book 9
    title: "The Troop",
    author: "Craig Davidson",
    rating: "5/5",
    imageUrl: "/books/9.jpg"
  },
  {
    // book 10
    title: "Salem's Lot",
    author: "Stephen King",
    rating: "5/5",
    imageUrl: "/books/10.jpeg"
  },
  {
    // book 11
    title: "Ghost Story",
    author: "Peter Straub",
    rating: "5/5",
    imageUrl: "/books/11.jpg"
  },
  {
    // book 12
    title: "Haunted",
    author: "Chuck Palahniuk",
    rating: "5/5",
    imageUrl: "/books/12.jpg"
  },
  {
    // book 13
    title: "The Changeling",
    author: "Victor LaValle",
    rating: "5/5",
    imageUrl: "/books/13.jpeg"
  },
  {
    // book 14
    title: "Ring",
    author: "Koji Suzuki",
    rating: "5/5",
    imageUrl: "/books/14.jpg"
  },
  {
    // book 15
    title: "Coraline",
    author: "Neil Gaiman",
    rating: "5/5",
    imageUrl: "/books/15.jpg"
  },
  {
    // book 16
    title: "Hell House",
    author: "Richard Matheson",
    rating: "5/5",
    imageUrl: "/books/16.jpg"
  },
  {
    // book 17
    title: "A Head Full of Ghosts",
    author: "Paul Tremblay",
    rating: "5/5",
    imageUrl: "/books/17.jpg"
  },
  {
    // book 18
    title: "Carrie",
    author: "Stephen King",
    rating: "5/5",
    imageUrl: "/books/18.jpg"
  },
  {
    // book 19
    title: "Misery",
    author: "Stephen King",
    rating: "5/5",
    imageUrl: "/books/19.jpg"
  },
  
  {
    // book 20
    title: "Bird Box",
    author: "Josh Malerman",
    rating: "5/5",
    imageUrl: "/books/20.webp"
  }
  
  ]);

  return (
    <div className="container">
      <h1>Book Recommendations</h1>
      <div id="book-list" className="book-grid">
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;