import { Request, Response } from 'express';
import CreateCompanyService from '../services/CreateCompanyService';

class CreateCompanyController {
 async handle(request: Request, response: Response) {
   const {name, cnpj, description} = request.body;
   
   const service = new CreateCompanyService();

   const result = await service.execute({ name, cnpj, description });

   if (result instanceof Error) {
     return response.status(400).json(result.message);
   }

   return response.json(result);
 }
}

export default CreateCompanyController;