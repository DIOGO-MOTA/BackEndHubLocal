import { getRepository } from "typeorm";
import Company from "../entities/Company";

interface Request {
  id: string;
  name: string;
  cnpj: string;
  description: string;
}

 class UpdateCompanyService{
  public async execute({ id, name, cnpj, description}: Request): Promise<Company | Error > {
    const companiesRepository = getRepository(Company);

    const company = await companiesRepository.findOne(id);

    if (!company) {
      return new Error('Company does not exists.');
    };

    company.name = name ? name : company.name;
    company.cnpj = cnpj ? cnpj : company.cnpj;
    company.description = description ? description : company.description;

    await companiesRepository.save(company);

    return company;
  }
}


export default UpdateCompanyService;