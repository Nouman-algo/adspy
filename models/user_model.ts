import mongoose, { Schema, Model } from 'mongoose';
import { IUser } from '@/types/models_types/user_type';

const UserSchema = new Schema<IUser>({
    fullName:{ type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    selectedPackage:{ type: String, required: true },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });
  


const UserModel = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
export default UserModel as Model<IUser>;
  
  