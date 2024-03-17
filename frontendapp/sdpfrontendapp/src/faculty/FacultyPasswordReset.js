import React, { useState } from 'react';
import axios from 'axios';
import FacultyPasswordResetForm from './FacultyPasswordResetForm';


export default function FacultyPasswordReset(){
  const [formData, setFormData] = useState({ email: '' });
  const [error, setError] = useState('');
  const [resetPassword, setResetPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2000/checkemail', { email: formData.email });
      if (response.data) {
        setResetPassword(true);
        setError('');
      } else {
        setError('email not found');
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
            <label>email</label>
            <input type="text" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <button type="submit">Reset Password</button>
        </form>
      )}
      {resetPassword && <FacultyPasswordResetForm email={formData.email} />}
    </div>
  );
};
