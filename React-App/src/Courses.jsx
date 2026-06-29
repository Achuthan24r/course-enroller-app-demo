
function Courses(props) {
return (
    <div className="card"> 
      <img src={props.image} alt="Course Image" />
      <h2>{props.name}</h2>
      <p>{props.price}</p>
      <span>{props.rating}</span>
        <button>Explore Courses</button>
    </div>
  );

}
export default Courses