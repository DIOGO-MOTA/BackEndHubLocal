import { Request, Response } from 'express';
import DeleteAddressService from '../services/DeleteAddressService';


class DeleteAddressController {
 async handle(request: Request, response: Response) {
   const { id } = request.params;

   const service = new DeleteAddressService();

   const address = await service.execute(id);

   if (address instanceof Error) {
     return response.status(400).json(address.message);
   }
 
   return response.status(204).end();
 }
}

export default DeleteAddressController;