import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    profileImageUrl?: string;
    role: 'member' | 'admin';
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema: Schema<IUser> = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        profileImageUrl: { type: String, default: null },
        role: { type: String, enum: ['member', 'admin'], default: 'member' },
    },
    { timestamps: true }
);

export default mongoose.model<IUser>('User', UserSchema);
