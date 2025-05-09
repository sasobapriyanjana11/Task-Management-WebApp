export interface Task {
    _id?: string;
    title: string;
    description: string;
    deadline: string;
    assignedTo: string;
    status: 'Pending' | 'In Progress' | 'Done';
}