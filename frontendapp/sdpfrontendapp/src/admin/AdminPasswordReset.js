import React, { useState } from 'react';
import axios from 'axios';
import AdminPasswordResetForm from './AdminPasswordResetForm';


export default function AdminPasswordReset(){
  const [formData, setFormData] = useState({ username: '' });
  const [error, setError] = useState('');
  const [resetPassword, setResetPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2000/checkusername', { username: formData.username });
      if (response.data) {
        setResetPassword(true);
        setError('');
      } else {
        setError('Username not found');
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
            <label>Username</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} required />
          </div>
          <button type="submit">Reset Password</button>
        </form>
      )}
      {resetPassword && <AdminPasswordResetForm username={formData.username} />}
    </div>
  );
};
