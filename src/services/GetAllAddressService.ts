import { getRepository } from "typeorm";
import Address from "../entities/Address";

 class GetAllAddressService {
  public async execute( company_id: string ) {
    const addressRepository = getRepository(Address);

    const address = await addressRepository.find({
      where: { company_id },
      relations: ["company"]
    });

    return (address);
  }
}


export default GetAllAddressService;