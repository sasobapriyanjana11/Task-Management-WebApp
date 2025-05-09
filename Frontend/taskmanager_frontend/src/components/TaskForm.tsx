import React, { useState } from 'react';
import type {Task} from "../types/Task.ts";
// import { Task } from '../types/Task';

interface TaskFormProps {
    initialData?: Task;
    onSubmit: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ initialData, onSubmit }) => {
    const [formData, setFormData] = useState<Task>(initialData || {
        title: '',
        description: '',
        deadline: '',
        assignedTo: '',
        status: 'Pending',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded space-y-4">
            <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="w-full p-2 border rounded" required />
            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded" required />
            <input name="deadline" type="date" value={formData.deadline} onChange={handleChange} className="w-full p-2 border rounded" required />
            <input name="assignedTo" value={formData.assignedTo} onChange={handleChange} placeholder="Assigned To" className="w-full p-2 border rounded" required />
            <select name="status" value={formData.status} onChange={handleChange} className="w-full p-2 border rounded">
                <option>Pending</option>
                <option>In Progress</option>
                <option>Done</option>
            </select>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
        </form>
    );
};

export default TaskForm;

