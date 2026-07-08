import PropTypes from "prop-types";
import { useState } from "react";

function Courses(props) {
  const [purchased, setPurchased] = useState(false);
  const [discount, setDiscount] = useState(props.price);
  function buyCourse(amt) {
    console.log(props.name , "Course purchased!",discount,"% off");
    setPurchased(true);
    setDiscount(discount-amt);
   }
  return (
     props.name && (
      <div className="card">
        <img src={props.image} alt="Course" />
        <h2>{props.name}</h2>
        <p>{discount}</p>
        <span>{props.rating}</span>
        <button onClick={() => setPurchased(false)}>Delete</button>
        <button onClick={(event) => { buyCourse(10); }}>Explore Courses</button>
        <p> {purchased ? "already Purchased!" : "get it now!"}</p>
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