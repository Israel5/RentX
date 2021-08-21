import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListUsersUseCase from './ListUsersUseCase';

class ListUsersController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listUsersUseCase = container.resolve(ListUsersUseCase);
        const allRegisteredUsers = await listUsersUseCase.execute();
        return response.json(allRegisteredUsers);
    }
}

export { ListUsersController };
