import PropTypes from "prop-types";

function Courses(props) {
  let purschased = false;
   function buyCourse(discount) {
     console.log(props.name , "Course purchased!",discount,"% off");
     purschased = true;
   }
  return (
     props.name && (
      <div className="card">
        <img src={props.image} alt="Course" />
        <h2>{props.name}</h2>
        <p>{props.price}</p>
        <span>{props.rating}</span>
        <button onClick={(event) => { buyCourse(10); console.log(event); }}>Explore Courses</button>
        <p> {purschased ? "already Purchased!" : "get it now!"}</p>
    </div>
   ) );
}

Courses.propTypes = {
  show: PropTypes.bool,
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
};

export default Courses 