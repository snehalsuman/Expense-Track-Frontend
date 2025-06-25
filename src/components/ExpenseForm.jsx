import React, { useEffect, useState } from 'react';

const ExpenseForm = ({ onSubmit, editingExpense }) => {
  const [form, setForm] = useState({
    amount: '',
    category: '',
    description: '',
    date: ''
  });

  useEffect(() => {
    if (editingExpense) {
      setForm({
        amount: editingExpense.amount,
        category: editingExpense.category,
        description: editingExpense.description,
        date: editingExpense.date.slice(0, 10),
      });
    } else {
      setForm({ amount: '', category: '', description: '', date: '' });
    }
  }, [editingExpense]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.amount || !form.category || !form.description || !form.date) {
      alert("All fields are required");
      return;
    }
    onSubmit(form);
    setForm({ amount: '', category: '', description: '', date: '' });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-4"
    >
      <div>
        <label className="block text-sm font-medium mb-1">Amount (₹)</label>
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Category</label>
        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Date</label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        {editingExpense ? 'Update Expense' : 'Add Expense'}
      </button>
    </form>
  );
};

export default ExpenseForm;
