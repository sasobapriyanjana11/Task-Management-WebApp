import mongoose, { Document, Schema } from 'mongoose';

export interface ITask extends Document {
    title: string;
    description: string;
    deadline: Date;
    assignedTo: string;
    status: 'Pending' | 'In Progress' | 'Done';
    createdAt: Date;
    updatedAt: Date;
}

const TaskSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String },
        deadline: { type: Date },
        assignedTo: { type: String },
        status: {
            type: String,
            enum: ['Pending', 'In Progress', 'Done'],
            default: 'Pending',
        },
    },
    { timestamps: true }
);

export default mongoose.model<ITask>('Task', TaskSchema);
