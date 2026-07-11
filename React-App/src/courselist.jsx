import Courses from "./Courses";
import { useState, useEffect } from "react";

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
     fetch("http://localhost:3000/courses")
      .then((response) =>{ return response.json(); })
      .catch((error) => console.log(error))
      .then((data) => {
        setCourses(data);
        setFilteredCourses(data);
      })
  }, []);


  function deleteCourse(id) {
    const updatedCourses = courses.filter((course) => course.id !== id);
    setCourses(updatedCourses);
    setFilteredCourses(updatedCourses);
  }
  return (
    <>
      {filteredCourses.map((course, index) => (
        <Courses
         key={course.id}
          show={true}
          name={course.name}
          price={course.price}
          rating={course.rating}
          image={course.image}
        />
      ))}
    </>
  );
}

export default CourseList;