# 💰 Expense Tracker Frontend

This is the frontend for the Expense Tracker application, built using **React.js**, **Tailwind CSS**, and **Recharts**. It interacts with a Node.js + MongoDB backend to allow users to track their expenses visually and intuitively.

---
<img width="1241" alt="Screenshot 2025-06-27 at 7 45 30 PM" src="https://github.com/user-attachments/assets/5f9b4f71-f737-4668-8513-f21586be1f3b" />
<img width="1223" alt="Screenshot 2025-06-27 at 7 45 44 PM" src="https://github.com/user-attachments/assets/ad2009aa-e9ec-41d4-840b-fc7bc8407ecb" />
<img width="1271" alt="Screenshot 2025-06-27 at 7 46 18 PM" src="https://github.com/user-attachments/assets/9aa0536f-8e7a-42cf-88fc-1a8b6207c7b6" />
![Uploading Screenshot 2025-06-27 at 7.46.48 PM.png…]()



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
