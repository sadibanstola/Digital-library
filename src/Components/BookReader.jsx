import { useParams, useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import HobbitPages from '../Private/ReadingContent/HobbitPages';
import HarryPages from '../Private/ReadingContent/HarryPages';
import RedWhitePages from '../Private/ReadingContent/RedWhitePages';
import { useState, useEffect } from 'react';
import { useNavigation } from '../App';

const BookReader = () => {
  const { bookId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { origin } = useNavigation(); // Remove setOrigin since we won't modify it here
  const [pageIndex, setPageIndex] = useState(0);

  const bookPages = {
    3: HarryPages,
    4: HobbitPages,
    10: RedWhitePages,
  };

  const pages = bookPages[bookId];

  useEffect(() => {
    const page = parseInt(searchParams.get('page')) || 0;
    setPageIndex(page);
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({ page: pageIndex }, { replace: true });
  }, [pageIndex, setSearchParams]);

  const goToNextPage = () => {
    if (pageIndex < pages.length - 1) {
      setPageIndex(pageIndex + 1);
    }
  };

  const goToPreviousPage = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    } else {
      exit();
    }
  };

  const exit = () => {
    const returnOrigin = location.state?.origin || origin || '/home';
    console.log('Exiting BookReader, returnOrigin:', returnOrigin); // Debug log
    navigate(`/book/${bookId}`, { state: { origin: returnOrigin } });
  };

  if (!bookPages[bookId] || !Array.isArray(pages) || pages.length === 0 || !pages[pageIndex]) {
    return (
      <div className="pt-32 text-center text-black text-xl bg-white">
        {bookPages[bookId] ? `Page ${pageIndex + 1} not found for book ID ${bookId}.` : `Book ID ${bookId} not found.`}
      </div>
    );
  }

  return (
    <div className="min-h-screen relative bg-gray-100">
      {pages[pageIndex](goToPreviousPage, goToNextPage, setPageIndex, exit)}
    </div>
  );
};

export default BookReader;