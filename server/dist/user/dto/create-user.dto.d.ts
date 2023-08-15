import { User } from '../entities/user.entity';
export declare class CreateUserDto extends User {
    name: string;
    subName: string;
    cpf: string;
    email: string;
    password: string;
    refreshToken: string;
}
