
import React, { useEffect, useState } from "react";
import { FiX, FiSave } from "react-icons/fi";

const TaskForm = ({ task, onSubmit, onClose }) => {

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        priority: "Medium",
        dueDate: ""
    });

    useEffect(() => {
        if (task) {
            setFormData({
                title: task.title || "",
                description: task.description || "",
                priority: task.priority || "Medium",
                dueDate: task.dueDate
                    ? new Date(task.dueDate).toISOString().split("T")[0]
                    : ""
            });
        } else {
            setFormData({
                title: "",
                description: "",
                priority: "Medium",
                dueDate: ""
            });
        }
    }, [task]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({
            ...formData,
            dueDate: formData.dueDate || null
        });
    };

    return (
        <div className="modal-overlay">
            <div className="task-form-modal">

                <div className="form-header">
                    <div>
                        <h2>{task ? "Edit Task" : "Create New Task"}</h2>
                        <p>
                            {task
                                ? "Update your task details."
                                : "Add a new task to your workspace."}
                        </p>
                    </div>

                    <button
                        type="button"
                        className="close-btn"
                        onClick={onClose}
                    >
                        <FiX />
                    </button>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label>Task Title *</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter task title"
                            value={formData.title}
                            onChange={handleChange}
                            maxLength={100}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <textarea
                            name="description"
                            placeholder="Enter task description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="4"
                        />
                    </div>

                    <div className="form-row">

                        <div className="form-group">
                            <label>Priority</label>
                            <select
                                name="priority"
                                value={formData.priority}
                                onChange={handleChange}
                            >
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Due Date</label>
                            <input
                                type="date"
                                name="dueDate"
                                value={formData.dueDate}
                                onChange={handleChange}
                            />
                        </div>

                    </div>

                    <div className="form-buttons">
                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={onClose}
                        >
                            Cancel
                        </button>

                        <button type="submit" className="save-btn">
                            <FiSave />
                            {task ? "Update Task" : "Create Task"}
                        </button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default TaskForm;
