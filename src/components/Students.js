import React from 'react';
export default function Student(props) {
  const { student } = props;

  return (
    <div key={student.sid} className="card">
      <div className="card-body">
          <h2>{student.name}</h2>
          <p>{student.year}</p>
          <p>{student.special_note}</p>
      </div>
    </div>
  );
}
