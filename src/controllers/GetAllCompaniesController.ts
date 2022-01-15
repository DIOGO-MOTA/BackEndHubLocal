import { Request, Response } from 'express';
import GetAllCompaniesService from '../services/GetAllCompaniesService';


class GetAllCompaniesController {
 async handle(request: Request, response: Response) {
   const service = new GetAllCompaniesService();

   const companies = await service.execute();
 
   return response.json(companies);
 }
}

export default GetAllCompaniesController;