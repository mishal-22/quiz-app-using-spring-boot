import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function QuestionsLayout() {
  const activeStyle = {
    color: "#424141",
    fontWeight: "bold",
    backgroundColor: "#e4e1e1",
  };
  return (
    <div>
      <nav className="questions-nav">
        <div className="upd-del">
          <NavLink to="add" className="nav-link" style={({ isActive }) => (isActive ? activeStyle : null)}>
            <span className="icon">✏️</span> Add
          </NavLink>
          {/* <NavLink to="update" className="nav-link" style={({ isActive }) => (isActive ? activeStyle : null)}>
            <span className="icon">🔄</span> Update
          </NavLink> */}
        </div>
        <NavLink to="." className="ques-heading">Questions</NavLink>
        <label className="category-selection">
          Category :
          <NavLink
            to={`showQuestionsByCategory/java`}
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Java
          </NavLink>
          <NavLink
            to="showQuestionsByCategory/python"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Python
          </NavLink>
        </label>
      </nav>
      <Outlet />
    </div>
  );
}

export default QuestionsLayout;
