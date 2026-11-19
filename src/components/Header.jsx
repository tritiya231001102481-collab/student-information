
import React from "react";

function Header(props) {
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <p>Welcome to Student Management System</p>
    </header>
  );
}

export default Header;
