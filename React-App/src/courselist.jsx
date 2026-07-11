import Courses from "./Courses";
import { useState, useEffect } from "react";

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/courses")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`API error: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setCourses(data);
        setFilteredCourses(data);
        setError(null);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message || "Failed to load courses.");
      });
  }, []);

  function deleteCourse(id) {
    const updatedCourses = courses.filter((course) => course.id !== id);
    setCourses(updatedCourses);
    setFilteredCourses(updatedCourses);
  }
  return (
    <>
      {error ? (
        <div className="error-message">Error: {error}</div>
      ) : (
        filteredCourses.map((course) => (
          <Courses
            key={course.id}
            show={true}
            name={course.name}
            price={course.price}
            rating={course.rating}
            image={course.image}
          />
        ))
      )}
    </>
  );
}

export default CourseList;