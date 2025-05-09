# 🗂️ Task Management WebApp – Gamage Recruiters SE Intern Project

A full-stack task management system for admin users to manage intern tasks, built as part of the Gamage Recruiters Software Engineering Intern challenge.

## 📋 Project Brief

This app allows admin users to:

- 🔐 Register/login using Google OAuth 2.0
- 📝 Perform CRUD operations on tasks
- 📄 Generate PDF task reports
- 🎨 Styled with Tailwind CSS
- ☁️ Uses MongoDB Atlas as the database
- 🧠 Built with the MERN stack (MongoDB, Express.js, React, Node.js)

---

## 📌 Features

### ✅ Authentication
- Google OAuth 2.0 login
- Session handling and auth-protected routes

### ✅ Task Management (CRUD)
- Fields: Title, Description, Deadline, Assigned To, Status
- Functions: Add, Edit, Delete, View
- Filter and sort tasks
- Download PDF reports

### ✅ UI Pages
- Login Page
- Dashboard (task summary)
- Task List (search/filter/sort/export)
- Add Task
- Edit Task
- (Optional) View Task Details
- (Optional) Profile/Settings Page
- 404 & Unauthorized Pages

---

## 🛠️ Tech Stack

| Layer       | Tech                     |
|-------------|--------------------------|
| Frontend    | React + TypeScript + Tailwind CSS |
| Backend     | Node.js + Express.js     |
| Auth        | Google OAuth 2.0 via Passport.js |
| Database    | MongoDB Atlas            |
| PDF Export  | jsPDF                    |
| Hosting     | GitHub (with optional live demo) |

---

## 📁 Project Structure

project-root/
├── Backend/
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ ├── middlewares/
│ └── server.ts
└── Frontend/
├── src/
│ ├── components/
│ ├── pages/
│ ├── App.tsx
│ └── main.tsx


---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/sasobapriyanjana11/Task-Management-WebApp.git
```

## 2. Backend Setup
```bash
cd task-manager-app
cd backend
npm install

# Add .env file with:
# MONGO_URI=
# GOOGLE_CLIENT_ID=
# GOOGLE_CLIENT_SECRET=
```
## 3. Frontend Setup
```bash
npm run dev
cd ../frontend
npm install
npm run dev

```

🧪 Git & Branching Strategy
- Feature branches used for each module/page

- Merges handled via pull requests

- Merged branches are not deleted

- Commit messages are clear and contextual

📆 Deadline
- 🕒 Project built within the 24-hour time limit as per internship challenge requirements.

🧠 AI Tools Used
- ChatGPT (OpenAI) for project acceleration and scaffolding
- jsPDF for report generation


📄 License
- This project is part of an internship evaluation and is not licensed for commercial use.
