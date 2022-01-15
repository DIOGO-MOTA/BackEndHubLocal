import { getRepository } from "typeorm";
import Address from "../entities/Address";


class DeleteAddressService {
  public async execute(id: string) {
    const addressRepository = getRepository(Address);

    if(!(await addressRepository.findOne(id))) {
      return new Error ('Company does not exists!')
    }

    await addressRepository.delete(id);
  }
}


export default DeleteAddressService;