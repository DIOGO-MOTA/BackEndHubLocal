import { Router } from 'express';
import CreateCompanyController from '../controllers/CreateCompanyController';
import DeleteCompanyController from '../controllers/DeleteCompanyController';
import GetAllCompaniesController from '../controllers/GetAllCompaniesController';
import UpdateCompanyController from '../controllers/UpdateCompanyController';

const companiesRouter = Router();

companiesRouter.get('/', new GetAllCompaniesController().handle);
companiesRouter.post('/', new CreateCompanyController().handle);
companiesRouter.put('/:id', new UpdateCompanyController().handle);
companiesRouter.delete('/:id', new DeleteCompanyController().handle);


export default companiesRouter;