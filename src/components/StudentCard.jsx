import React from 'react';
import { Link } from 'react-router-dom';

const StudentCard = (props) => {
    return (
        <Link to={"/studentditels"+props.course_id+"/"+props.course_name}>
        <div className="card  bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">{props.course_name}</h2>
          <p>{props.details}</p>
          <p>Price: {props.price} $</p>
          <div className="card-actions justify-end">
            <button className="btn ">Buy Now</button>
          </div>
        </div>
      </div>
        </Link>
    );
};

export default StudentCard;