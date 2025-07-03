import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../Pages/Footer/Footer';

const BookDetails = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  // Consolidated book data with descriptions and ratings
  const books = [
    { id: 3, title: 'Harry Potter', author: 'J.K. Rowling', image: '/harry.png', genre: 'Fantasy', description: 'A young wizard’s adventures at Hogwarts School of Witchcraft and Wizardry. The series, beginning with \'Harry Potter and the Philosopher\'s Stone,\' was published in 1997 and became a global phenomenon, winning multiple awards including the Hugo Award.', rating: 4.8 },
    { id: 4, title: 'The Hobbit', author: 'J.R.R. Tolkien', image: '/habbit.png', genre: 'Fantasy', description: 'Bilbo Baggins embarks on an epic adventure with dwarves and a wizard. It was published in 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction.', rating: 4.6 },
    { id: 10, title: 'Red, White & Royal Blue', author: 'Casey McQuiston', image: '/red.png', genre: 'Romance', description: 'A romantic comedy about the First Son of the United States and a British prince. Published in 2019, this novel gained widespread acclaim for its witty dialogue and representation, earning a spot on the New York Times Best Seller list.', rating: 4.7 },
  ];

  const book = books.find((b) => b.id === parseInt(bookId));

  if (!book) {
    return (
      <div className="bg-gray-100 min-h-screen pt-[130px] text-center">
        <p className="text-gray-600" style={{ fontFamily: '"Gothic A1", sans-serif', fontSize: '18px' }}>
          Book not found.
        </p>
        <Footer />
      </div>
    );
  }

  return (
    <div className="w-full mx-auto pt-[100px] p-12 ">

      <div className="flex items-center mb-4 mt-11 ">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="text-gray-600 cursor-pointer text-3xl mr-4"
          onClick={() => navigate(-1)}
        />
        <h1 className="text-3xl font-normal text-gray-800 ">Detail page</h1>
      </div>

      <div className="bg-white p-8">
        <div className="flex items-start mb-6">
          <img
            src={book.image}
            alt={book.title}
            className="w-45 h-60 object-cover rounded mr-6"
          />
          <div>
            <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
            <p className="text-gray-600 text-center py-2 bg-gray-100 rounded-2xl mb-4 w-[200px]">by {book.author}</p>
            <button className="bg-[#CB602B] text-white px-11 py-2 rounded mb-2 mt-20 ">Read</button>
          </div>
        </div>

        <div className="flex space-x-6 border border-[#CB602B] p-2 mb-6 w-[400px] h-[100px]">
          <button className="text-gray-600 underline">Report</button>
          <button className="text-gray-600 underline">Download with AD</button>
          <button className="text-gray-600 underline">Request new book</button>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">About this book</h3>
          <p className="text-gray-700 text-sm w-[800px] ">
            {book.description}
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Ratings & Reviews</h3>
          <div className="flex items-center">
            <span className="text-yellow-500">
              {'★'.repeat(Math.floor(book.rating)) + '☆'.repeat(5 - Math.floor(book.rating))}
            </span>
            <span className="text-gray-600 ml-2 text-sm">{book.rating} Reviews</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookDetails;