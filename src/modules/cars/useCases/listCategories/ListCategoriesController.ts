import { Request, Response } from 'express';

import ListCategoriesUseCase from './ListCategoriesUseCase';

export default class ListCategoriesController {
    constructor(private listCategoriesUseCase: ListCategoriesUseCase) { }

    handle(request: Request, response: Response): Response {
        const allRegisteredCategories = this.listCategoriesUseCase.execute();
        return response.json(allRegisteredCategories);
    }
}