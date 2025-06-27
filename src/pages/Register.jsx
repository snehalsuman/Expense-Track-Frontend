import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
// Add Heroicons for input icons
import { UserIcon, AtSymbolIcon, LockClosedIcon } from '@heroicons/react/24/outline';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('http://localhost:5050/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      login(data.token, data.user);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-blue-100 to-purple-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border border-green-100">
        <h2 className="text-3xl font-extrabold text-green-700 mb-6 text-center tracking-tight">
          Create Your Account
        </h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <div className="mb-4 relative">
          <span className="absolute left-3 top-2.5 text-green-400">
            <UserIcon className="h-5 w-5" />
          </span>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            className="w-full pl-10 pr-3 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            required
          />
        </div>
        <div className="mb-4 relative">
          <span className="absolute left-3 top-2.5 text-green-400">
            <AtSymbolIcon className="h-5 w-5" />
          </span>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full pl-10 pr-3 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            required
          />
        </div>
        <div className="mb-6 relative">
          <span className="absolute left-3 top-2.5 text-green-400">
            <LockClosedIcon className="h-5 w-5" />
          </span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full pl-10 pr-3 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            required
          />
        </div>
        <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 rounded-lg font-semibold shadow hover:from-green-600 hover:to-blue-600 transition mb-2">
          Register
        </button>
        <p className="text-sm mt-4 text-center text-gray-500">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 hover:underline font-medium">Login</a>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
