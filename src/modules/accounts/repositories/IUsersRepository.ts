import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import User from '../entities/User';

interface IUsersRepository {
    list(): Promise<User[]>;
    create({
        name,
        email,
        password,
        driver_license,
    }: ICreateUserDTO): Promise<void>;
    findByEmail(email: string): Promise<User>;
}

export { IUsersRepository };
