import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getExpenses, addExpense, updateExpense, deleteExpense } from '../api';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import ExpenseChart from '../components/ExpenseChart';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
// Add Heroicons for dashboard icons
import { ArrowRightOnRectangleIcon, CurrencyDollarIcon, Squares2X2Icon } from '@heroicons/react/24/outline';

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

  // Calculate summary data
  const totalExpenses = expenses.reduce((sum, exp) => sum + Number(exp.amount || 0), 0);
  const uniqueCategories = [...new Set(expenses.map(exp => exp.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4 py-8 flex items-center justify-center">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center text-center sm:text-left mb-8">
          <div>
            <h1 className="text-4xl font-extrabold text-blue-700 mb-2 tracking-tight drop-shadow">
              Dashboard
            </h1>
            <p className="text-lg text-blue-500">
              {user?.username ? (
                <>
                  Hello, <span className="font-semibold text-black">{user.username}</span>. Here is your expense overview.
                </>
              ) : (
                <>Welcome. Here is your expense overview.</>
              )}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="mt-4 sm:mt-0 flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-semibold shadow transition"
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5" /> Logout
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-4 border-l-4 border-blue-400">
            <CurrencyDollarIcon className="h-10 w-10 text-blue-400" />
            <div>
              <div className="text-2xl font-bold text-blue-700">₹{totalExpenses.toLocaleString()}</div>
              <div className="text-gray-500">Total Expenses</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-4 border-l-4 border-purple-400">
            <Squares2X2Icon className="h-10 w-10 text-purple-400" />
            <div>
              <div className="text-2xl font-bold text-purple-700">{uniqueCategories.length}</div>
              <div className="text-gray-500">Categories</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 md:mb-0 border border-blue-100">
            <ExpenseForm onSubmit={handleAddOrUpdate} editingExpense={editingExpense} />
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border border-purple-100">
            <ExpenseChart expenses={expenses} />
          </div>
        </div>
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6 border border-blue-100">
          <ExpenseList expenses={expenses} onEdit={setEditingExpense} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
