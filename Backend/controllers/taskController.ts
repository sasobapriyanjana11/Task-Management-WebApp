import { Request, Response } from 'express';
import Task from '../models/Task';

export const getAllTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

export const createTask = async (req: Request, res: Response) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ message: err });
    }
};

export const updateTask = async (req: Request, res: Response) => {
    try {
        const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ message: err });
    }
};

export const deleteTask = async (req: Request, res: Response) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: 'Task deleted' });
    } catch (err) {
        res.status(500).json({ message: err });
    }
};
