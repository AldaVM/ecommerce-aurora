import { CustomerInput } from "../../models/Customer/CustomerAttributes";
import { UserInput } from "../../models/User/UserAttributes";
import { ICustomerRepository } from "../../repositories/customer.repository";
import { IUserRepository } from "../../repositories/user.repository";

type AccountInput = UserInput & CustomerInput;

interface IAccountRegister extends AccountInput {
  customerEmail: string;
  userpassword: string;
  customerFirtsName: string;
  customerLastName: string;
}

export interface IAccountEcommerceService {
  createAccount(payload: AccountInput): Promise<void>;
}

export class AccountEcommerceService implements IAccountEcommerceService {
  private _customerRepository: ICustomerRepository;
  private _userRepository: IUserRepository;

  constructor(
    customerRepository: ICustomerRepository,
    userRepository: IUserRepository
  ) {
    this._customerRepository = customerRepository;
    this._userRepository = userRepository;
  }

  public async createAccount(payload: IAccountRegister) {
    try {
      const customer = await this._customerRepository.create(payload);
      const user = await this._userRepository.create({
        customerId: customer.customerId,
        username: payload.customerEmail,
        userpassword: payload.userpassword,
      });
    } catch (error) {
      throw error;
    }
  }
}
