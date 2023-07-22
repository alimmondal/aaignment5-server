import { Model } from 'mongoose';

// type UserName = {
//   firstName: string;
//   middleName?: string;
//   lastName: string;
// };

export type IUser = {
  comment: string[];
};

export type UserModel = Model<IUser, Record<string, unknown>>;
