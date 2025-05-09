import React, { useEffect, useState } from 'react';
import TaskForm from '../components/TaskForm';
import axios from '../utils/axios.ts';
import { useNavigate, useParams } from 'react-router-dom';
import type {Task} from "../types/Task.ts";
// import { Task } from '../types/Task';

const EditTask: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [task, setTask] = useState<Task | null>(null);

    useEffect(() => {
        axios.get(`/tasks/${id}`).then(res => setTask(res.data));
    }, [id]);

    const handleUpdate = (updatedTask: Task) => {
        axios.put(`/tasks/${id}`, updatedTask).then(() => {
            navigate('/tasks');
        });
    };

    if (!task) return <div className="p-6">Loading...</div>;

    return (
        <div className="p-6">
            <h1 className="text-xl font-semibold mb-4">Edit Task</h1>
            <TaskForm initialData={task} onSubmit={handleUpdate} />
        </div>
    );
};

export default EditTask;
