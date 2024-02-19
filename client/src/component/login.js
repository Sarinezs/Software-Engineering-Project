import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission or authentication logic
    console.log('Submitted:', formData);
  };

  return (
    <div className="form-container">
      <h1>เข้าสู่ระบบ</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">อีเมล</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">รหัสผ่าน</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">เข้าสู่ระบบ</button>
         <p>ยังไม่ได้เป็นสมาชิก? <Link to="/register">สมัครสมาชิก</Link></p>
      </form>
    </div>
  );
};

export default Login;
