import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseChart = ({ expenses }) => {
  if (!expenses.length) {
    return (
      <p className="text-center text-gray-500 mt-6">No expenses yet.</p>
    );
  }

  const categoryTotals = expenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + Number(exp.amount);
    return acc;
  }, {});

  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        data: Object.values(categoryTotals),
        backgroundColor: [
          '#4F46E5', '#EC4899', '#10B981', '#F59E0B', '#EF4444', '#6366F1'
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center text-gray-700">
        Expenses by Category
      </h2>
      <Pie data={data} />
    </div>
  );
};

export default ExpenseChart;
