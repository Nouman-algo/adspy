export interface IUser extends Document {
    _id: any;
    fullName:string;
    email: string;
    password: string;
    selectedPackage:string;

    createdAt?: Date;
    updatedAt?: Date;
  }