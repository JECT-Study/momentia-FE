import { FC } from 'react';

import Icon from '../Icon/Icon';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const calculateVisiblePages = (
    currentPage: number,
    totalPages: number,
    maxVisiblePages: number,
  ): number[] => {
    const startPage = Math.max(
      1,
      currentPage - Math.floor(maxVisiblePages / 2),
    );
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    const adjustedStartPage = Math.max(1, endPage - maxVisiblePages + 1);

    return Array.from(
      { length: endPage - adjustedStartPage + 1 },
      (_, i) => adjustedStartPage + i,
    );
  };

  const visiblePages = calculateVisiblePages(currentPage, totalPages, 5);

  return (
    <div className='flex items-center justify-center gap-6'>
      <div className='flex gap-1' id='first-previous-buttons'>
        <button
          onClick={() => onPageChange(1)}
          disabled={isFirstPage}
          aria-label='Go to first page'
          className={`p-2 rounded ${
            isFirstPage ? 'text-gray-600 cursor-not-allowed' : 'text-gray-300'
          }`}
        >
          <Icon name='ChevronDoubleLeft' size='s' />
        </button>

        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={isFirstPage}
          aria-label='Go to previous page'
          className={`p-2 rounded ${
            isFirstPage ? 'text-gray-600 cursor-not-allowed' : 'text-gray-300'
          }`}
        >
          <Icon name='ChevronLeft' size='s' />
        </button>
      </div>

      <div className='flex gap-1' id='number-buttons'>
        {visiblePages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            aria-current={page === currentPage ? 'page' : undefined}
            className={`button-s p-3 w-[46px] rounded-full transition-colors ${
              page === currentPage
                ? 'bg-main text-white'
                : 'text-gray-600 hover:bg-gray-900'
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <div className='flex gap-1' id='next-last-buttons'>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={isLastPage}
          aria-label='Go to next page'
          className={`p-2 rounded ${
            isLastPage ? 'text-gray-600 cursor-not-allowed' : 'text-gray-300'
          }`}
        >
          <Icon name='ChevronRight' size='s' />
        </button>

        <button
          onClick={() => onPageChange(totalPages)}
          disabled={isLastPage}
          aria-label='Go to last page'
          className={`p-2 rounded ${
            isLastPage ? 'text-gray-600 cursor-not-allowed' : 'text-gray-300'
          }`}
        >
          <Icon name='ChevronDoubleRight' size='s' />
        </button>
      </div>
    </div>
  );
};

export default Pagination;