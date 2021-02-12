import React from 'react';
import { Link } from 'react-router-dom';
import school_image from '../assets/school_image.jpg'

export default function schoolList(props) {
  const { school } = props;
  return (
    <div key={school.sid} className="card">
        <img className="medium" src={school_image} alt={school.school_name} />
      <div className="card-body">
        <Link to={`/school/${school.sid}`}>
          <h2>{school.school_name}</h2>
          <p>{school.school_address}</p>
        </Link>
      </div>
    </div>
  );
}
