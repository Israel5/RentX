import Specification from '../../entities/Specification';
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

export default class CreateSpecificationUseCase {
    constructor(private specificationsRepository: ISpecificationsRepository) { }

    execute(): Specification[] {
        const specifications = this.specificationsRepository.list();
        return specifications;
    }
}
