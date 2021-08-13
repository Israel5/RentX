import Category from '../../models/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

export default class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) { }

    execute(): Category[] {
        const categories = this.categoriesRepository.list();
        return categories;
    }
}
