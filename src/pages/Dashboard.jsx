import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getExpenses, addExpense, updateExpense, deleteExpense } from '../api';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import ExpenseChart from '../components/ExpenseChart';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const loadExpenses = async () => {
    try {
      const { data } = await getExpenses();
      setExpenses(data);
    } catch (err) {
      toast.error("Failed to load expenses");
    }
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  const handleAddOrUpdate = async (expense) => {
    try {
      if (editingExpense) {
        await updateExpense(editingExpense._id, expense);
        toast.success("Expense updated");
        setEditingExpense(null);
      } else {
        await addExpense(expense);
        toast.success("Expense added");
      }
      loadExpenses();
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteExpense(id);
      toast.success("Expense deleted");
      loadExpenses();
    } catch (err) {
      toast.error("Delete failed");
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
  <div className="min-h-screen bg-gray-50 px-4 py-6 flex items-center justify-center">
    <div className="w-full max-w-4xl">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center text-center sm:text-left mb-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-2">
            Expense Tracker Dashboard
          </h1>
          <p className="text-lg sm:text-xl text-gray-700">
            Welcome <span className="font-semibold text-black">{user?.username || '👤'}</span> 👋
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="mt-4 sm:mt-0 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <ExpenseForm onSubmit={handleAddOrUpdate} editingExpense={editingExpense} />
      <ExpenseList expenses={expenses} onEdit={setEditingExpense} onDelete={handleDelete} />
      <ExpenseChart expenses={expenses} />
    </div>
  </div>
);


};

export default Dashboard;
