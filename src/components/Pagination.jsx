const Pagination = ({ onPrev, onNext, totalPages, currentPage }) => {
  return (
    <div className="flex gap-4 justify-center items-center my-4">
      <button
        className="bg-blue-500 px-3 py-1 text-white rounded"
        disabled={currentPage === 1}
        onClick={onPrev}
      >
        Prev
      </button>
      <span className="text-gray-500">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="bg-blue-500 px-3 py-1 text-white rounded"
        disabled={currentPage === totalPages}
        onClick={onNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
