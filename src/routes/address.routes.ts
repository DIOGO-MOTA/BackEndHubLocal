import { Router } from 'express';
import CreateAddressController from '../controllers/CreateAddressController';
import DeleteAddressController from '../controllers/DeleteAddressController';
import GetAllAddressController from '../controllers/GetAllAddressController';
import UpdateAddressController from '../controllers/UpdatAddressController';

const adressRouter = Router();

adressRouter.get('/:id', new GetAllAddressController().handle);
adressRouter.post('/:id', new CreateAddressController().handle);
adressRouter.put('/:id', new UpdateAddressController().handle);
adressRouter.delete('/:id', new DeleteAddressController().handle);

export default adressRouter;