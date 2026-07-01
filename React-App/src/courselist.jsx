import Courses from "./Courses";
import html from "./assets/html.png";
import css from "./assets/css.png";
import js from "./assets/javascript.png";

function CourseList() {
  const courses = [
    { name: "HTML", price: "$19.99", rating: 4.5, image: html },
    { name: "CSS", price: "$19.99", rating: 4.3, image: css },
    { name: "JavaScript", price: "$29.99", rating: 4.7, image: js },
  ];

  return (
    <>
      {courses.map((course, index) => (
        <Courses
          key={index}
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