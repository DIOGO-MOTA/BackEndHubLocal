import { getRepository } from "typeorm";
import Address from "../entities/Address";

interface Request {
  id: string;
  cep: string;
  city: string;
  state: string;
  district: string;
  street: string;
  number: number;
  complement: string;
}

 class UpdateAddressService{
  public async execute({ id, cep, city, state, district, street, number, complement }: Request): Promise<Address | Error > {
    const addressRepository = getRepository(Address);

    const address = await addressRepository.findOne(id);

    if (!address) {
      return new Error('Address does not exists.');
    };

    address.cep = cep ? cep : address.cep;
    address.city = city ? city : address.city;
    address.state = state ? state : address.state;
    address.district = district ? district : address.district;
    address.street = street ? street : address.street;
    address.number = number ? number : address.number;
    address.complement = complement ? complement : address.complement;


    await addressRepository.save(address);

    return address;
  }
}


export default UpdateAddressService;