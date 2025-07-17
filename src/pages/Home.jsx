import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../features/course/courseSlice";
import CourseCard from "../components/CourseCard";
import Pagination from "../components/Pagination";

const Home = () => {
  const { data, loading, error } = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const coursePerPage = 6;

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const totalPages = Math.ceil(data.length / coursePerPage);
  const startIndex = (currentPage - 1) * coursePerPage;
  const currentItems = data.slice(startIndex, startIndex + coursePerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Courses</h1>
      {loading && <p className="my-2">Loading...</p>}
      {error && <p className="text-red-500 my-2">{error}</p>}

      

      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentItems.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};

export default Home;
