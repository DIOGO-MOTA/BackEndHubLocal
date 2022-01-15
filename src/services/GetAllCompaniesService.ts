import { getRepository } from "typeorm";
import Company from "../entities/Company";

 class GetAllCompaniesService {
  public async execute() {
    const companiesRepository = getRepository(Company);

    const companies = await companiesRepository.find();

    return (companies);
  }
}


export default GetAllCompaniesService;