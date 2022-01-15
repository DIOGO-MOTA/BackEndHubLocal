import { getRepository } from "typeorm";
import Address from "../entities/Address";
import Company from "../entities/Company";

interface Request {
  cep: string;
  city: string;
  state: string;
  district: string;
  street: string;
  number: number;
  complement: string;
  company_id: string;
}

 class CreateAddressService {
  public async execute({ cep, city, state, district, street, number, complement, company_id }: Request): Promise<Address | Error > {
    const addressRepository = getRepository(Address);
    const companiesRepository = getRepository(Company);

    if (! await companiesRepository.findOne(company_id)) {
      return new Error('Company does not exists.');
    };

    const address = addressRepository.create({ cep, city, state, district, street, number, complement, company_id });
    
    await addressRepository.save(address);

    return address;
  }
}


export default CreateAddressService;