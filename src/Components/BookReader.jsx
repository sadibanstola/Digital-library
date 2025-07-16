import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import HobbitPages from "../Private/ReadingContent/HobbitPages";
import HarryPages from "../Private/ReadingContent/HarryPages";
import RedWhitePages from "../Private/ReadingContent/RedWhitePages";
import { useState, useEffect } from "react";

const BookReader = () => {
  const { bookId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [pageIndex, setPageIndex] = useState(0);

  const bookPages = {
    3: HarryPages, // Ensure HarryPotterPages is an array of functions
    4: HobbitPages,
    10: RedWhitePages,
  };

  const pages = bookPages[bookId];

  // Initialize pageIndex from URL query parameter
  useEffect(() => {
    const page = parseInt(searchParams.get("page")) || 0;
    setPageIndex(page);
  }, [searchParams]);

  // Update URL when pageIndex changes
  useEffect(() => {
    setSearchParams({ page: pageIndex });
  }, [pageIndex, setSearchParams]);

  // Navigation functions
  const goToNextPage = () => {
    if (pageIndex < pages.length - 1) {
      setPageIndex(pageIndex + 1);
    }
  };

  const goToPreviousPage = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    }
  };

  // Exit function to navigate back to book details
  const exit = () => {
    navigate(`/book/${bookId}`);
  };

  // Error handling
  if (!bookPages[bookId]) {
    return (
      <div className="pt-32 text-center text-black text-xl bg-white">
        Book ID {bookId} not found.
      </div>
    );
  }

  if (!Array.isArray(pages) || pages.length === 0) {
    return (
      <div className="pt-32 text-center text-black text-xl bg-white">
        No reading content found for book ID {bookId}.
      </div>
    );
  }

  if (!pages[pageIndex]) {
    return (
      <div className="pt-32 text-center text-black text-xl bg-white">
        Page {pageIndex + 1} not found for book ID {bookId}.
      </div>
    );
  }

  // Render the current page, passing navigation functions
  return (
    <div className="min-h-screen relative bg-gray-100">
      {pages[pageIndex](goToPreviousPage, goToNextPage, setPageIndex, exit)}
    </div>
  );
};

export default BookReader;