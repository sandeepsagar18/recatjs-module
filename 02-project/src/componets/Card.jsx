import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <h2>{props.user},{props.age}</h2>
        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>

        <button>View Profile</button>
      </div>
    </div>
  );
};

export default Card;
