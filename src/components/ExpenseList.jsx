import React from 'react';

const ExpenseList = ({ expenses, onEdit, onDelete }) => {
  return (
    <div className="max-w-3xl mx-auto mt-6 space-y-3">
      {expenses.length === 0 ? (
        <p className="text-center text-gray-500">No expenses yet.</p>
      ) : (
        expenses.map((expense) => (
          <div
            key={expense._id}
            className="flex flex-col sm:flex-row sm:items-center justify-between bg-white shadow p-4 rounded-md border"
          >
            <div className="text-sm sm:text-base">
              <p className="font-medium text-gray-800">
                ₹{expense.amount} – {expense.category}
              </p>
              <p className="text-gray-500">
                {new Date(expense.date).toLocaleDateString()}
              </p>
            </div>
            <div className="mt-2 sm:mt-0 flex gap-2">
              <button
                onClick={() => onEdit(expense)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(expense._id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ExpenseList;
