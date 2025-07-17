import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setCourse(data);
      } catch (error) {
        console.error("Failed to fetch course:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!course)
    return <div className="text-center mt-10">Course not found.</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="rounded bg-gray-400 p-2 mb-4"
      >
        Go Back
      </button>
      <div className="px-4 py-6 border rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">{course.title}</h2>
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full max-h-[400px] object-contain mb-4 rounded"
        />
        <p className="text-lg text-justify mb-2">{course.description}</p>
        <p className="font-medium text-xl mb-2">Price: ${course.price}</p>
        <p className="text-sm text-gray-500">Brand: {course.brand}</p>
        <p className="text-sm text-gray-500">Category: {course.category}</p>
      </div>
    </div>
  );
};

export default CourseDetails;
