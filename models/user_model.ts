import mongoose, { Schema, Model } from 'mongoose';
import { IUser } from '@/types/models_types/user_type';
import { randomBytes } from 'crypto';


const UserSchema = new Schema<IUser>({
    fullName:{ type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String,required:true},
    selectedPackage:{ type: String, required: true },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });

  
// Generate a password reset token
UserSchema.methods.generatePasswordReset = function () {
  const token = randomBytes(20).toString("hex");

  // Set the token and expiry time (e.g., 1 hour from now)
  this.resetPasswordToken = token;
  this.resetPasswordExpires = Date.now() + 3600000; // 1 hour from now

  return token;
};
  


const UserModel = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
export default UserModel as Model<IUser>;
  
  