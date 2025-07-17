import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../features/favorite/favoriteSlice";
import { useCallback, memo } from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const favorites = useSelector((state) => state.favorites.items);
  const dispatch = useDispatch();
  const isFavorite = favorites.includes(course.id);

  const toggleFavorite = useCallback(() => {
    if (isFavorite) {
      dispatch(remove(course.id));
    } else {
      dispatch(add(course.id));
    }
  }, [dispatch, isFavorite, course.id]);

  return (
    <div className="border p-2 rounded-md hover:shadow-lg">
      <img
        src={course.thumbnail}
        alt={course.title}
        className="h-[250px] object-fill w-full"
      />
      <div>
        <h3 className="text-lg font-medium truncate">{course.title}</h3>
        <p>Price: ${course.price.toFixed(0)}</p>

        <div className="flex gap-2 mt-4">
          <Link
            to={`/course/${course.id}`}
            className="rounded bg-blue-500 text-white p-2 w-full"
          >
            View
          </Link>
          <button
            onClick={toggleFavorite}
            className={`p-2 rounded w-full text-white ${
              isFavorite ? "bg-red-500" : "bg-green-500"
            }`}
          >
            {isFavorite ? "Remove" : "Add to favorite"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(CourseCard);
