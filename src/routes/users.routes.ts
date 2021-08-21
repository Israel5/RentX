import { Router } from 'express';

import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController';
import { ListUsersController } from '../modules/accounts/useCases/listUsers/ListUsersController';

const usersRouter = Router();
const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();

usersRouter.post('/', createUserController.handle);
usersRouter.get('/', listUsersController.handle);

export default usersRouter;
