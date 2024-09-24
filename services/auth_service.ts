import UserRepository from '../repositories/auth_repository';;
import { isValidEmail } from '../lib/validation';
import bcrypt from 'bcrypt';
import User from '../models/user_model';
import { IUser } from '@/types/models_types/user_type';
import jwt from 'jsonwebtoken';
import { Document } from 'mongoose';
import nodemailer from 'nodemailer'


class AuthService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }




  async register(registerData: IUser): Promise<IUser> {
    if (!isValidEmail(registerData.email)) {
      throw new Error('Invalid email format');
    }

    const existingUser = await this.userRepository.findByEmail(registerData.email);
    if (existingUser) {
      throw new Error('Email already in use');
    }

    let hashedPassword: string | undefined;
    if (registerData.password) {
      hashedPassword = await bcrypt.hash(registerData.password, 10);
    }

    const newUser = new User({ ...registerData, password: hashedPassword });
    await newUser.save();
    return newUser;
  }



  async login(loginDTO: { email: string; password: string }): Promise<IUser> {
    if (!isValidEmail(loginDTO.email)) {
      throw new Error('Invalid email format');
    }

    const user = await this.userRepository.findByEmail(loginDTO.email);
    if (!user) {
      throw new Error('Invalid credentials');
    }


    if (loginDTO.password) {
      // If a password is provided, compare it
      if (!user.password) {
        throw new Error('No password set for this user');
      }
      const isMatch = await bcrypt.compare(loginDTO.password, user.password);
      if (!isMatch) {
        throw new Error('Invalid credentials');
      }
    }

    return user;
  }


  // Forgot password method (request a reset)
  async forgotPassword(email: string): Promise<void> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }

    // Generate reset token (JWT or any token-based approach)
    const resetToken = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET as string, {
      expiresIn: '1h',  // Token expires in 1 hour
    });

    // You can send this resetToken to the user's email
    await this.sendResetPasswordEmail(user.email, resetToken);
  }


  // Send reset email (using nodemailer)
  async sendResetPasswordEmail(email: string, token: string): Promise<void> {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,   // Your email
        pass: process.env.EMAIL_PASSWORD, // Your email password
      },
    });

    const resetUrl = `http://localhost:3000/auth/reset-password?token=${token}`;


    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Password Reset',
      html: `<p>You requested a password reset. Click <a href="${resetUrl}">here</a> to reset your password.</p>`,
    };

    await transporter.sendMail(mailOptions);
  }



  // Reset password method (set a new password)
  async resetPassword(token: string, newPassword: string): Promise<void> {
    try {
      const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);
      const user = await this.userRepository.findByEmail(decoded.email);

      if (!user) {
        throw new Error('Invalid or expired token');
      }

      const userDoc = user as IUser & Document;

      // Hash the new password
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      // Update the user's password
      userDoc.password = hashedPassword;

      // Save the updated user
      await userDoc.save();
    } catch (error) {
      throw new Error('Token invalid or expired');
    }
  }




}


export default AuthService;