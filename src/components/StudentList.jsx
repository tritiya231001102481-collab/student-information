
import React, { useState } from "react";
import StudentCard from "./StudentCard";

function StudentList({ students }) {

  const [sortOrder, setSortOrder] = useState("default");

  const sortedStudents = [...students].sort((a, b) => {
    if (sortOrder === "ascending") {
      return a.cgpa - b.cgpa;
    }

    if (sortOrder === "descending") {
      return b.cgpa - a.cgpa;
    }

    return a.id - b.id;
  });

  return (
    <div className="student-list">

      <h2>Student Details</h2>

      <div className="sort-section">
        <label>Sort by CGPA: </label>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="default">Default Order</option>
          <option value="ascending">Low to High</option>
          <option value="descending">High to Low</option>
        </select>
      </div>

      <div className="cards-container">
        {sortedStudents.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
          />
        ))}
      </div>

    </div>
  );
}

export default StudentList;
