
import React, { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";

import {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
    completeTask
} from "../services/taskService";

const Dashboard = () => {

    const [tasks, setTasks] = useState([]);
    const [activeFilter, setActiveFilter] = useState("All");
    const [search, setSearch] = useState("");

    const [showForm, setShowForm] = useState(false);
    const [editingTask, setEditingTask] = useState(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Fetch tasks from MongoDB through backend
    const fetchTasks = async () => {
        try {
            setError("");

            const data = await getTasks();
            setTasks(data.tasks);

        } catch (error) {
            console.error(error);
            setError("Unable to load tasks. Check your backend server.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    // Open Add Task Form
    const handleAddTask = () => {
        setEditingTask(null);
        setShowForm(true);
    };

    // Open Edit Task Form
    const handleEditTask = (task) => {
        setEditingTask(task);
        setShowForm(true);
    };

    // Create or Update Task
    const handleFormSubmit = async (formData) => {
        try {
            if (editingTask) {
                await updateTask(editingTask._id, formData);
            } else {
                await createTask(formData);
            }

            setShowForm(false);
            setEditingTask(null);

            await fetchTasks();

        } catch (error) {
            console.error(error);
            alert(
                error.response?.data?.message ||
                "Unable to save task."
            );
        }
    };

    // Delete Task
    const handleDeleteTask = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this task?"
        );

        if (!confirmDelete) return;

        try {
            await deleteTask(id);
            await fetchTasks();

        } catch (error) {
            console.error(error);
            alert("Unable to delete task.");
        }
    };

    // Complete Task
    const handleCompleteTask = async (id) => {
        try {
            await completeTask(id);
            await fetchTasks();

        } catch (error) {
            console.error(error);
            alert("Unable to complete task.");
        }
    };

    // Dashboard Statistics
    const totalTasks = tasks.length;

    const pendingTasks = tasks.filter(
        task => task.status === "Pending"
    ).length;

    const completedTasks = tasks.filter(
        task => task.status === "Completed"
    ).length;

    const highPriorityTasks = tasks.filter(
        task => task.priority === "High" &&
               task.status === "Pending"
    ).length;

    // Search and Filter
    const filteredTasks = tasks.filter((task) => {

        const matchesSearch =
            task.title.toLowerCase().includes(search.toLowerCase());

        const matchesFilter =
            activeFilter === "All" ||
            task.status === activeFilter ||
            (activeFilter === "High" &&
                task.priority === "High");

        return matchesSearch && matchesFilter;
    });

    return (
        <div className="app-layout">

            <Sidebar
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
            />

            <main className="main-content">

                <Navbar
                    search={search}
                    setSearch={setSearch}
                    onAddTask={handleAddTask}
                />

                <section className="dashboard-content">

                    <div className="welcome-section">
                        <div>
                            <h2>Welcome Back! 👋</h2>
                            <p>
                                Here's an overview of your productivity.
                            </p>
                        </div>
                    </div>

                    {/* Statistics Cards */}

                    <div className="stats-grid">

                        <div className="stat-card blue">
                            <div className="stat-icon">📋</div>
                            <p>Total Tasks</p>
                            <h2>{totalTasks}</h2>
                        </div>

                        <div className="stat-card orange">
                            <div className="stat-icon">⏳</div>
                            <p>Pending Tasks</p>
                            <h2>{pendingTasks}</h2>
                        </div>

                        <div className="stat-card green">
                            <div className="stat-icon">✅</div>
                            <p>Completed Tasks</p>
                            <h2>{completedTasks}</h2>
                        </div>

                        <div className="stat-card red">
                            <div className="stat-icon">🔥</div>
                            <p>High Priority</p>
                            <h2>{highPriorityTasks}</h2>
                        </div>

                    </div>

                    {/* Task List */}

                    <div className="task-section">

                        <div className="section-header">
                            <div>
                                <h2>Task Overview</h2>
                                <p>
                                    Manage and track your daily activities.
                                </p>
                            </div>
                        </div>

                        {loading ? (

                            <div className="empty-state">
                                <h3>Loading tasks...</h3>
                            </div>

                        ) : error ? (

                            <div className="empty-state">
                                <h3>{error}</h3>
                                <button
                                    className="save-btn"
                                    onClick={fetchTasks}
                                >
                                    Retry
                                </button>
                            </div>

                        ) : filteredTasks.length === 0 ? (

                            <div className="empty-state">
                                <div className="empty-icon">📝</div>
                                <h3>No tasks found</h3>
                                <p>
                                    Create your first task to get started.
                                </p>
                                <button
                                    className="save-btn"
                                    onClick={handleAddTask}
                                >
                                    + Add Your First Task
                                </button>
                            </div>

                        ) : (

                            <div className="task-list">

                                {filteredTasks.map((task) => (

                                    <TaskCard
                                        key={task._id}
                                        task={task}
                                        onEdit={handleEditTask}
                                        onDelete={handleDeleteTask}
                                        onComplete={handleCompleteTask}
                                    />

                                ))}

                            </div>

                        )}

                    </div>

                </section>

            </main>

            {/* Add / Edit Task Modal */}

            {showForm && (
                <TaskForm
                    task={editingTask}
                    onSubmit={handleFormSubmit}
                    onClose={() => {
                        setShowForm(false);
                        setEditingTask(null);
                    }}
                />
            )}

        </div>
    );
};

export default Dashboard;
