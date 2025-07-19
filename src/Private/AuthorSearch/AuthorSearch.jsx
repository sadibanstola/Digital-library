import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import BookCard from '../../Components/BookCard';
import Footer from '../../Pages/Footer/Footer';
import { FavoritesContext } from '../../context/FavoritesContext';

const AuthorSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { favorites } = useContext(FavoritesContext);

  // Sample book data 
  const books = [
    { id: 3, title: 'Harry Potter', author: 'J.K. Rowling', image: '/harry.png' },
    { id: 1, title: 'Me Before You', author: 'Jojo Moyes', image: '/me.png' },
    { id: 4, title: 'The Hobbit', author: 'J.R.R. Tolkien', image: '/habbit.png' }, 
    { id: 10, title: 'Red, White & Royal Blue', author: 'Casey McQuiston', image: '/red.png' }, 
    { id: 5, title: 'The Unveiling', author: 'Tamara Leigh', image: '/unveiling.png' }, 
    { id: 6, title: 'The Hating Game', author: 'Sally Thorne', image: '/hate.png' },
    { id: 7, title: 'Hidden City', author: 'MS Lawson', image: '/Hidden.png' }, 
    { id: 8, title: 'It Ends With Us', author: 'Colleen Hoover', image: '/end.png' },
    { id: 9, title: 'The Name of the Wind', author: 'Patrick Rothfuss', image: '/wind.png' },
    { id: 2, title: 'We Are Voulhire', author: 'Matthew Tysz', image: '/voulhire.png' }, 
    { id: 11, title: 'A Convenient Risk', author: 'Sara R Turnquist', image: '/risk.png' }, 
    { id: 12, title: 'A Voyage to Arcturus', author: 'David Lindsay', image: '/vogage.png' },
  ];

  // Filter books based on search term
  const filteredBooks = books.filter(book =>
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white pt-[130px]" style={{ fontFamily: '"Gothic A1", sans-serif' }}>
      <div className="flex-1 max-w-7xl mx-auto px-4">
        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Search by author"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-12 pl-12 pr-3 rounded-[10px] border border-[#CB602B] focus:outline-none"
              style={{
                fontFamily: '"Gothic A1", sans-serif',
                fontSize: '16px',
                border: '0.8px solid #CB602B',
              }}
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
          </div>
        </div>

        {/* Book Cards */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mb-5">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 py-10">
            No books found for this author.
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AuthorSearch;