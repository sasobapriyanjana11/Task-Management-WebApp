import React, { useEffect, useState } from 'react';
import axios from '../utils/axios.ts';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const [summary, setSummary] = useState({ total: 0, pending: 0, completed: 0 });
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/tasks')
            .then(res => {
                const tasks = res.data;
                const total = tasks.length;
                const pending = tasks.filter((task: any) => task.status === 'Pending').length;
                const completed = tasks.filter((task: any) => task.status === 'Done').length;
                setSummary({ total, pending, completed });
            })
            .catch(() => navigate('/'));
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white shadow p-4 rounded">Total Tasks: {summary.total}</div>
                <div className="bg-yellow-100 shadow p-4 rounded">Pending: {summary.pending}</div>
                <div className="bg-green-100 shadow p-4 rounded">Completed: {summary.completed}</div>
            </div>
        </div>
    );
};

export default Dashboard;