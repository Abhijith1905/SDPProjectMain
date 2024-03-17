import React, { useState } from 'react';
import axios from 'axios';

const StudentPasswordResetForm = (props) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChangeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('http://localhost:2000/resetstudentpassword', { studentid: props.studentid, newPassword });
      setMessage(response.data);
      setError('');
    } catch (error) {
      setMessage('');
      setError(error.message);
    }
  };

  return (
    <div>
    
      {message && <h4 align="center">{message}</h4>}
      {error && <h4 align="center">{error}</h4>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>New Password</label>
          <input type="password" value={newPassword} onChange={handleChangeNewPassword} required />
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" value={confirmPassword} onChange={handleChangeConfirmPassword} required />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default StudentPasswordResetForm;
