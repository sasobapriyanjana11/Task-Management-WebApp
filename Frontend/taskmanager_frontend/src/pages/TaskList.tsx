import React, { useEffect, useState } from 'react';
import axios from '../utils/axios.ts';
// import { Task } from '../types/Task';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import type {Task} from "../types/Task.ts";

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/tasks')
            .then(res => setTasks(res.data))
            .catch(() => navigate('/'));
    }, []);

    const deleteTask = (id: string) => {
        axios.delete(`/tasks/${id}`).then(() => {
            setTasks(tasks.filter(task => task._id !== id));
        });
    };

    const downloadPDF = () => {
        const doc = new jsPDF();
        doc.text('Task Report', 14, 16);
        doc.autoTable({
            head: [['Title', 'Assigned To', 'Deadline', 'Status']],
            body: tasks.map(task => [task.title, task.assignedTo, task.deadline, task.status])
        });
        doc.save('tasks.pdf');
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-semibold">Task List</h1>
                <button onClick={downloadPDF} className="bg-green-500 text-white px-4 py-2 rounded">Download PDF</button>
            </div>
            <table className="w-full border">
                <thead>
                <tr className="bg-gray-200">
                    <th className="border px-4 py-2">Title</th>
                    <th className="border px-4 py-2">Assigned To</th>
                    <th className="border px-4 py-2">Deadline</th>
                    <th className="border px-4 py-2">Status</th>
                    <th className="border px-4 py-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {tasks.map(task => (
                    <tr key={task._id}>
                        <td className="border px-4 py-2">{task.title}</td>
                        <td className="border px-4 py-2">{task.assignedTo}</td>
                        <td className="border px-4 py-2">{task.deadline}</td>
                        <td className="border px-4 py-2">{task.status}</td>
                        <td className="border px-4 py-2 space-x-2">
                            <button onClick={() => navigate(`/tasks/edit/${task._id}`)} className="text-blue-500">Edit</button>
                            <button onClick={() => deleteTask(task._id!)} className="text-red-500">Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskList;
