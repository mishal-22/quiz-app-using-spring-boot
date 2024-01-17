import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function QuizLayout() {
    const activeStyle = {
        color: "#424141",
        fontWeight: "bold",
        backgroundColor: "#e4e1e1",
      };
  return (
    <div>
      <nav className="quiz-nav">
      <NavLink to="." className="nav-link" style={({ isActive }) => (isActive ? activeStyle : null)} end>
            <span className="icon">📋</span> Show Quiz
          </NavLink>
          <NavLink to="create" className="nav-link" style={({ isActive }) => (isActive ? activeStyle : null)}>
            <span className="icon">✏️</span> Create Quiz
          </NavLink>
      </nav>
      <Outlet/>
    </div>
  );
}

export default QuizLayout;
