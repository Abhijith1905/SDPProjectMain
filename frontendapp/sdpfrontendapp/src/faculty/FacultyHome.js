import React from "react";
import { Link, Route, Routes } from "react-router-dom";
//import profile from './logo.svg'
import "./facultynavbar.css";

export default function FacultyHome() {
  return (
    <div>
      <ul className="navbar">
        <li>
          <Link to="/facultyhome">Home</Link>
        </li>
        <li>
          <Link to="/facultyprofile">Profile</Link>
        </li>
        <li>
          <Link to="/markattendance">Attendance</Link>
        </li>
        <li>
          <Link to="/fviewtimetable">Timetable</Link>
        </li>
        <li>
          <Link to="/viewcoursef">Courses</Link>
        </li>
        <li>
          <Link to="/graderesults">Grading</Link>
        </li>
        <li>
          <Link to="/viewfeedback">Feedback</Link>
        </li>
        <br />

        <br />

        <br />

        <br />
        <li>
          <Link to="/Settings">Settings</Link>
        </li>
        <li>
          <Link to="/login">Logout</Link>
        </li>
      </ul>
    </div>
  );
}
