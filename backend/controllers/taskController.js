
const Task = require("../models/Task");

// 1. Create Task

const createTask = async (req, res) => {
    try {
        console.log("Received Task Data:", req.body);

        const { title, description, priority, dueDate } = req.body;

        if (!title || !title.trim()) {
            return res.status(400).json({
                success: false,
                message: "Task title is required"
            });
        }

        const task = await Task.create({
            title: title.trim(),
            description: description || "",
            priority: priority || "Medium",
            dueDate: dueDate || null
        });

        return res.status(201).json({
            success: true,
            message: "Task created successfully",
            task
        });

    } catch (error) {
        console.error("CREATE TASK ERROR:", error);

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// 2. Get All Tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });

        res.status(200).json({
            count: tasks.length,
            tasks
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// 3. Get Single Task
const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json(task);

    } catch (error) {
        res.status(400).json({
            message: "Invalid task ID"
        });
    }
};

// 4. Update Task
const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json({
            message: "Task updated successfully",
            task
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// 5. Delete Task
const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json({
            message: "Task deleted successfully"
        });

    } catch (error) {
        res.status(400).json({
            message: "Invalid task ID"
        });
    }
};

// 6. Mark Task as Completed
const completeTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            { status: "Completed" },
            { new: true, runValidators: true }
        );

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json({
            message: "Task marked as completed",
            task
        });

    } catch (error) {
        res.status(400).json({
            message: "Invalid task ID"
        });
    }
};

module.exports = {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask,
    completeTask
};
