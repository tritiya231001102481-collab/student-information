
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {
  const [students] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      rollNo: "101",
      department: "CSE",
      semester: 5,
      cgpa: 9.2,
      photo: "https://i.pravatar.cc/150?img=12"
    },
    {
      id: 2,
      name: "Priya Das",
      rollNo: "102",
      department: "IT",
      semester: 4,
      cgpa: 8.7,
      photo: "https://i.pravatar.cc/150?img=47"
    },
    {
      id: 3,
      name: "Amit Roy",
      rollNo: "103",
      department: "ECE",
      semester: 6,
      cgpa: 9.5,
      photo: "https://i.pravatar.cc/150?img=11"
    },
    {
      id: 4,
      name: "Sneha Paul",
      rollNo: "104",
      department: "CSE",
      semester: 3,
      cgpa: 8.4,
      photo: "https://i.pravatar.cc/150?img=44"
    }
  ]);

  return (
    <div>
      <Header title="Student Information Portal" />

      <StudentList students={students} />

      <Footer college="ABC College" />
    </div>
  );
}

export default App;
