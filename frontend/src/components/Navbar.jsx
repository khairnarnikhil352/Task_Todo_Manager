
import React from "react";
import { FiSearch, FiPlus } from "react-icons/fi";

const Navbar = ({ search, setSearch, onAddTask }) => {

    return (
        <header className="top-navbar">

            <div className="page-heading">
                <h1>My Tasks</h1>
                <p>Manage your tasks and stay productive.</p>
            </div>

            <div className="navbar-actions">

                <div className="search-box">
                    <FiSearch />
                    <input
                        type="text"
                        placeholder="Search tasks..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <button
                    className="add-task-btn"
                    onClick={onAddTask}
                >
                    <FiPlus />
                    Add New Task
                </button>

            </div>

        </header>
    );
};

export default Navbar;
