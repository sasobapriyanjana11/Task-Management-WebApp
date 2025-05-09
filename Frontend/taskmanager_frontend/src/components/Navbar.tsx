import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center">
            <h1 className="text-xl font-bold">Task Manager</h1>
            <div className="space-x-4">
                <Link to="/dashboard" className="hover:underline">Dashboard</Link>
                <Link to="/tasks" className="hover:underline">Tasks</Link>
                <Link to="/" className="hover:underline">Logout</Link>
            </div>
        </nav>
    );
};

export default Navbar;
