import React, { useState } from 'react';
import axios from 'axios';
import StudentPasswordResetForm from './StudentPasswordResetForm';


export default function StudentPasswordReset(){
  const [formData, setFormData] = useState({ studentid: '' });
  const [error, setError] = useState('');
  const [resetPassword, setResetPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2000/checkstudentid', { studentid: formData.studentid });
      if (response.data) {
        setResetPassword(true);
        setError('');
      } else {
        setError('studentid not found');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h3 align="center"><u>Reset Password</u></h3>
      {error && <h4 align="center">{error}</h4>}
      {!resetPassword && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>studentid</label>
            <input type="text" name="studentid" value={formData.studentid} onChange={handleChange} required />
          </div>
          <button type="submit">Reset Password</button>
        </form>
      )}
      {resetPassword && <StudentPasswordResetForm studentid={formData.studentid} />}
    </div>
  );
};
