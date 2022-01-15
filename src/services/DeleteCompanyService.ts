import { getRepository } from "typeorm";
import Company from "../entities/Company";


class DeleteCompanyService {
  public async execute(id: string) {
    const companiesRepository = getRepository(Company);

    if(!(await companiesRepository.findOne(id))) {
      return new Error ('Company does not exists!')
    }

    await companiesRepository.delete(id);
  }
}


export default DeleteCompanyService;