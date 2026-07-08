import Courses from "./Courses";
import html from "./assets/html.png";
import css from "./assets/css.png";
import js from "./assets/javascript.png";
 import { useState , useEffect} from "react";
function CourseList() {
  const [courses, setCourses] = useState([
    { id :1,name: "HTML", price: 19.99, rating: 4.5, image: html },
    { id :2,name: "CSS", price: 19.99, rating: 4.3, image: css },
    { id :3,name: "JavaScript", price: 29.99, rating: 4.7, image: js },
  ]);
  const [filteredCourses, setFilteredCourses] = useState(courses);

  useEffect(() => {
     fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) =>{ return response.json(); })
      
      .then((data => console.log(data)))
  }, []);


  function deleteCourse(id) {
    const updatedCourses = courses.filter((course) => course.id !== id);
    setCourses(updatedCourses);
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