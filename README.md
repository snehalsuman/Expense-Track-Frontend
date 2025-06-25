# 💰 Expense Tracker Frontend

This is the frontend for the Expense Tracker application, built using **React.js**, **Tailwind CSS**, and **Recharts**. It interacts with a Node.js + MongoDB backend to allow users to track their expenses visually and intuitively.

---
<img width="1252" alt="Screenshot 2025-06-25 at 10 53 26 PM" src="https://github.com/user-attachments/assets/4e171f9c-d60e-42d8-9136-efa1a60d47a6" />

<img width="1246" alt="Screenshot 2025-06-25 at 10 53 38 PM" src="https://github.com/user-attachments/assets/e0e21311-d457-42e9-87e3-c73ea0c6855c" />

<img width="1223" alt="Screenshot 2025-06-25 at 10 54 10 PM" src="https://github.com/user-attachments/assets/a7a54562-e38f-4841-bc51-29f4ac089300" />

<img width="1212" alt="Screenshot 2025-06-25 at 10 54 44 PM" src="https://github.com/user-attachments/assets/3b504e3a-e2ab-4008-94a1-9ac6215092d2" />


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
