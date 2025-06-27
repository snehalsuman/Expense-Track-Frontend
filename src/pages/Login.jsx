import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
// Add Heroicons for input icons
import { AtSymbolIcon, LockClosedIcon } from '@heroicons/react/24/outline';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('http://localhost:5050/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      login(data.token, data.user); // <-- Pass token and user to context
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border border-blue-100">
        <h2 className="text-3xl font-extrabold text-blue-700 mb-6 text-center tracking-tight">
          Expense Tracker
        </h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <div className="mb-4 relative">
          <span className="absolute left-3 top-2.5 text-blue-400">
            <AtSymbolIcon className="h-5 w-5" />
          </span>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full pl-10 pr-3 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />
        </div>
        <div className="mb-6 relative">
          <span className="absolute left-3 top-2.5 text-blue-400">
            <LockClosedIcon className="h-5 w-5" />
          </span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full pl-10 pr-3 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />
        </div>
        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg font-semibold shadow hover:from-blue-600 hover:to-purple-600 transition mb-2">
          Login
        </button>
        <p className="text-sm mt-4 text-center text-gray-500">
          Don’t have an account?{' '}
          <a href="/register" className="text-blue-500 hover:underline font-medium">Register</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
