import { Model } from "./model";

export interface UserModel extends Model<UserModel> {
  name: string;
  password: string;
}
