
import React from "react";

function StudentCard({ student }) {
  return (
    <div className="student-card">

      <img
        src={student.photo}
        alt={student.name}
      />

      <h2>{student.name}</h2>

      <p><b>Roll Number:</b> {student.rollNo}</p>

      <p><b>Department:</b> {student.department}</p>

      <p><b>Semester:</b> {student.semester}</p>

      <p><b>CGPA:</b> {student.cgpa}</p>

    </div>
  );
}

export default StudentCard;
