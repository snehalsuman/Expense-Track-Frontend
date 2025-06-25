# 💰 Expense Tracker Frontend

This is the frontend for the Expense Tracker application, built using **React.js**, **Tailwind CSS**, and **Recharts**. It interacts with a Node.js + MongoDB backend to allow users to track their expenses visually and intuitively.

---

## 🚀 Features

- 🔐 JWT-based authentication (Login / Register)
- 💼 Add, edit, delete expenses
- 📊 Interactive charts (Recharts)
- 🔄 Real-time feedback via toast notifications
- 📱 Fully responsive design
- 📦 React Context for global auth state

---

## 🛠️ Tech Stack

- React 18+
- React Router DOM
- Tailwind CSS
- React Toastify
- Recharts
- Axios

---

## 🔧 Project Structure

src/
├── api.js                # Axios instance & API methods
├── App.jsx               # Routing logic
├── main.jsx              # React entry point
├── context/
│   └── AuthContext.jsx   # Auth provider & hook
├── components/
│   ├── ExpenseForm.jsx   # Form to add/edit expenses
│   ├── ExpenseList.jsx   # Displays list of expenses
│   └── ExpenseChart.jsx  # Expense pie/bar chart
└── pages/
    ├── LoginPage.jsx     # Login screen
    ├── RegisterPage.jsx  # Registration screen
    └── Dashboard.jsx     # Main dashboard after login



---

## 🧪 Setup Instructions

### Prerequisites
- Node.js and npm installed
- Backend running at `http://localhost:5050`

### 1. Clone the repo

```bash
git clone https://github.com/snehalsuman/Expense-Track-Frontend.git
cd expense-tracker-frontend
npm install
```
### 2. Environment variables
```bash
Create a .env file:
VITE_BACKEND_URL=http://localhost:5050
```
### 3. Start the app
```bash
npm start
```
Visit: http://localhost:5173
