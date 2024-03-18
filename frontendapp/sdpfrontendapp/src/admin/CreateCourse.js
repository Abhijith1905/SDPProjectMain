import React, { useState } from "react";
import axios from "axios";
import "./form.css"; // Import the CSS file

export default function CreateCourse() {
  const [formData, setFormData] = useState({
    dept: "",
    academicyear: "",
    year: "",
    semester: "",
    coursecode: "",
    coursetitle: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:2000/createcourse",
        formData
      );
      if (response.status === 200) {
        setFormData({
          dept: "",
          academicyear: "",
          year: "",
          semester: "",
          coursecode: "",
          coursetitle: "",
        });
      }
      setMessage(response.data);
      setError(""); // set error to ""
    } catch (error) {
      setError(error.response.data);
      setMessage(""); //set message to ""
    }
  };

  return (
    <div className="registration-container">
      <h2>Course Creation</h2>
      {message ? <h4>{message}</h4> : <h4>{error}</h4>}
      <div className="inner-container">
        <form onSubmit={handleSubmit}>
          <div className="two-details-item">
            <div className="personal-details">
              <label htmlFor="coursecode">Course Code</label>
              <input
                type="text"
                id="coursecode"
                value={formData.coursecode}
                onChange={handleChange}
                required
              />
            </div>
            <div className="personal-details ">
              <label htmlFor="coursetitle">Course Title</label>
              <input
                type="text"
                id="coursetitle"
                value={formData.coursetitle}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="two-details-item">
            <div className="personal-details ">
              <label htmlFor="dept">Department</label>
              <select
                id="dept"
                value={formData.dept}
                onChange={handleChange}
                required
              >
                <option value="">Select Department</option>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="MECH">MECH</option>
                <option value="CIVIL">CIVIL</option>
              </select>
            </div>

            <div className="personal-details ">
              <label htmlFor="academicyear">Academic Year</label>
              <input
                type="number"
                id="academicyear"
                value={formData.academicyear}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="two-details-item">
            <div className="personal-details ">
              <label htmlFor="year">Year</label>
              <input
                type="number"
                id="year"
                value={formData.year}
                onChange={handleChange}
                required
              />
            </div>
            <div className="personal-details ">
              <label htmlFor="semester">Semester</label>
              <select
                id="semester"
                value={formData.semester}
                onChange={handleChange}
                required
              >
                <option value="">Select Semester</option>
                <option value="ODD">ODD</option>
                <option value="EVEN">EVEN</option>
              </select>
            </div>
          </div>
          <button type="submit" className="submit-btn">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
