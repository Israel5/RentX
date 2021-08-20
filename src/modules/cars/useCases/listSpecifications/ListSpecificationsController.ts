import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListSpecificationUseCase from './ListSpecificationsUseCase';

class ListSpecificationsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body;

        const listSpecificationUseCase = container.resolve(
            ListSpecificationUseCase,
        );

        await listSpecificationUseCase.execute({ name, description });

        return response.status(201).send();
    }
}

export { ListSpecificationsController };
