import React from 'react';
import TaskForm from '../components/TaskForm';
import axios from '../utils/axios.ts';
import { useNavigate } from 'react-router-dom';

const AddTask: React.FC = () => {
    const navigate = useNavigate();

    const handleAdd = (task: any) => {
        axios.post('/tasks', task).then(() => {
            navigate('/tasks');
        });
    };

    return (
        <div className="p-6">
            <h1 className="text-xl font-semibold mb-4">Add Task</h1>
            <TaskForm onSubmit={handleAdd} />
        </div>
    );
};

export default AddTask;
