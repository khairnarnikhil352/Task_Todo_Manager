
import React from "react";
import {
    FiGrid,
    FiList,
    FiClock,
    FiCheckCircle,
    FiAlertCircle,
    FiSettings,
    FiLogOut
} from "react-icons/fi";

const Sidebar = ({ activeFilter, setActiveFilter }) => {

    const menuItems = [
        { name: "Dashboard", value: "All", icon: <FiGrid /> },
        { name: "All Tasks", value: "All", icon: <FiList /> },
        { name: "Pending", value: "Pending", icon: <FiClock /> },
        { name: "Completed", value: "Completed", icon: <FiCheckCircle /> },
        { name: "High Priority", value: "High", icon: <FiAlertCircle /> }
    ];

    return (
        <aside className="sidebar">

            <div className="brand">
                <div className="brand-icon">
                    <FiCheckCircle />
                </div>
                <h2>TaskFlow</h2>
            </div>

            <p className="menu-heading">WORKSPACE</p>

            <nav className="sidebar-menu">
                {menuItems.map((item, index) => (
                    <button
                        key={index}
                        className={`menu-item ${
                            activeFilter === item.value &&
                            (item.name === "Dashboard" ||
                             item.name === "All Tasks" ||
                             item.name === "Pending" ||
                             item.name === "Completed" ||
                             item.name === "High Priority")
                                ? "active"
                                : ""
                        }`}
                        onClick={() => setActiveFilter(item.value)}
                    >
                        {item.icon}
                        <span>{item.name}</span>
                    </button>
                ))}
            </nav>

            <div className="sidebar-bottom">
                <button className="menu-item">
                    <FiSettings />
                    <span>Settings</span>
                </button>

                <div className="profile">
                    <div className="profile-avatar">U</div>
                    <div>
                        <h4>My Workspace</h4>
                        <p>Task Manager</p>
                    </div>
                </div>
            </div>

        </aside>
    );
};

export default Sidebar;
