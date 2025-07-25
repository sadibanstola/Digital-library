import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faFlag, faDownload, faPlus } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../Pages/Footer/Footer';
import { useNavigation } from '../../App';

const BookDetails = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const { origin } = useNavigation(); // Remove setOrigin since we won't modify it here
  const location = useLocation();

  // Get origin with fallback
  const currentOrigin = location.state?.origin || origin || '/home';

  const books = [
    {
      id: 3,
      title: 'Harry Potter',
      author: 'J.K. Rowling',
      image: '/harry.png',
      genre: 'Fantasy',
      description:
        "A young wizard's adventures at Hogwarts School of Witchcraft and Wizardry. The series, beginning with 'Harry Potter and the Philosopher's Stone,' was published in 1997 and became a global phenomenon, winning multiple awards including the Hugo Award.",
      rating: 4.8,
    },
    {
      id: 4,
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      image: '/habbit.png',
      genre: 'Fantasy',
      description:
        'Bilbo Baggins embarks on an epic adventure with dwarves and a wizard. It was published in 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction.',
      rating: 4.6,
    },
    {
      id: 10,
      title: 'Red, White & Royal Blue',
      author: 'Casey McQuiston',
      image: '/red.png',
      genre: 'Romance',
      description:
        "A romantic comedy about the First Son of the United States and a British prince. Published in 2019, this novel gained widespread acclaim for its witty dialogue and representation, earning a spot on the New York Times Best Seller list.",
      rating: 4.7,
    },
  ];

  const book = books.find((b) => b.id === Number.parseInt(bookId));

  if (!book) {
    return (
      <div className="bg-gray-100 min-h-screen pt-[130px] text-center" style={{ fontFamily: '"Gothic A1", sans-serif' }}>
        <p className="text-gray-600" style={{ fontFamily: '"Gothic A1", sans-serif', fontSize: '18px' }}>
          Book not found.
        </p>
        <Footer />
      </div>
    );
  }

  return (
    <section>
      <div className="w-full mx-auto pt-[100px] px-4 sm:px-6 lg:px-12" style={{ fontFamily: '"Gothic A1", sans-serif' }}>
        <div className="flex items-center mb-4 mt-6 sm:mt-11">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="text-gray-600 cursor-pointer text-2xl sm:text-3xl mr-4"
            style={{ zIndex: 1000, position: 'relative', pointerEvents: 'auto' }}
            onClick={() => {
              console.log('Back button clicked! Origin:', currentOrigin, 'Location state:', location.state);
              navigate(currentOrigin);
            }}
          />
          <h1 className="text-2xl sm:text-4xl font-medium text-gray-800">Detail page</h1>
        </div>

        <div className="bg-white p-4 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start mb-6">
            <img
              src={book.image || '/placeholder.svg'}
              alt={book.title}
              className="w-45 sm:w-45 h-auto sm:h-60 object-cover rounded mb-4 sm:mb-0 sm:mr-6"
            />
            <div className="w-full sm:w-auto">
              <h2 className="text-2xl sm:text-3xl font-medium mb-2">{book.title}</h2>
              <p className="text-gray-600 text-center py-2 bg-gray-100 rounded-2xl mb-4 w-full sm:w-[200px]">
                by {book.author}
              </p>
              <button
                onClick={() => {
                  navigate(`/read/${book.id}`, { state: { origin: currentOrigin } });
                }}
                className="bg-[#CB602B] text-white px-6 sm:px-11 py-2 rounded mb-2 mt-4 sm:mt-20 w-full sm:w-auto"
              >
                Read
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-7 border border-[#DE8443] p-4 mb-6 w-full sm:w-[500px] h-auto sm:h-[100px] items-center justify-between">
            <button className="flex flex-col items-center text-[black] hover:text-gray-800 transition-colors mb-2 sm:mb-0">
              <FontAwesomeIcon icon={faFlag} className="text-lg mb-1" />
              <span className="text-sm sm:text-xl font-light">Report</span>
            </button>
            <button className="flex flex-col items-center text-[black] hover:text-gray-800 transition-colors mb-2 sm:mb-0">
              <FontAwesomeIcon icon={faDownload} className="text-lg mb-1" />
              <span className="text-sm sm:text-xl font-light">Download with AD</span>
            </button>
            <button className="flex flex-col items-center text-[black] hover:text-gray-800 transition-colors">
              <FontAwesomeIcon icon={faPlus} className="text-lg mb-1" />
              <span className="text-sm sm:text-xl font-light">Request new book</span>
            </button>
          </div>

          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-medium mb-2">About this book</h3>
            <p className="text-gray-700 text-base sm:text-xl w-full sm:w-[800px]">{book.description}</p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-medium mb-2">Ratings & Reviews</h3>
            <div className="flex items-center">
              <span className="text-[#DFB300] text-lg sm:text-xl">
                {'★'.repeat(Math.floor(book.rating)) + '☆'.repeat(5 - Math.floor(book.rating))}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default BookDetails;