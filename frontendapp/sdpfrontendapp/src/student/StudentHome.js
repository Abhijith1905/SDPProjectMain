import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
//import profile from './logo.svg'
import './studentnavbar.css'


export default function StudentHome() {
  return (
    <div>
      

        <ul className='navbar'>

        <li>
            <Link to="/studenthome">Home</Link>
        </li>
        <li>
            <Link to="/studentprofile">Profile</Link>
        </li>
        <li>
            <Link to="/sviewattendance">Attendance</Link>
        </li>
        <li>
            <Link to="/sviewtimetable">Timetable</Link>
        </li>
        <li>
            <Link to="/viewcourses">Courses</Link>
        </li>
        <li>
            <Link to="/results">Results</Link>
        </li>
        <li>
            <Link to="/feedback">Feedback</Link>
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
  )
}
