import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ViewCourse() {
  const [course, setCourse] = useState([]);

  const fetchCourse= async () => {
    try {
      const response = await axios.get('http://localhost:2000/viewcourse');
      setCourse(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchCourse();
  }, []);

  const deleteCourse = async (coursecode) => {
    try {
      await axios.delete(`http://localhost:2000/deleteCourse/${coursecode}`);
      fetchCourse();
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Courses</h1>
      
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Department</th>
              <th>Academic Year</th>
              <th>Year</th>
              <th>Semester</th>

            </tr>
          </thead>
          <tbody>
  {Array.isArray(course) && course.length > 0 ? (
    course.map((course, index) => (
      <tr key={index}>
        <td>{course.coursecode}</td>
        <td>{course.coursetitle}</td>
        <td>{course.dept}</td>
        <td>{course.academicyear}</td>
        <td>{course.year}</td>
        <td>{course.semester}</td>

        <td>
          <button onClick={() => deleteCourse(course.coursecode)} className='button'>Delete</button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="6">Data Not Found</td>
    </tr>
  )}
</tbody>
        </table>
    </div>
  );
}