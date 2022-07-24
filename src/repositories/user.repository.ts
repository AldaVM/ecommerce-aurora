import User from "../models/User/User.model";
import {
  UserAttributesOutput,
  UserInput,
  UserOutput,
} from "../models/User/UserAttributes";

export interface IUserRepository {
  create(user: UserInput): Promise<UserOutput>;
}

export class UserRepository implements IUserRepository {
  private _userModel;

  constructor() {
    this._userModel = User;
  }

  async create(user: UserInput): Promise<Required<UserAttributesOutput>> {
    return await this._userModel.create(user);
  }
}
