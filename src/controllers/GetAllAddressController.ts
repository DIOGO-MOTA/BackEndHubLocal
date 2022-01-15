import { Request, Response } from 'express';
import GetAllAddressService from '../services/GetAllAddressService';


class GetAllAddressController {
 async handle(request: Request, response: Response) {
   const { id } = request.params;
   const service = new GetAllAddressService();

   const address = await service.execute(id);
 
   return response.json(address);
 }
}

export default GetAllAddressController;