import React from 'react';

const StudentCard = (props) => {
    console.log(props);
    return (
        <div className="card  bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">{props.course_name}</h2>
          <p>{props.details}</p>
          <p>Price: {props.price} $</p>
          <div className="card-actions justify-end">
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default StudentCard;