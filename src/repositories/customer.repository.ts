import Customer from "../models/Customer/Customer.model";
import {
  CustomerAttributesOutput,
  CustomerInput,
  CustomerOutput,
} from "../models/Customer/CustomerAttributes";

export interface ICustomerRepository {
  create(customer: CustomerInput): Promise<CustomerOutput>;
}

export class CustomerRepository implements ICustomerRepository {
  private _customerModel;

  constructor() {
    this._customerModel = Customer;
  }

  async create(
    customer: CustomerInput
  ): Promise<Required<CustomerAttributesOutput>> {
    return await this._customerModel.create(customer);
  }
}
