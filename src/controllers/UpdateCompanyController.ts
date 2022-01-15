import { Request, Response } from 'express';
import GetAllCompaniesService from '../services/GetAllCompaniesService';
import UpdateCompanyService from '../services/UpdateCompanyService';


class UpdateCompanyController {
 async handle(request: Request, response: Response) {
  const { id } = request.params;
  const { name, cnpj, description } = request.body;

  const service = new UpdateCompanyService();

  const result = await service.execute({id, name, cnpj, description});

  if (result instanceof Error) {
    return response.status(400).json(result.message);
  }

  return response.json(result)
 }
}

export default UpdateCompanyController;