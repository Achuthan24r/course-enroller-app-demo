import PropTypes from "prop-types";

function Courses(props) {
  if (!props.show) {
    return <div>Course not found</div>;
  }

  return (
    <div className="card">
      <img src={props.image} alt="Course" />
      <h2>{props.name}</h2>
      <p>{props.price}</p>
      <span>{props.rating}</span>
      <button>Explore Courses</button>
    </div>
  );
}

Courses.propTypes = {
  show: PropTypes.bool,
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  rating: PropTypes.number,
};

export default Courses;