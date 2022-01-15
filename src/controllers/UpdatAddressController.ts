import { Request, Response } from 'express';
import UpdateAddressService from '../services/UpdateAddressService';


class UpdateAddressController {
 async handle(request: Request, response: Response) {
  const { id } = request.params;
  const { cep, city, state, district, street, number, complement} = request.body;

  const service = new UpdateAddressService();

  const result = await service.execute({id, cep, city, state, district, street, number, complement });

  if (result instanceof Error) {
    return response.status(400).json(result.message);
  }

  return response.json(result)
 }
}

export default UpdateAddressController;