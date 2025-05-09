import React from 'react';
import { Task } from '../types/Task';

interface TaskCardProps {
    task: Task;
    onEdit: () => void;
    onDelete: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onEdit, onDelete }) => {
    return (
        <div className="bg-white shadow rounded p-4 mb-3">
            <h3 className="font-semibold text-lg">{task.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{task.description}</p>
            <div className="text-sm">Deadline: {task.deadline}</div>
            <div className="text-sm">Assigned To: {task.assignedTo}</div>
            <div className="text-sm">Status: {task.status}</div>
            <div className="mt-2 space-x-2">
                <button onClick={onEdit} className="text-blue-500">Edit</button>
                <button onClick={onDelete} className="text-red-500">Delete</button>
            </div>
        </div>
    );
};

export default TaskCard;
