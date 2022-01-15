import { Router } from "express";
import adressRouter from "./address.routes";
import companiesRouter from "./companies.routes";
import sessionsRouter from "./sessions.routes";
import usersRouter from "./users.routes";



const routes = Router();


routes.use('/users', usersRouter)
routes.use('/sessions', sessionsRouter)
routes.use('/companies', companiesRouter)
routes.use('/address', adressRouter)



export default routes;