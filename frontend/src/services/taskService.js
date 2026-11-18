
import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

// Get all tasks
export const getTasks = async () => {
    const response = await API.get("/tasks");
    return response.data;
};

// Create task
export const createTask = async (taskData) => {
    const response = await API.post("/tasks", taskData);
    return response.data;
};

// Update task
export const updateTask = async (id, taskData) => {
    const response = await API.put(`/tasks/${id}`, taskData);
    return response.data;
};

// Delete task
export const deleteTask = async (id) => {
    const response = await API.delete(`/tasks/${id}`);
    return response.data;
};

// Complete task
export const completeTask = async (id) => {
    const response = await API.patch(`/tasks/${id}/complete`);
    return response.data;
};

export default API;
