import Courses from "./Courses";
import usefetch from "./usefetch";

function CourseList() {
  const [courses, filteredCourses, error] = usefetch("http://localhost:3000/courses");

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
        filteredCourses?.map((course) => (
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