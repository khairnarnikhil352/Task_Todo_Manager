# Task Todo Manager 

A Full-Stack Task Management Application built using the **MERN Stack (MongoDB, Express.js, React.js, and Node.js)**. It helps users efficiently create, organize, update, delete, and track their daily tasks through a clean and user-friendly dashboard.

##  Features

- **Task Management:** Create, view, update, and delete tasks.
- **Task Priority:** Organize tasks by Low, Medium, and High priority.
- **Due Dates:** Set deadlines for individual tasks.
- **Task Status:** Mark tasks as Pending or Completed.
- **Dashboard:** View total, pending, and completed tasks.
- **Search & Filter:** Easily find and organize tasks.
- **Responsive UI:** Access the application on desktop and mobile devices.

##  Technologies Used

### Frontend
- React.js
- Vite
- JavaScript
- HTML5
- CSS3
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Development Tools
- Visual Studio Code
- Git & GitHub
- Postman
- MongoDB Compass
- npm

##  Project Structure

```text
Task-Todo-Manager/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   └── package.json
│
├── .gitignore
└── README.md
```



##  Installation and Setup

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- MongoDB
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/Task-Todo-Manager.git
```

### 2. Navigate to Project Folder

```bash
cd Task-Todo-Manager
```

### 3. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the backend server:

```bash
npm run dev
```

### 4. Setup Frontend

Open another terminal:

```bash
cd frontend
npm install
```

Create a `.env` file inside the frontend folder:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend:

```bash
npm run dev
```

### 5. Open Application

Open the URL displayed in your frontend terminal, usually:

```text
http://localhost:5173
```

##  Environment Variables

| Variable | Description |
|---|---|
| PORT | Backend server port |
| MONGO_URI | MongoDB connection string |
| VITE_API_URL | Backend API base URL |




##  Project Objectives

- To simplify daily task management.
- To improve productivity and organization.
- To provide an easy-to-use task tracking system.
- To understand full-stack web development using the MERN stack.
- To implement REST APIs and database operations.

##  Future Enhancements

- User Registration and Login
- JWT Authentication
- User-specific Task Management
- Task Categories and Tags
- Email and Due Date Notifications
- Advanced Analytics and Reports
- Dark and Light Theme

##  Author

**Your Name**

GitHub: https://github.com/khairnarnikhil352

##  License

This project is developed for educational and learning purposes.

---

If you find this project useful, consider giving it a star!
