import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").User>;
    update(updateUserDto: UpdateUserDto, user: User): Promise<{
        password: any;
        id: number;
        name: string;
        subName: string;
        cpf: string;
        email: string;
        refreshToken: string;
    }>;
    delete(user: User): Promise<void>;
    findByCpf(cpf: string): Promise<{
        password: any;
        id: number;
        name: string;
        subName: string;
        cpf: string;
        email: string;
        refreshToken: string;
    }>;
    refreshToken(data: UpdateUserDto): Promise<{
        token: string;
        user: {
            id?: number;
            name: string;
            subName: string;
            cpf: string;
            email: string;
        };
    }>;
}
