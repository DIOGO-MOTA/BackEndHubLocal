import { Request, Response } from 'express';
import DeleteCompanyService from '../services/DeleteCompanyService';


class DeleteCompanyController {
 async handle(request: Request, response: Response) {
   const { id } = request.params;

   const service = new DeleteCompanyService();

   const company = await service.execute(id);

   if (company instanceof Error) {
     return response.status(400).json(company.message);
   }
 
   return response.status(204).end();
 }
}

export default DeleteCompanyController;