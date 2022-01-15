import { Request, Response } from 'express';
import CreateAddressService from '../services/CreateAddressService';

class CreateAddressController {
 async handle(request: Request, response: Response) {
  const { id } = request.params;
   const {cep, city, state, district, street, number, complement} = request.body;
   
   const service = new CreateAddressService();

   const result = await service.execute({ 
    cep, 
    city, 
    state, 
    district, 
    street, 
    number, 
    complement, 
    company_id: id,
  });

   if (result instanceof Error) {
     return response.status(400).json(result.message);
   }

   return response.json(result);
 }
}

export default CreateAddressController;