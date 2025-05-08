import { Router } from 'express';
import {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
} from '../controllers/taskController';
import { isAuthenticated } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', isAuthenticated, getAllTasks);
router.post('/', isAuthenticated, createTask);
router.put('/:id', isAuthenticated, updateTask);
router.delete('/:id', isAuthenticated, deleteTask);

export default router;
