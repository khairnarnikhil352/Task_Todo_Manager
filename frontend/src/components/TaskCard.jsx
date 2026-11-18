
import React from "react";
import {
    FiEdit2,
    FiTrash2,
    FiCheck
} from "react-icons/fi";

const TaskCard = ({ task, onEdit, onDelete, onComplete }) => {

    return (
        <div className={`task-card ${task.status === "Completed" ? "completed-task" : ""}`}>

            <div className="task-main">

                <div className="task-title-row">
                    <h3>{task.title}</h3>

                    <span className={`priority ${task.priority.toLowerCase()}`}>
                        {task.priority}
                    </span>
                </div>

                <p className="task-description">
                    {task.description || "No description provided"}
                </p>

                <div className="task-footer">

                    <span className="task-status">
                        {task.status}
                    </span>

                    <div className="task-actions">

                        {task.status !== "Completed" && (
                            <button
                                title="Mark completed"
                                onClick={() => onComplete(task._id)}
                            >
                                <FiCheck />
                            </button>
                        )}

                        <button
                            title="Edit task"
                            onClick={() => onEdit(task)}
                        >
                            <FiEdit2 />
                        </button>

                        <button
                            title="Delete task"
                            onClick={() => onDelete(task._id)}
                        >
                            <FiTrash2 />
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default TaskCard;
