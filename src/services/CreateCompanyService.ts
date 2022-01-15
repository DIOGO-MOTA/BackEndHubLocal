import { getRepository } from "typeorm";
import Company from "../entities/Company";

interface Request {
  name: string;
  cnpj: string;
  description: string;
}

 class CreateCompanyService{
  public async execute({ name, cnpj, description}: Request): Promise<Company | Error > {
    const companiesRepository = getRepository(Company);

    const chekCompanyExists = await companiesRepository.findOne({
      where: { cnpj },
    });

    if (chekCompanyExists) {
      return new Error('cnpj already exists.');
    };

    const company = companiesRepository.create({
     name,
     cnpj,
     description,
    });

    await companiesRepository.save(company);

    return company;
  }
}


export default CreateCompanyService;